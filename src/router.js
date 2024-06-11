import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import MonsterListView from './views/MonsterListView.vue';
import MonsterDetailView from './views/MonsterDetailView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/monsters', component: MonsterListView },
  { path: '/monster/:id', component: MonsterDetailView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
