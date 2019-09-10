import axios from "axios";

const confCreateAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function confCreate(title, mainTopics, startTime, members) {
  return confCreateAxios
    .post("conf_room/create", { title, mainTopics, startTime, members })
    .then(res => {
      console.log(res.data);

      console.log("***************************");
      console.log(res.data.message);
      console.log("***************************");
    });
}
