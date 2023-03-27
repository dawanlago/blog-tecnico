<template>
  <div class="users">
    <TitleVue title="Usuários" />
    <div id="card-users-vue">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(user, index) in $store.state.users"
          :key="index"
        >
          <CardUsersVue :user="user" />
        </v-col>
      </v-row>
    </div>
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
    async loadUsers() {
      const getAllUsers = new GetAllUsers();
      const users = await getAllUsers.execute();

      this.$store.commit("setUsers", users);
    },
  },
  async created() {
    this.$root.$emit("Spinner::show");
    await this.loadUsers();
    setTimeout(() => {
      this.$root.$emit("Spinner::hide");
    }, 300);
  },
};
</script>
  