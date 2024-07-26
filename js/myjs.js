const { createApp } = Vue;

createApp({
  data() {
    return {
      toDoData: [],
      text: "",
      description: "",
      server: "server/server.php",
    };
  },
  methods: {
    addTask() {
      let item = {
        title: `${this.text}`,
        description: `${this.description}`,
        isComplete: false,
      };
      const dataUpdata = {
        toDo: item,
      };
      axios.post(this.server, dataUpdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      this.toDoData.push(item);
      this.text = "";
      this.description = "";
    },
    getApi() {
      axios
        .get(this.server)
        .then((response) => {
          this.toDoData = response.data;
        })
        .catch((reject) => {
          console.log(reject);
        });
    },
  },
  mounted() {
    this.getApi();
  },
}).mount("#app");
