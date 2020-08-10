<template>
  <div id="app">
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <div class="cardContainer">
      <Card card="Full" />
      <Card card="Part" />
      <Card card="Remo" />
      <Card card="Mixed" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SearchBar,
    Card,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Quicksand, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-around;
}
</style>
