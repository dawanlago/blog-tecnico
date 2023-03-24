<template>
  <div id="menu">
    <div class="content">
      <h1>Blog.com</h1>
      <ul>
        <li>
          <a>Posts</a>
        </li>
        <li>Usuários</li>
      </ul>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap");
#menu {
  height: 60px;
  padding: 0 80px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: "Cinzel Decorative", cursive;
    color: var(--primary);
    font-size: 36px;
  }
  ul {
    list-style-type: none;

    li {
      float: right;
      color: var(--primary);
      font-size: 15px;
    }

    li:first-child {
      margin-left: 50px;
    }
  }
  .line {
    background-color: var(--primary);
    height: 1px;
    width: 100%;
  }
}
</style>