<template>
  <ul>
    <base-list-item
      v-for="item in getList"
      :key="item.id"
      :name="item.name"
      :check="item.check"
      :id="item.id"
      :class="{ checked: item.check }"
    ></base-list-item>
  </ul>
</template>

<script>
export default {
  computed: {
    getList() {
      return this.$store.state.list;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;

  overflow: scroll;
  overflow-y: auto;
  height: 68vh;
  scroll-behavior: smooth;
}
</style>
