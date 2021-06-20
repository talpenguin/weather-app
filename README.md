# weather-app - A project by Tal Erez

**In this project I had to implement a simple 5 days/3 hours forecast application using a given api.**

The project was built using [Vue CLI](https://cli.vuejs.org/) (with default configurations, Vue 2). I decided to use Vue 2 and not Vue 3 in this project since I planned on using [Vuetify](https://vuetifyjs.com/en/), which doesn't support Vue 3 at the moment.

For fetching the data from the endpoint I used the [axios](https://github.com/axios/axios) package, and in order to resolve CORS policy error I used a proxy server on the same domain as the endpoint. The proxy is initialized in the vue.config.js file in the root directory.

By using Vuetify's v-card and v-slide-group components I managed to implement a template of the weather app, and modified it using vuetify's classes.
After I had a working MVP in a single component, I split the app into separate components: App, Header, Slider and Card in order to receive reusable components that I could render with the differnet data received by the api.

After expected behaviour was achieved, I applied styles and other beautifications to the application, as well as using mixin for methods that are used in multiple components.

The final step was testing the application using Jest unit testing. Only one component (WeatherCard) is tested, therefore test coverage is relatively low.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve -- --port 3000
```


## Author

Tal Erez
