<template>
  <div class="mainContainer">
    <div class="searchContainer">Find Your Dream Job Here</div>
    <form>
      <input type="text" class="searchBox" placeholder="Job title or Keyword ..." />
      <button class="btn-search">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.searchContainer {
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  font-size: 36px;
  font-weight: 600;
}
form {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding: 2px;
  margin-top: 20px;
}
.searchBox {
  background-color: #f8f8f8;
  box-shadow: -9px 10px 19px 0px rgba(0, 0, 0, 0.14);
  height: 60px;
  font-size: 20px;
  text-indent: 10px;
  width: 50%;
  border-radius: 6px 0 0 6px;
  padding: 5px;
  border: none;
  background: url("../assets/search.png") no-repeat;
  text-indent: 50px;
  background-position: 20px;
}
.btn-search {
  background-color: #16ba00;
  color: #f8f8f8;
  border: none;
  width: 100px;
  border-radius: 0 6px 6px 0;
  box-shadow: 0 0 19px 0px rgba(0, 0, 0, 0.14);
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
}
.searchBox:focus {
  outline: none;
}
</style>