import { createApp } from "vue";
import App from "./App.vue";
import store from "./store.js";

import BaseTitle from './components/BaseTitle.vue';
import BaseInput from './components/BaseInput.vue';
import BaseList from './components/BaseList.vue';
import BaseListItem from './components/BaseListItem.vue';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';

const app = createApp(App);

//app.use(router);
app.use(store);

app.use(PrimeVue, {ripple: true});

app.component('indigo-button', Button);

app.component('base-title', BaseTitle);
app.component('base-input', BaseInput);
app.component('base-list', BaseList);
app.component('base-list-item', BaseListItem);

app.mount('#app');