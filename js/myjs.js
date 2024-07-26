const { createApp } = Vue;

createApp({
  data() {
    return {
      toDoData: [],
      text: "",
      description: "",
    };
  },
  methods: {
    addTask() {
      this.toDoData.push({
        title: `${this.text}`,
        description: `${this.description}`,
        isComplete: false,
      });
      this.text = "";
      this.description = "";
    },
    chiamata() {
      axios
        .get("server/server.php")
        .then((response) => {
          this.toDoData = response.data;
        })
        .catch((reject) => {
          console.log(reject);
        });
    },
  },
  mounted() {
    this.chiamata();
  },
}).mount("#app");
