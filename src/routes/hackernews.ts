import type { RouterData } from "../types.js";
import { get } from "../utils/getData.js";
import { load } from "cheerio";
import type { RouterType } from "../router.types.js";

export const handleRoute = async (_: undefined, noCache: boolean) => {
  const listData = await getList(noCache);
  const routeData: RouterData = {
    name: "hackernews",
    title: "Hacker News",
    type: "Popular",
    description: "News about hacking and startups",
    link: "https://news.ycombinator.com/",
    total: listData.data?.length || 0,
    ...listData,
  };
  return routeData;
};

const getList = async (noCache: boolean) => {
  const baseUrl = "https://news.ycombinator.com";
  const result = await get({ 
    url: baseUrl, 
    noCache,
    responseType: "text",
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br",
      "DNT": "1",
      "Connection": "keep-alive",
      "Upgrade-Insecure-Requests": "1",
    }
  });

  try {
    const $ = load(result.data);
    const stories: RouterType["hackernews"][] = [];

    $(".athing").each((_, el) => {
      const item = $(el);
      const id = item.attr("id") || "";
      const title = item.find(".titleline a").first().text().trim();
      const href = item.find(".titleline a").first().attr("href");
      // 规范化为绝对 URL：外链保持原样，相对链接（如 Ask HN 的 item?id=xxx）补全域名
      const resolvedUrl = new URL(href || `item?id=${id}`, baseUrl).toString();
      
      // 获取分数并转换为数字
      const scoreText = $(`#score_${id}`).text().match(/\d+/)?.[0];
      const hot = scoreText ? parseInt(scoreText, 10) : undefined;

      if (id && title) {
        stories.push({
          id,
          title,
          hot,
          timestamp: undefined,
          url: resolvedUrl,
          mobileUrl: resolvedUrl,
        });
      }
    });

    return {
      ...result,
      data: stories,
    };
  } catch (error) {
    throw new Error(`Failed to parse HackerNews HTML: ${error}`);
  }
}; 