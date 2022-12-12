const app = Vue.createApp({
  data() {
    return {
      age: 30,
      name: "Diego",
      googlePictureURL:
        "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
