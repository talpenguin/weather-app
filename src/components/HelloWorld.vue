<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selected: null
    };
  },
  props: {
    collection: { type: Array }
  },
  methods: {
    collectionAsArray() {
      if (this.collection) {
        return this.collection.map(({ dt, dt_txt, weather, main }) => {
          return {
            id: dt,
            date: dt_txt,
            img: weather[0].main,
            temp: main.temp
          };
        });
      }
    },
    toggle(e, i) {
      this.selected = this.collectionAsArray().find(el => el.id === i);
    },
    getImage(src) {
      return require(`../assets/${src}.svg`);
    },
    getTempInCel(temp) {
      return `${parseInt(temp - 273.15)} C`;
    }
  }
};
</script>

<template>
  <v-container class="fill-height">
    <v-sheet
      align-center
      justify-center
      class="mx-auto"
      elevation="8"
      max-width="900"
    >
      <v-expand-transition>
        <v-sheet v-if="collection != null" height="200" tile>
          <v-row class="fill-height" align="center" justify="center">
            <h3 v-if="this.selected" class="text-h6">
              {{ this.selected.date }}
              <v-img width="92" :src="`${getImage(this.selected.img)}`" />
            </h3>
          </v-row>
        </v-sheet>
      </v-expand-transition>
      <v-slide-group v-model="collection" class="pa-4 reounded" show-arrows>
        <v-slide-item
          v-for="{ id, date, img, temp } in collectionAsArray()"
          :value="id"
          :key="id"
          v-slot="{ active }"
        >
          <v-card
            :class="active ? 'primary' : 'blue-grey darken-3'"
            height="250"
            width="100"
            @click="toggle($event, id)"
          >
            <v-row align="center">
              {{ date }}

              <v-col class="text-h6" cols="8">
                {{ getTempInCel(temp) }}
              </v-col>
              <v-col cols="10">
                <v-img :src="`${getImage(img)}`" :alt="img" width="92"></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<style scoped>
.container ::v-deep .v-sheet,
.container ::v-deep .v-icon {
  background-color: #263238;
  color: white;
}
</style>
