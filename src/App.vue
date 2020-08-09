<template>
  <div id="app">
    <NavBar></NavBar>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SearchBar,
  },
};
</script>

<style>
#app {
  font-family: Quicksand, sans-serif;
}
</style>
