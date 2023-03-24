<template>
  <div class="home">
    <MenuVue />
    <TitleVue title="Posts" />
  </div>
</template>

<script>
import MenuVue from "@/components/MenuVue.vue";
import TitleVue from "@/components/TitleVue.vue";

export default {
  name: "HomeView",
  components: {
    MenuVue,
    TitleVue,
  },
};
</script>
