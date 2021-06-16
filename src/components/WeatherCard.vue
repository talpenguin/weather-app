<script>
export default {
  name: "WeatherCard",
  props: {
    active: { type: Boolean, default: false },
    img: { type: String, default: "Clear" },
    temp: { type: Number },
    formattedDate: { type: String },
    id: { type: Number, required: true }
  },
  methods: {
    getImage(src) {
      return require(`../assets/${src}.svg`);
    },
    getTempInCel(temp) {
      return `${parseInt(temp - 273.15)}˚`;
    }
  }
};
</script>

<template>
  <v-card
    height="250"
    width="100"
    @click="$emit('click')"
  >
    <v-row align="center">
      <div class="date-card block">{{ formattedDate }}</div>
      <v-col cols="18" class="pt-6">
        <v-img :src="`${getImage(img)}`" :alt="img"></v-img>
      </v-col>
      <v-col class="text-h4 font-weight-bold" cols="12">
        {{ getTempInCel(temp) }}
      </v-col>
    </v-row>
  </v-card>
</template>
