<template>
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <div class="mb-5">
            <a></a>
            <h3 class="text-uppercase border-start border-5 border-primary ps-3">Every Monsters</h3>
            <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Page {{ currentPage }}</h5>
            <div v-for="monster in monsters" :key="monster._id" class="d-flex overflow-hidden mb-3 bg-light">
              <img class="img-fluid" :src="monster.image" style="width: 100px; height: 100px; object-fit: cover;" :alt="monster.name">
              <router-link :to="'/monster/' + monster._id" class="h5 d-flex align-items-center bg-light px-3 mb-0">{{ monster.name }}</router-link>
            </div>
          </div>
          <button @click="prevPage" type="button" class="btn btn-outline-success">Prev</button>
          <button @click="nextPage" type="button" class="btn btn-outline-success">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import { useMonstersStore } from '../store/monsters';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'MonsterList',
    setup() {
      const store = useMonstersStore();
      const route = useRoute();
      const monsters = ref([]);
  
      const fetchMonsters = async () => {
        await store.fetchMonsters();
        monsters.value = store.monsters;
      };
  
      const nextPage = () => {
        store.nextPage();
        store.currentPage += 1;
        fetchMonsters();
      };
  
      const prevPage = () => {
        store.prevPage();
        store.currentPage -= 1;
        fetchMonsters();
      };
  
      const currentPage = computed(() => {
        return parseInt(route.query.page) || 1;
      });
  
      onMounted(fetchMonsters);
  
      return {
        monsters,
        nextPage,
        prevPage,
        currentPage
      };
    }
  };
  </script>
  