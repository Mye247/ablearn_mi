/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

// 커스텀 axios
const youtubeAPI = axios.create({ baseURL: "https://api.youtube.com" });
const kakaoAPI = axios.create({ baseURL: "https://api.kakao.com" });
const naverAPI = axios.create({ baseURL: "https://api.naver.com" });

// 여러개 사용 가능
// youtubeAPI.get();
// kakaoAPI.post();
// naverAPI.put();

const ourAPI = axios.create({ baseURL: "https://api.ours.com" });

// 행동 만들기
export default function LogIn() {
  const response = ourAPI.post("/log-in", { email: "a", password: "123" });

  ourAPI.defaults.headers[
    "Authorization"
  ] = `Bearer ${response.data.accessToken}`;
}
