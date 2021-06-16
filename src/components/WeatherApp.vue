<script>
import moment from "moment";
import WeatherSlider from "./WeatherSlider.vue";
import DisplayHeader from "./DisplayHeader.vue";

export default {
  name: "WeatherApp",
  components: { WeatherSlider, DisplayHeader },
  data() {
    return {
      selected: null
    };
  },
  props: {
    collection: { type: Array },
    location: { type: String }
  },
  methods: {
    // map collection of data and retrieve only usable data
    collectionAsArray() {
      if (this.collection) {
        return this.collection.map(({ dt, dt_txt, weather, main }) => {
          return {
            id: dt,
            formattedDate: this.formatDate(dt_txt),
            date: dt_txt,
            img: weather[0].main,
            temp: main.temp,
            description: weather[0].description,
            maxTemp: main.temp_max,
            minTemp: main.temp_min,
            location: this.location
          };
        });
      }
    },
    // formate date to desired pattern
    formatDate(date) {
      return moment(new Date(date)).format("DD.MM  hh:mm");
    },
    // toggle display of selected time interval
    toggle(id) {
      this.selected = this.collectionAsArray().find(el => el.id === id);
    },
    //this function is duplicated in the child component - needs to be modified
    getImage(src) {
      return require(`../assets/${src}.svg`);
    }
  }
};
</script>

<template>
  <v-container class="fill-height">
    <v-sheet class="mx-auto" elevation="8" max-width="900">
      <display-header
        :collection="collectionAsArray()"
        :selected="this.selected"
      />

      <weather-slider
        :collection="collectionAsArray()"
        @click="toggle($event)"
      />
    </v-sheet>
  </v-container>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  font-family: "Roboto", sans-serif;
}

.container ::v-deep .v-sheet,
.container ::v-deep .v-icon,
.v-main__wrap,
.not-active {
  background-color: #262a59;
  color: white;
}

.container ::v-deep .v-card {
  padding: 20px;
  text-align: center;
}
</style>
