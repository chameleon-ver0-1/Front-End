import axios from "axios";

const projectAxios = axios.create({
  baseURL: "https://a.chameleon4switch.cf/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDaGFtZWxlb24iLCJzdWIiOiJ0ZXN0MDFAZ21haWwuY29tIiwiaWF0IjoxNTY2ODMyODI4NzQyLCJleHAiOjE1NjY5MTkyMjg3NDJ9.JbT0WUKxRuTGfDVwSzSZZBMaf_GGv6r5YQndXma6Zro"
  },
  timeout: 5000
});
export function getProjectList() {
  return projectAxios.get("project/list").then(res => {
    console.log(res.data);

    console.log("***************************");
    console.log(res.data.message);
    console.log("***************************");
  });
}
