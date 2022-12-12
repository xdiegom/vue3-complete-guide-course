Vue.createApp({
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal);
      this.goal = "";
    },
  },
}).mount("#app");
