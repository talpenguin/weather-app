<script>
import WeatherCard from "./WeatherCard.vue";

export default {
  name: "WeatherSlider",
  components: { WeatherCard },
  props: {
    collection: { type: Array }
  },
};
</script>

<template>
  <v-slide-group v-model="collection" class="pa-4 reounded" show-arrows>
    <v-slide-item
      v-for="{ id, formattedDate, img, temp } in collection"
      :value="id"
      :key="id"
    >
      <weather-card
        :img="img"
        :formattedDate="formattedDate"
        :temp="temp"
        :id="id"
        @click="$emit('click', id)"
      />
    </v-slide-item>
  </v-slide-group>
</template>
