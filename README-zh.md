# Daily-News-Api

[English](README.md) | [简体中文](README-zh.md)

> 本项目基于 [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi) 进行二次开发

## 特性

- 继承原项目所有功能
- 简化了界面 UI
- 添加了一些自己需要的接口

## 接口总览

请参考原项目文档: [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)

## 部署

### Docker 部署(目前不受支持)

```bash
# 构建
docker build -t daily-news-api .

# 运行
docker run --restart always -p 6688:6688 -d daily-news-api
# 或使用 Docker Compose
docker-compose up -d
```

### 手动部署

```bash
# 克隆项目
git clone <your-repo-url>
cd daily-news-api

# 安装依赖
npm install

# 开发
npm run dev

# 构建运行
npm run build
npm run start
```

## 须知

- 本项目为基于 [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi) 的二次开发版本
- 默认对数据做了缓存处理，默认为 60 分钟
- 部分接口使用了页面爬虫，若违反对应页面的相关规则，请及时通知去除该接口

## 免责声明

- 本项目仅供学习和技术研究使用
- 请遵守原项目的所有条款和免责声明
- 使用本项目所造成的任何问题，由使用者自行承担

## 鸣谢

特此感谢:

- [imsyy/DailyHotApi](https://github.com/imsyy/DailyHotApi)
- [ourongxing/newsnow](https://github.com/ourongxing/newsnow)
