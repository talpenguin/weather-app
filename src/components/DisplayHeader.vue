<script>
import moment from "moment";


export default {
  name: "DisplayHeader",
  props: {
    collection: { type: Array },
    selected: { type: Object }
  },
  methods: {
    getImage(src) {
      return require(`../assets/${src}.svg`);
    },
    getTempInCel(temp) {
      return `${parseInt(temp - 273.15)}˚`;
    },
    formateDateForHeader(date){
      return moment(new Date(date)).format("dddd, MMMM Do YYYY")
    }
  }
};
</script>

<template>
  <v-expand-transition>
    <v-sheet v-if="collection" height="200" tile>
      <v-row class="fill-height" align="center" justify="center" v-if="selected">
        <v-col cols="3">
          <v-img
            width="120"
            :src="`${getImage(selected.img)}`"
          />
        </v-col>
        <v-col cols="3">
          <span> {{selected.description}}</span>
          <span class="ml-4"> {{ getTempInCel(selected.maxTemp)}}/{{ getTempInCel(selected.minTemp)}}</span>
          <div class="ml-2 text-h1 font-weight-bold">
            {{ getTempInCel(selected.temp) }}
          </div>
        </v-col>
        <v-col cols="3">
          {{selected.location}}
          {{formateDateForHeader(selected.date)}}
        </v-col>
      </v-row>
    </v-sheet>
  </v-expand-transition>
</template>

