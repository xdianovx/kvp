import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const UserApi = {
  async login(dto: any) {
    const { data } = await instance.post("auth/login", dto);
    return data;
  },

  async register(dto: any) {
    const { data } = await instance.post("auth/register", dto);
    return data;
  },
};

export const PostApi = {
  async getAll() {
    const { data } = await instance.get("post");
    return data;
  },

  async getPost(slug: any) {
    const { data } = await instance.get(`post/${slug}`);
    return data;
  },

  async create(dto: any) {
    const { data } = await instance.post("post", dto);
    return data;
  },

  async register(dto: any) {
    const { data } = await instance.post("auth/register", dto);
    return data;
  },
};
