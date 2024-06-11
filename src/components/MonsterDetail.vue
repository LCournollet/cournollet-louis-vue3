<template>
    <div v-if="monster" class="container-fluid py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img v-if="monster.image" class="position-absolute w-100 h-100 rounded" :src="monster.image" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-7">
            <div class="border-start border-5 border-primary ps-5 mb-5">
              <h6 class="text-primary text-uppercase">{{ monster.category }}</h6>
              <h1 class="display-5 text-uppercase mb-0">{{ monster.name }}</h1>
            </div>
            <h4 class="text-body mb-4">{{ monster.description }}</h4>
            <div class="border-start border-5 border-primary ps-5 mb-5">
              <h6 class="text-primary text-uppercase">DROPS</h6>
              <ul>
                <li v-for="drop in monster.drops" :key="drop">{{ drop }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMonstersStore } from '../store/monsters';
  
  export default {
    name: 'MonsterDetail',
    setup() {
      const store = useMonstersStore();
      const route = useRoute();
      const monster = ref(null);
  
      const fetchMonster = async () => {
        const monsterId = route.params.id;
        await store.fetchMonster(monsterId);
        monster.value = store.selectedMonster;
      };
  
      onMounted(fetchMonster);
  
      return {
        monster
      };
    }
  };
  </script>
  