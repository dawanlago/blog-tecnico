<template>
  <div class="post">
    <v-btn @click="back">Voltar</v-btn>
    <v-card variant="outlined" light>
      <v-card-title> {{ $store.state.post.title }} </v-card-title>
      <v-card-subtitle @click="handleUser($store.state.post.userId)">
        <p>
          <v-icon size="16">mdi-account</v-icon>{{ $store.state.post.username }}
        </p>
      </v-card-subtitle>
      <v-card-text> {{ $store.state.post.body }} </v-card-text>
    </v-card>

    <h3 class="title-comments">
      {{ numberComments }} comentário<span v-if="numberComments > 1">s</span>
    </h3>
    <div id="card-comments-vue">
      <v-row no-gutters>
        <v-col
          cols="12"
          v-for="(comment, index) in $store.state.comments"
          :key="index"
        >
          <CardCommentsVue :comment="comment" /></v-col
      ></v-row>
    </div>
  </div>
</template>
  
<script>
import CardCommentsVue from "@/components/CardCommentsVue.vue";

import { GetComments } from "@/services/GetComments";
import { GetUser } from "@/services/GetUser";
export default {
  name: "PostView",
  data: () => {
    return {
      numberComments: 0,
    };
  },
  components: { CardCommentsVue },
  methods: {
    async loadComments() {
      const getComments = new GetComments();
      const comments = await getComments.execute(this.$store.state.post.id);

      this.numberComments = comments.length;
      this.$store.commit("setComments", comments);
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
    back() {
      this.$router.back();
    },
  },
  async created() {
    this.$root.$emit("Spinner::show");
    if (Object.keys(this.$store.state.post).length <= 0) {
      this.$router.push("/");
    }
    await this.loadComments();
    setTimeout(() => {
      this.$root.$emit("Spinner::hide");
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
  width: 100%;
  min-height: 140px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  margin: 10px 0;
  border-radius: 0;
  border-bottom: 1px solid var(--primary);
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
.title-comments {
  margin-left: 30px;
  font-size: 20px;
}
</style>
  