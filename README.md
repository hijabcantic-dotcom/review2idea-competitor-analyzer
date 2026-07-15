# Review2Idea Competitor Review Analyzer

Turn the App Store or Google Play page you are already viewing into a review-research starting point.

The extension reads only the active tab when you open it. On a public app listing, it opens [Review2Idea](https://review2idea.com/en/free-app-review-analysis-tool) with the competitor URL prefilled. Review2Idea then groups public reviews into evidence-linked recurring problems, hypotheses to test, and customer-interview prompts.

This is a research shortcut, not a demand-validation tool. App reviews can surface questions worth investigating; they cannot prove market size, willingness to pay, or a product roadmap.

## Install locally

1. Download the latest release source archive or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the folder containing `manifest.json`.
5. Visit a public App Store or Google Play listing, then open the extension.

## Privacy

- The extension requires only the `activeTab` permission.
- It reads the current tab URL only after you open the extension.
- It does not collect credentials, browsing history, or review content.
- Analysis runs on Review2Idea only after you select **Analyze app reviews**.

## Development

No build step is required. Edit the files in this repository, reload the unpacked extension from `chrome://extensions`, and test from an App Store or Google Play app page.

## Support

For product research, use the [free app review analysis tool](https://review2idea.com/en/free-app-review-analysis-tool). For issues with this extension, open a GitHub issue.
