<template>
  <div>
    <div class="card" v-for="(post, index) in $store.state.posts" :key="index">
      <h3>
        {{ post.title }}
      </h3>
      <p>
        {{ post.body }}
      </p>
      <div class="footer">
        <a href="">{{ post.username }}</a>
        <button @click="handlePost(post)">Ver mais</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  methods: {
    handlePost(post) {
      this.$store.commit("setPost", post);
      this.$router.push("/post");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  min-height: 140px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0;
  margin-top: 10px;

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

  .footer {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--primary);
      text-decoration: none;
      font-size: 16px;
    }

    button {
      height: 100%;
      width: 146px;
      margin-right: -20px;
      background-color: var(--primary);
      border: none;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>