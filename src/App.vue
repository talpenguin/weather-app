<script>
import WeatherApp from "./components/WeatherApp.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    WeatherApp
  },

  data() {
    return {
      weatherData: null,
      location: null
    };
  },
  // fetch data from api using proxy to avoid cors error
  beforeMount() {
    axios.get(`${process.env.WEATHER_API}`).then(response => {
      this.weatherData = response.data.list;
      this.location = response.data.city.name;
    });
  }
};
</script>

<template>
  <v-app>
    <v-main>
      <weather-app v-if="weatherData" :collection="weatherData" :location="location" />
    </v-main>
  </v-app>
</template>