<template>
  <v-card @click="handleUser(user.id)" variant="outlined" light>
    <v-card-title> {{ user.name }} </v-card-title>
    <v-card-text>
      <p><v-icon size="16">mdi-account</v-icon>{{ user.username }}</p>
      <p><v-icon size="16">mdi-email</v-icon>{{ user.email | lowerCased }}</p>
      <p><v-icon size="16">mdi-city</v-icon>{{ user.address.city }}</p>
      <p><v-icon size="16">mdi-web</v-icon>{{ user.website }}</p>
    </v-card-text>
  </v-card>
</template>
  
  <script>
import { GetUser } from "@/services/GetUser";
export default {
  name: "CardUsersVue",
  props: ["user"],
  methods: {
    async getUser(id) {
      const getUser = new GetUser();
      const user = await getUser.execute(id);

      return user;
    },
    async handleUser(id) {
      const user = await this.getUser(id);
      this.$store.commit("setUser", user);

      this.$router.push("/user");
    },
  },
  filters: {
    lowerCased(value) {
      return value.toLowerCase();
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.v-sheet.v-card {
  min-height: 142px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 10px;
  cursor: pointer;

  .v-card__title {
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .v-card__text p {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 0;
    .v-icon {
      margin-right: 5px;
    }
  }
}

.v-sheet.v-card:hover {
  border: 1px solid var(--primary);
  box-shadow: none;
}
</style>