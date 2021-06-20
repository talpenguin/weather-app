# weather-app - A project by Tal Erez

The project was built using Vue cli (with default configurations, Vue 2).
I decided to use Vue 2 and not Vue 3 in this project since I planned on using Vuetify, which doesn't support Vue 3 at the moment.
For fetching the data from the endpoint I used the axios package, and in order to resolve CORS policy error I used a proxy server on the same domain as the endpoint. The proxy is initialized in the vue.config.js file.
By using Vuetify's v-card and v-slide-group components I managed to implement a template of the weather app, and modified it using vuetify's classes.
After I had a working MVP in a single component, I split the app into separate components: App, Header, Slider and Card in order to receive reusable components that I could render with the differnet data received by the api.
The end step was applying styles and other beautifications of the app, as well as using mixin for methods that are used in multiple components.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve -- --port 3000
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
