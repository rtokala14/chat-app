import { UseMutationResult, useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { type ReactNode, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
};

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
  return useContext(Context) as AuthContext;
}

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  image?: string;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
    onSuccess() {
      navigate("/login");
    },
  });
  const login = useMutation({
    mutationFn: (id: string) => {
      return axios
        .post(`${import.meta.env.VITE_SERVER_URL}/login`, {
          id,
        })
        .then((res) => {
          res.data as { token: string; user: User };
        });
    },
  });
  return (
    <Context.Provider value={{ signup, login }}>{children}</Context.Provider>
  );
}
