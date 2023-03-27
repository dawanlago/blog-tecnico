<template>
  <div class="users">
    <TitleVue title="Usuários" />
    <CardUsersVue />
  </div>
</template>
  
  <script>
import TitleVue from "@/components/TitleVue.vue";
import CardUsersVue from "@/components/CardUsersVue.vue";

import { GetAllUsers } from "@/services/GetAllUsers";

export default {
  name: "HomeView",
  components: {
    TitleVue,
    CardUsersVue,
  },
  methods: {
    async loadPosts() {
      const getAllUsers = new GetAllUsers();
      const users = await getAllUsers.execute();

      console.log(users);
      this.$store.commit("setUsers", users);
    },
  },
  async created() {
    this.loadPosts();
  },
};
</script>
  