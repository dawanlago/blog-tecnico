<template>
  <div class="post">
    <button @click="back">Voltar</button>
    <div>
      <div class="card">
        <h3>
          {{ $store.state.post.title }}
        </h3>
        <p>
          {{ $store.state.post.body }}
        </p>

        <a href="">{{ $store.state.post.username }}</a>
      </div>
    </div>
    <h3 class="title-comments">Comentários</h3>
    <CommentsVue />
  </div>
</template>
  
<script>
import CommentsVue from "@/components/CommentsVue.vue";

import { GetComments } from "@/services/GetComments";
export default {
  name: "PostView",
  components: { CommentsVue },
  methods: {
    async loadComments() {
      const getComments = new GetComments();
      const comments = await getComments.execute(this.$store.state.post.id);

      this.$store.commit("setComments", comments);
    },
    back() {
      this.$router.back();
    },
  },
  created() {
    if (Object.keys(this.$store.state.post).length <= 0) {
      this.$router.push("/");
      return;
    }

    this.loadComments();
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-top: 10px;
  border-bottom: 1px solid var(--primary);

  h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    font-size: 16px;
    margin-top: 10px;
  }
}

button {
  background-color: var(--default);
  border: none;
  height: 40px;
  width: 150px;
  font-weight: 400;
  font-size: 20px;
}

.title-comments {
  margin-left: 30px;
  font-size: 20px;
}
</style>
  