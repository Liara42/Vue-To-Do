<template>
  <div class="container">
    <div class="boxed">
      <base-title></base-title>
      <base-input></base-input>
    </div>
    <base-list v-if="isLoaded"></base-list>
  </div>
</template>

<script>
export default {
  computed: {
    isLoaded() {
      return this.$store.state.loaded;
    },
  },
  created() {
    this.$store.dispatch('getItems');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --first-color: #34312d;
  --second-color: #d9c5b2;
  --dark-color: #14110f;
  --gray-color: #7e7f83;
  --light-color: #f3f3f4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
}

body::before {
  content: '';
  background: url('New_York_Black_White_1920x1080.jpg') no-repeat center
    center/cover;
  opacity: 0.85;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.boxed {
  height: 30vh;
  background-color: var(--dark-color);
  border-radius: 10px;
}

.container {
  max-width: 23vw;
  margin: 2vh auto 0 auto;
}

@media (min-width: 1px) and (max-width: 600px) {
  .container {
    min-width: 80vw;
  }
}
@media (min-width: 601px) and (max-width: 1100px) {
  .container {
    min-width: 60vw;
  }
}
</style>
