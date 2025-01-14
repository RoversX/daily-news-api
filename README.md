# Daily-News-Api

[English](README.md) | [简体中文](README-zh.md)

> This project is a secondary development based on [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)

## Features

- Inherits all functions of the original project
- Simplified the UI interface
- Added some interfaces needed by myself

## API Overview

Please refer to the original project documentation: [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)

## Deployment

### Docker Deployment (Currently Not Supported)

```bash
# Build
docker build -t daily-news-api .

# Run
docker run --restart always -p 6688:6688 -d daily-news-api
# Or use Docker Compose
docker-compose up -d
```

### Manual Deployment

```bash
# Clone the repository
git clone <your-repo-url>
cd daily-news-api

# Install dependencies
npm install

# Development
npm run dev

# Build and Run
npm run build
npm run start
```

## Notes

- This project is a secondary development based on [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)
- Data is cached by default, with a default cache time of 60 minutes
- Some interfaces use web scraping. If this violates any website's terms of service, please notify us to remove the interface

## Disclaimer

- This project is for learning and technical research purposes only
- Please comply with all terms and disclaimers of the original project
- Users assume all responsibility for any issues arising from using this project

## Acknowledgments

Special thanks to:

- [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)
- [ourongxing/newsnow](https://github.com/ourongxing/newsnow)
