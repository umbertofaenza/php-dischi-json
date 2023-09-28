const { createApp } = Vue;

createApp({
  data() {
    return {
      listaDischi: [],
    };
  },

  mounted() {
    axios.get("./server.php").then((response) => {
      this.listaDischi = response.data;
    });
  },
}).mount("#app");
