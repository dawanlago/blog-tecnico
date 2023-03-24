<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "TitleVue",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  font-weight: 400;
}
</style>