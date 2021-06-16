<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld
  },

  data() {
    return {
      weatherData: null
    };
  },
  // fetch data from api using proxy to avoid cors error
  beforeMount() {
    axios.get(`${process.env.WEATHER_API}`).then(response => {
      this.weatherData = response.data.list;
    });
  }
};
</script>

<template>
  <v-app>
    <v-main>
      <HelloWorld :collection="weatherData"/>
    </v-main>
  </v-app>
</template>