<template>
  <nav class="navigation-bar">
    <!-- <img src="../assets/jobs.png" alt="jobs" class="logo" /> -->
    <div class="logo">
      <h1>Jobs.</h1>
    </div>
    <a href="#">For Job Seekers</a>
    <a href="#">For Employees</a>
    <a href="#">Startup</a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.navigation-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.logo {
  display: inline-block;
}
.navigation-bar a {
  margin-top: 10px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  padding: 15px;
}
</style>