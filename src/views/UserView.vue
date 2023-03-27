<template>
  <v-card variant="outlined">
    <v-tabs
      v-model="tab"
      slider-color="#18A0FB"
      centered
      icons-and-text
      fixed-tabs
    >
      <v-tab href="#principal">
        <v-icon>mdi-account</v-icon>
        Dados Principais
      </v-tab>

      <v-tab href="#address">
        <v-icon>mdi-city</v-icon>
        Endereço
      </v-tab>

      <v-tab href="#company">
        <v-icon>mdi-domain</v-icon>
        Trabalho
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="principal">
        <div class="row card-conteudo">
          <v-card variant="outlined" cols="12" flat>
            <v-card-title>{{ $store.state.user.name }}</v-card-title>
            <v-card-text>
              <p><span>Usuário:</span> {{ $store.state.user.username }}</p>
              <p><span>E-mail:</span> {{ $store.state.user.email }}</p>
              <p><span>Telefone:</span> {{ $store.state.user.phone }}</p>
              <p><span>Site:</span> {{ $store.state.user.website }}</p>
            </v-card-text>
          </v-card>
        </div>
      </v-tab-item>

      <v-tab-item :key="2" value="address">
        <v-card variant="outlined" flat>
          <v-card-title>{{ $store.state.user.name }}</v-card-title>
          <v-card-text>
            <p><span>Rua:</span> {{ $store.state.user.address.street }}</p>
            <p>
              <span>Complemento:</span> {{ $store.state.user.address.suite }}
            </p>
            <p><span>Cidade:</span> {{ $store.state.user.address.city }}</p>
            <p>
              <span>Código postal:</span>
              {{ $store.state.user.address.zipcode }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item :key="3" value="company">
        <v-card variant="outlined" flat>
          <v-card-title>{{ $store.state.user.name }}</v-card-title>
          <v-card-text>
            <p><span>Empresa:</span> {{ $store.state.user.company.name }}</p>
            <p>
              <span>Slogan:</span> {{ $store.state.user.company.catchPhrase }}
            </p>
            <p><span>Serviços:</span> {{ $store.state.user.company.bs }}</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
    
  <script>
export default {
  name: "UserView",
  data() {
    return {
      tab: "tab-1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },

  /* created() {
    if (Object.keys(this.$store.state.user).length <= 0) {
      this.$router.push("/users");
      return;
    }
  }, */
};
</script>
  
<style lang="scss" scoped>
.v-sheet.v-card {
  width: 100%;
  min-height: 140px;
  display: flex;
  box-shadow: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0;
  margin-top: 10px;

  .v-card__title {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
  }

  .v-card__text {
    font-size: 18px;
  }

  .v-card__text p {
    display: flex;

    font-size: 16px;
    margin: 10px 0;
  }

  span {
    font-weight: 600;
    margin-right: 5px;
  }
}
</style>
    