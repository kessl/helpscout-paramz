# UTM Paster 🔥

A Chrome extension that automatically adds custom UTM parameters to URLs when you paste them on HelpScout. Built with Gen Z vibes and neon aesthetics.

## Features

- ✨ Automatically detects URL pastes on secure.helpscout.net
- 🎯 Adds custom UTM parameters you configure
- 💫 Preserves HelpScout's native link creation (select text + paste URL = link)
- 🔄 Restores original clipboard content after paste
- 🎨 Cyberpunk UI that hits different

## Installation

### Download from GitHub

1. **Download the extension**
   - Go to [Releases](https://github.com/kessl/helpscout-paramz/releases) or clone this repo
   - Download the latest release ZIP or clone: `git clone https://github.com/kessl/helpscout-paramz.git`

2. **Enable Developer Mode in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Toggle **Developer mode** on (top right)

3. **Load the extension**
   - Click **Load unpacked**
   - Select the `helpscout-paramz-v0.1` folder you downloaded
   - The extension icon should appear in your toolbar

4. **Add icon to toolbar (if not visible)**
   - If the extension icon doesn't appear automatically, click the puzzle piece icon (🧩) in your Chrome toolbar
   - Find "UTM Paster" in the extensions list
   - Click the pin icon to add it to your toolbar

## Usage

1. **Configure your UTM parameters**
   - Click the extension icon in Chrome toolbar
   - Enter your custom parameters like: `utm_content=slay&utm_source=vibes`
   - Click **LOCK IT IN** to save

2. **Paste URLs on HelpScout**
   - Go to secure.helpscout.net
   - Copy any URL to your clipboard
   - Paste it in the editor - UTM parameters are automatically added!

## Examples

**Input:** `https://example.com`  
**With params:** `utm_content=test&utm_campaign=email`  
**Output:** `https://example.com?utm_content=test&utm_campaign=email`

## Development

Built with:
- Manifest V3
- Vanilla JavaScript
- Inter font + neon CSS
- Chrome Storage API
- Clipboard API

## License

MIT License - feel free to fork and make it even more fire 💯