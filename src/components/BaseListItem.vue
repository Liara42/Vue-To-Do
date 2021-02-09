<template>
  <li @click="checkItem(id)">
    <span class="checkItem" v-show="!check"></span>
    <span v-show="check">&#10004;</span>
    <span class="itemContent">{{ name }}</span>
    <indigo-button
      icon="pi pi-times"
      class="p-button-rounded p-button-danger p-button-outlined"
      id="delete"
      @click.stop="deleteItem(id)"
    />
  </li>
</template>

<script>
export default {
  props: ['check', 'name', 'id'],

  methods: {
    deleteItem(id) {
      this.$store.dispatch('deleteItem', id);
    },
    checkItem(id) {
      this.$store.dispatch('checkItem', id);
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
  list-style-type: none;
  font-size: 1.1rem;
  padding: 1rem;
  text-align: left;

  background: var(--first-color);
  color: var(--second-color);
  border-bottom: dotted 1px var(--dark-color);
  border-radius: 10px;

  transition: 0.2s;
  display: flex;

  justify-content: space-between;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

li:hover {
  opacity: 0.8;
}

.checkItem {
  content: '';
  color: var(--dark-color);
}

.itemContent {
  max-width: 15vw;
}

#delete {
  display: inline-flex;
  width: 1rem;
  height: 1.6rem;
  background-color: var(--dark-color);
  color: var(--light-color);
}

#delete:hover {
  opacity: 0.9;
  z-index: -1;
}

li.checked {
  border-bottom: solid 0.5px var(--dark-color);
}
</style>
