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
      if (this.text.trim()) {
        let item = {
          title: `${this.text}`,
          description: `${this.description.trim()}`,
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
      }
    },
    eliminateTask(index) {
      let data = {
        eliminate: index,
      };
      axios.post(this.server, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      this.toDoData.splice(index, 1);
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
