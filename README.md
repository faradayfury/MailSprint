# MailSprint browser extension

This browser extension provides a TLDR (Too Long; Didn't Read) summary of emails using the ChatGPT API. The extension is designed to work with Chromium-based browsers, such as Google Chrome and Microsoft Edge.

## Features

- Generates a TLDR summary for the currently open email
- Clean and modern user interface
- There's a flower emoji at the end of the summary

## Installation

1. Clone or download the repository to your local machine.
2. Open your Chromium-based browser.
3. Go to `chrome://extensions/` in the address bar.
4. Enable "Developer mode" using the toggle in the top right corner.
5. Click the "Load unpacked" button.
6. Navigate to the directory where you saved the repository and select the folder containing the extension files.
7. The extension should now be installed and visible in your extensions list.

## Usage

1. Open an email in your browser.
2. Click the "Email TLDR" extension icon in your browser's toolbar.
3. In the popup, click the "Generate TLDR" button.
4. The extension will generate and display a TLDR summary of the email.

## Notes

- The extension uses the ChatGPT API, which requires an API key from OpenAI. Make sure to add your API key to the `popup.js` file.
- This extension is designed for demonstration purposes. The email extraction and summary generation methods may not work with all email clients or formats.

## Future improvements

At present, the browser extension is capable of generating TLDR summaries of individual emails, which can save you time and help you stay on top of your inbox. However, we recognize that many email conversations involve multiple messages and threads, and that summarizing these conversations can be just as important. Therefore, one of our top priorities for future development is to enable the extension to summarize entire email threads.
