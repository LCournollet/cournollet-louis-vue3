import { defineStore } from 'pinia';

export const useMonstersStore = defineStore('monsters', {
  state: () => ({
    monsters: [],
    selectedMonster: null,
    page: 1,
  }),
  actions: {
    async fetchMonsters(perPage = this.perPage) {
      
      const response = await fetch(`https://metallo.ew.r.appspot.com/monsters?page=${this.page}`);
      const data = await response.json();
      console.log(data);
      this.monsters = data;
    },
    async fetchMonster(id) {
      const response = await fetch(`https://metallo.ew.r.appspot.com/monsters/${id}`);
      const data = await response.json();
      this.selectedMonster = data;
    },
    nextPage() {
      this.page++;
      this.fetchMonsters();
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchMonsters();
      }
    }
  }
});
