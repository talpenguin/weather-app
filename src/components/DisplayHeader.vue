<script>
import moment from "moment";
import { WeatherMixins } from "./WeatherMixins.js";

export default {
  name: "DisplayHeader",
  props: {
    collection: { type: Array },
    selected: { type: Object }
  },
  mixins: [WeatherMixins],
  methods: {
    formateDateForHeader(date) {
      return moment(new Date(date))
        .format("dddd, D[.] MMMM")
        .split(",");
    }
  }
};
</script>

<template>
  <v-sheet v-if="collection" height="200" tile>
    <v-row class="fill-height" align="center" justify="center" v-if="selected">
      <transition name="fade" mode="out-in">
        <v-col :key="selected.img" cols="3">
          <v-img width="120" :src="`${getImage(selected.img)}`" />
        </v-col>
      </transition>
      <v-col cols="3">
        <transition name="fade" mode="out-in">
          <v-row class="secondary-text" :key="selected.description">
            <span> {{ selected.description }}</span>
            <span class="ml-4">
              {{ getTempInCel(selected.maxTemp) }}/
              {{ getTempInCel(selected.minTemp) }}</span
            >
          </v-row>
        </transition>
        <transition name="fade" mode="out-in">
          <v-row :key="getTempInCel(selected.temp)">
            <div class="ml-2 text-h1 font-weight-bold">
              {{ getTempInCel(selected.temp) }}
            </div>
          </v-row>
        </transition>
      </v-col>
      <v-col cols="3">
        <div class="mb-4 secondary-text">{{ selected.location }}</div>
        <div class="text-h3 font-weight-bold">
          {{ formateDateForHeader(selected.date)[0] }}
        </div>
        <div class="text-h4 font-weight-bold mt-2">
          {{ formateDateForHeader(selected.date)[1] }}
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style>
.secondary-text {
  color: #a8aabd;
  font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

 {
  opacity: 0;
}
</style>
