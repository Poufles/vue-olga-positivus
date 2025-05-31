import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'
import BasicButton from './components/Buttons/BasicButton/BasicButton.vue';

import './styles/main-responsive.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('BasicButton', BasicButton);

app.mount('#app');
