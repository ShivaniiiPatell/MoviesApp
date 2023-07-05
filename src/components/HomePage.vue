<template>
  <div class="container">
    <div class="background-image"></div>
    <div class="content">
      <h1>Welcome to My Website</h1>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "HomePage",
};
</script>
  <style>
.background-image {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 90%;
  background-image: url("../assets/movie1.jpg");
  background-size: cover;
  z-index: -1;
}

.content {
  text-align: center;
  color: #fff;
  z-index: 1;
  position: absolute;
  margin-top: 100px;
  margin-left: 760px;
}

h1 {
  font-size: 32px;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  margin-top: 20px;
}
</style>
  