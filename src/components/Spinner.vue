<template>
  <div class="spinner" v-if="visible">
    <v-img
      max-height="100"
      max-width="100"
      :src="require('@/assets/images/spinner.gif')"
    ></v-img>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  data: () => ({
    visible: true,
  }),
  created() {
    this.$root.$on("Spinner::show", this.changeSpinner);
    this.$root.$on("Spinner::hide", this.changeSpinner);
  },
  methods: {
    changeSpinner() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light);
  color: var(--red);
}
</style>
