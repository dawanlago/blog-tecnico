<template>
  <v-app>
    <v-main>
      <menu-vue />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuVue from "@/components/MenuVue.vue";
export default {
  name: "App",
  components: { MenuVue },
  data: () => ({
    //
  }),
};
</script>
