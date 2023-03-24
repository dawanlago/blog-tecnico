<template>
  <div class="home">
    <MenuVue />
    <TitleVue title="Posts" />
    <CardVue />
  </div>
</template>

<script>
import MenuVue from "@/components/MenuVue.vue";
import TitleVue from "@/components/TitleVue.vue";
import CardVue from "@/components/CardVue.vue";

export default {
  name: "HomeView",
  components: {
    MenuVue,
    TitleVue,
    CardVue,
  },
};
</script>
