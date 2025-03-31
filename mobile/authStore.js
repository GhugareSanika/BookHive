import { create } from "zustand";

export const useAuthStore = create((set) => {
  user: {
    name: "john";
  }
  sayHello: () => console.log("Hello");
});
