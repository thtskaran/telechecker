# Telegram Username Checker

## Overview
This Node.js script is designed to check the availability of Telegram usernames. It identifies whether usernames are unclaimed or banned. The script reads a list of usernames from a text file, makes HTTP requests to verify each username's status on Telegram, and records usernames that are either unclaimed or banned into an output file.

## Features
- **Concurrent Requests**: Handles up to 5 usernames simultaneously for efficient processing.
- **Robust Error Handling**: Includes error handling to ensure the script runs smoothly even if some requests fail.
- **Simple Output**: Writes usernames that are unclaimed or banned to 'hits.txt'.

## Requirements
- Node.js
- NPM (Node Package Manager)

## Installation
1. Ensure Node.js and NPM are installed on your system.
2. Clone this repository or download the source code.
3. Navigate to the project directory and install dependencies:
   ```bash
   npm install

## Usage
1. Add the usernames you want to check in usernames.txt, each on a new line.
2. Run the script:
```bash
   node index.js
```
3. Check hits.txt for the list of usernames that are unclaimed or banned.

## Configuration
- `inputFile`: Path to the file containing the usernames to check.
- `outputFile`: Path to the file where results will be saved.
- `baseUrl`: The base URL used for checking the usernames.
- `keyword`: The keyword that indicates a username is unclaimed or banned.

## Disclaimer
This script is for educational purposes only. Ensure compliance with Telegram's terms of service when using this script.

## License
[MIT LICENSE]

## Author
[@thtskaran]

