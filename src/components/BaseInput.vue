<template>
  <div class="box">
    <input
      type="text"
      placeholder="Add New Item"
      id="inputContent"
      autofocus
      v-model="item"
      @keyup.enter="addItem"
    />
    <button class="add-btn" id="add-btn" @click="addItem">
      Add
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch('addItem', this.item);
      this.item = '';
    },
  },
};
</script>

<style scoped>
.box {
  text-align: center;
}

#inputContent {
  border-radius: 5px;
  border: none;
  width: 60%;
  height: 1.8rem;
  font-size: 1.1rem;

  padding-left: 1rem;
  margin-left: 1rem;
  background-color: var(--light-color);
}

#inputContent:focus {
  outline: none;
}

.add-btn {
  background: var(--first-color);
  height: 1.8rem;
  width: 20%;
  border: none;
  border-radius: 5px;
  color: var(--second-color);
  font-size: 1.1rem;

  position: relative;
  transition: 1s;
  cursor: pointer;
  margin: 0 1rem;

  outline: none;
}

.add-btn:hover {
  background: transparent;
  border: solid 0.5px var(--second-color);
}
</style>
