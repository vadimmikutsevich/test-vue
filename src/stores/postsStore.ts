import { defineStore } from "pinia";

export interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  categories: string[];
}

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [] as Post[],
  }),
  actions: {
    fetchMockPosts() {
      this.posts = [
        {
          id: 1,
          title: "UI Interactions of the week",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          date: "12 Feb 2019",
          categories: ["Express", "Handlebars"],
        },
        {
          id: 2,
          title: "Making a design system from scratch",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          date: "12 Feb 2020",
          categories: ["Design", "Pattern"],
        },
        {
          id: 3,
          title: "Creating pixel perfect icons in Figma",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          date: "12 Feb 2020",
          categories: ["Figma", "Icon Design"],
        },
        {
          id: 4,
          title: "The fourth post",
          content: "This is the fourth post content",
          date: "12 Feb 2020",
          categories: ["Express", "Handlebars"],
        },
      ];
    },
  },
});
