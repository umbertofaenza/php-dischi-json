const { createApp } = Vue;

createApp({
  data() {
    return {
      listaDischi: [],
    };
  },

  mounted() {
    axios.get("../backend/server.php").then((response) => {
      this.listaDischi = response.data;
    });
  },
}).mount("#app");
