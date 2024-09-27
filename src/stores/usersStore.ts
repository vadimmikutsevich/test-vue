import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
}

export const useUsersStore = defineStore("usersStore", {
  state: (): UsersState => ({
    users: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
  }),
  actions: {
    async fetchUsers(page = 1) {
      this.loading = true;
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
        );
        const data = await response.json();

        this.users = data;
        this.currentPage = page;
        this.totalPages = 2;
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
