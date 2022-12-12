const app = Vue.createApp({
  data() {
    return {
      a: 1,
      b: 2,
      vueURL: "https://vuejs.org",
      courseGoal: "Finish the course and learn Vue!",
    };
  },
  methods: {
    sum() {
      return this.a + this.b;
    },
  },
});

app.mount("#user-goal");
