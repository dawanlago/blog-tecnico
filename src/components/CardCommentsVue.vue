<template>
  <v-card variant="outlined" light>
    <v-card-title> {{ comment.name }} </v-card-title>
    <v-card-subtitle
      ><v-icon size="16">mdi-account</v-icon
      >{{ comment.email | lowerCased }}</v-card-subtitle
    >
    <v-card-text> {{ comment.body }} </v-card-text>
  </v-card>
</template>
  
  <script>
export default {
  name: "CardCommentsVue",
  props: ["comment"],
  filters: {
    lowerCased(value) {
      return value.toLowerCase();
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.v-sheet.v-card {
  width: 100%;
  min-height: 140px;
  display: flex;
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
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-card__subtitle {
    display: flex;
    align-items: center;
    color: var(--primary) !important;
    text-decoration: none;
    font-size: 16px;

    .v-icon {
      margin-right: 5px;
      color: var(--primary) !important;
    }
  }
}
</style>