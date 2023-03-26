<template>
  <div id="app">
    <MenuVue />
    <router-view />
  </div>
</template>

<script>
import MenuVue from "@/components/MenuVue.vue";

export default {
  name: "app",
  components: { MenuVue },
};
</script>

