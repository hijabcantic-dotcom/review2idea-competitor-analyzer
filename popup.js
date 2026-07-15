const BASE_URL = 'https://review2idea.com/en/free-app-review-analysis-tool';
const UTM = 'utm_source=chrome_extension&utm_medium=referral&utm_campaign=competitor_review_analysis';

const status = document.querySelector('#status');
const analyze = document.querySelector('#analyze');
const openTool = document.querySelector('#open-tool');

function isSupportedAppUrl(url) {
  try {
    const host = new URL(url).hostname;
    return host === 'apps.apple.com' || host === 'play.google.com';
  } catch {
    return false;
  }
}

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  const appUrl = tab?.url || '';
  if (!isSupportedAppUrl(appUrl)) {
    status.textContent = 'Open an App Store or Google Play competitor page, then use this extension to start a review analysis.';
    return;
  }

  const destination = `${BASE_URL}?url=${encodeURIComponent(appUrl)}&${UTM}`;
  status.textContent = 'This app is ready. Review2Idea will prefill its URL so you can start the free analysis.';
  analyze.disabled = false;
  analyze.addEventListener('click', () => chrome.tabs.create({ url: destination }));
  openTool.href = destination;
});
