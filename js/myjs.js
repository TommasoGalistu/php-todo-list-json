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
    cambiaBoleano(index) {
      console.log(index);
      let data = {
        changeStatus: index,
      };
      axios
        .post(this.server, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          this.toDoData[index].isComplete = this.toDoData[index].isComplete
            ? false
            : true;
        })
        .catch((error) => {
          console.error("Error changing task status:", error);
        });
    },
    showDescription(index) {
      let form = document.createElement("form");
      form.method = "POST";
      form.action = "./otherPage/descriptionTask.php";

      let input = document.createElement("input");
      input.type = "hidden";
      input.name = "descrizione";
      input.value = this.toDoData[index].description;
      form.appendChild(input);

      document.body.appendChild(form);
      form.submit();
    },
    addTask() {
      if (this.text.trim()) {
        let item = {
          title: this.text,
          description: this.description.trim(),
          isComplete: false,
        };
        const dataUpdata = {
          toDo: item,
        };
        axios
          .post(this.server, dataUpdata, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(() => {
            this.toDoData.push(item);
            this.text = "";
            this.description = "";
          })
          .catch((error) => {
            console.error("Error adding task:", error);
          });
      }
    },
    eliminateTask(index) {
      let data = {
        eliminate: index,
      };
      axios
        .post(this.server, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          this.toDoData.splice(index, 1);
        })
        .catch((error) => {
          console.error("Error eliminating task:", error);
        });
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
