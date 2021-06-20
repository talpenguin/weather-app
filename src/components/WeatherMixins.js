export const WeatherMixins = {
  props: {
  },
  data() {
    return {
    };
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
