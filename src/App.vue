<template>
  <v-app>
    <Spinner />
    <v-main>
      <menu-vue />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuVue from "@/components/MenuVue.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "App",
  components: { MenuVue, Spinner },

  mounted() {
    setTimeout(() => {
      this.$root.$emit("Spinner::hide");
    }, 300);
  },
};
</script>
