<template>
  <div class="container">
    <div class="sidebar">
      <nav class="navbar-container">
        <div>
          <ul class="list">
            <li class="list-item"><router-link to="/">HOME</router-link></li>
            <li class="list-item">
              <router-link to="/movies">MOVIES</router-link>
            </li>
            <li class="list-item">
              <router-link to="/about">ABOUT</router-link>
            </li>
            <li class="list-item">
              <router-link to="/login">LOGIN</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="main-content">
      <router-view></router-view>
      <!-- Renders the component for the current route -->
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
}
nav {
  height: 15vh;
  display: flex;
  align-items: center;
  background-color: rgb(0, 0, 0);
  color: whitesmoke;
}
uniqWidth {
  width: 80%;
  margin-left: 170px;
}
nav ul {
  display: flex;
  margin-left: 700px;
}
nav ul li {
  list-style: none;
  margin-left: 50px;
}
nav ul li a {
  color: #ffffff; /* Set the desired font color */
  text-decoration: none; /* Remove underline */
}

.section1 {
  margin-top: 100px;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 200px;
  display: flex;
}

.sec1left {
  width: 50%;
}
.sec1right {
  width: 50%;
}
.sec1right img {
  height: 500px;
}
.main-content{
  background-color:rgb(0, 0, 0) ;
}
</style>