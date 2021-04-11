//  远程获取接口
import axios from "axios";
import { APPCODE } from "@/services/config";

export async function getNewsChannels() {
  const resp = await axios.get("http://ali-news.showapi.com/channelList", {
    headers: {
      Authorization: `APPCODE ${APPCODE}`,
    },
  });
  return resp.data.showapi_res_body.channelList;
}

/**
 * 按频道分页
 * @param channelId 频道id
 * @param page 页码 从1开始
 * @param limit 每页多少条数据
 */
export async function getNews(channelId, page = 1, limit = 10) {
  const resp = await axios.get("http://ali-news.showapi.com/newsList", {
    headers: {
      Authorization: `APPCODE ${APPCODE}`,
    },
    params: {
      channelId,
      page,
      maxResult: limit,
    },
  });
  return resp.data.showapi_res_body.pagebean;
}
