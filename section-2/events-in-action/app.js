const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      if (this.counter === 0) {
        return;
      }
      this.counter--;
    },
    setName(event, lastName) {
      if (event.target.value === "" || event.target.value === undefined) {
        this.name = "";
        return;
      }
      // event.target is a vanilla javascript
      this.name = event.target.value + " " + lastName;
    },
    sendForm() {
      alert("form submitted");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events-in-action");
