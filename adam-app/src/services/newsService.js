//  远程获取接口
import axios from "axios";
import { APPCODE } from "@/services/config";

export async function getNewsChannels() {
  const { data } = await axios.get("http://ali-news.showapi.com/newsListSLI", {
    headers: {
      Authorization: `APPCODE ${APPCODE}`,
    },
  });
  return data;
}

getNewsChannels();

export function getNews() {}
