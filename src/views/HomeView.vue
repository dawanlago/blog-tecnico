<template>
  <div class="home">
    <TitleVue title="Posts" />
    <CardPostsVue />
  </div>
</template>

<script>
import TitleVue from "@/components/TitleVue.vue";
import CardPostsVue from "@/components/CardPostsVue.vue";

import { GetAllPosts } from "@/services/GetAllPosts";
import { GetUser } from "@/services/GetUser";

export default {
  name: "HomeView",
  components: {
    TitleVue,
    CardPostsVue,
  },
  methods: {
    async loadPosts() {
      const getAllPosts = new GetAllPosts();
      const getUser = new GetUser();
      const posts = await getAllPosts.execute();

      const postsSend = [];
      posts.forEach(async (post) => {
        const user = await getUser.execute(post.userId);
        post.username = user.username;
        postsSend.push(post);
      });

      this.$store.commit("setPosts", postsSend);
    },
  },
  async created() {
    this.loadPosts();
  },
};
</script>
