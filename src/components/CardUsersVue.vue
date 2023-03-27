<template>
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
        <v-card variant="outlined" light>
          <v-card-title> {{ user.name }} </v-card-title>
          <v-card-text>
            <p><v-icon size="16">mdi-account</v-icon>{{ user.username }}</p>
            <p>
              <v-icon size="16">mdi-email</v-icon>{{ user.email | lowerCased }}
            </p>
            <p><v-icon size="16">mdi-city</v-icon>{{ user.address.city }}</p>
            <p><v-icon size="16">mdi-web</v-icon>{{ user.website }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  name: "CardUsersVue",
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