<template>
  <div id="menu">
    <h1>Blog.com</h1>
    <ul>
      <li>
        <router-link v-if="$route.name != 'users'" to="/users"
          >Usuários</router-link
        >
      </li>
      <li>
        <router-link v-if="$route.name != 'home'" to="/">Posts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuVue",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap");
#menu {
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-family: "Cinzel Decorative", cursive;
    color: var(--primary) !important;
    font-size: 36px;
  }
  ul {
    list-style-type: none;

    li {
      float: right;
      font-size: 15px;

      a {
        color: var(--primary) !important;
        text-decoration: none;
      }

      a:hover {
        font-weight: bold;
      }
    }

    li:first-child {
      margin-left: 50px;
    }
  }
}
</style>