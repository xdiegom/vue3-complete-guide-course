const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      enterUserInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("The button was clicked and this is the alert!");
    },
    addParagraph(event) {
      this.userInput = event.target.value;
    },
    addParagraphWithEnter(event) {
      this.enterUserInput = this.userInput;
    },
  },
});

app.mount("#assignment");
