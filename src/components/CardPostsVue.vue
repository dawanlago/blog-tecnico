<template>
  <v-card variant="outlined" light>
    <v-card-title> {{ post.title }} </v-card-title>
    <v-card-subtitle @click="handleUser(post.userId)">
      <p><v-icon size="16">mdi-account</v-icon>{{ post.username }}</p>
    </v-card-subtitle>
    <v-card-text> {{ post.body }} </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        :block="$vuetify.breakpoint.xsOnly"
        @click="handlePost(post)"
        >Ver comentários</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { GetUser } from "@/services/GetUser";
export default {
  name: "CardPostsVue",
  props: ["post"],
  methods: {
    handlePost(post) {
      this.$store.commit("setPost", post);
      this.$router.push("/post");
    },
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
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      color: var(--primary) !important;
      cursor: pointer;
    }
    .v-icon {
      margin-right: 5px;
      color: var(--primary) !important;
    }
  }
}
</style>