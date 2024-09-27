import { defineStore } from "pinia";

import Preview1 from "../assets/images/work_preview_1.png";
import Preview2 from "../assets/images/work_preview_2.png";
import Preview3 from "../assets/images/work_preview_3.png";
import Preview4 from "../assets/images/work_preview_4.png";

export interface Work {
  id: number;
  title: string;
  desc: string;
  year: string;
  type: string[];
  previewImg: string;
}

export const useWorksStore = defineStore("works", {
  state: () => ({
    works: [] as Work[],
  }),
  actions: {
    fetchMockWorks() {
      this.works = [
        {
          id: 1,
          title: "Designing Dashboards",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          year: "2020",
          type: ["Dashboard"],
          previewImg: Preview1,
        },
        {
          id: 2,
          title: "Vibrant Portraits of 2020",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          year: "2018",
          type: ["Illustration"],
          previewImg: Preview2,
        },
        {
          id: 3,
          title: "36 Days of Malayalam type",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          year: "2018",
          type: ["Typography"],
          previewImg: Preview3,
        },
        {
          id: 4,
          title: "Components",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          year: "2018",
          type: ["Components", "Design"],
          previewImg: Preview4,
        },
      ];
    },
  },
});
