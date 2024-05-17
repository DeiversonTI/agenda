import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import '../src/assets/css/index.css'
// import '../assets/css/style.css'
import '../public/css_new/estilo.css'


import { SetupCalendar } from 'v-calendar';
import 'v-calendar/dist/style.css';

// Setup plugin for defaults or `$screens` (optional)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// createApp(App).use(VueSweetalert2).use(store).use(SetupCalendar, {}).use(router).mount('#app')
createApp(App).use(VueSweetalert2).use(SetupCalendar, {}).use(router).mount('#app')
