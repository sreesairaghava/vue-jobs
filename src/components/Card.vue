<template>
  <div class="cardContainer">
    <p>Hello {{card}}</p>
    <button class="btn-card">View all {{card}}</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: String,
  },
};
</script>

<style scoped>
.cardContainer {
  height: 280px;
  display: flex;
  position: relative;
  width: 240px;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-weight: 500;
  font-size: 24px;
  border: none;
}
.btn-card {
  color: red;
  height: 50px;
  position: absolute;
  bottom: 0;
  width: 240px;
  border: none;
  border-radius: 0 0 10px 10px;
  background-color: #2faf01;
  color: #f8f8f8;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  transition: 0.3s;
}
.btn-card:hover {
  background-color: #2a9105;
}
</style>