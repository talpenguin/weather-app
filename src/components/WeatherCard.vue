<script>
import { WeatherMixins } from "./WeatherMixins.js";

export default {
  name: "WeatherCard",
  props: {
    active: { type: Boolean, default: false },
    img: { type: String, default: "Clear" },
    temp: { type: Number },
    formattedDate: { type: String },
    id: { type: Number, required: true }
  },
  mixins: [WeatherMixins]
};
</script>

<template>
  <v-card height="250" width="100" @click="$emit('click')">
    <v-row align="center">
      <div class="date-card secondary-text">{{ formattedDate }}</div>
      <v-col cols="18" class="pt-6">
        <v-img :src="`${getImage(img)}`" :alt="img"></v-img>
      </v-col>
      <v-col class="text-h4 font-weight-bold" cols="12">
        {{ getTempInCel(temp) }}
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.secondary-text {
  color: #a8aabd;
  font-size: 20px;
}
</style>
