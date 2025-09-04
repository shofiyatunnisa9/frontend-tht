import api from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

interface RegisterData {
  name: string;
  email: string;
  gender: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export function useRegister() {
  return useMutation({
    mutationFn: async (data: RegisterData) => {
      const res = await api.post("/register", data);
      return res.data;
    },
  });
}
export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await api.post("/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    },
  });
}
