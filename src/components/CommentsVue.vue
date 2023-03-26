<template>
  <div>
    <div
      class="card"
      v-for="(comments, index) in $store.state.comments"
      :key="index"
    >
      <h3>
        {{ comments.name }}
      </h3>
      <p>
        {{ comments.body }}
      </p>
      <div class="footer">
        <a href="">{{ comments.email }}</a>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CardVue",
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
    justify-content: flex-start;
    align-items: center;

    a {
      color: var(--primary);
      text-decoration: none;
      font-size: 16px;
    }
  }
}
</style>