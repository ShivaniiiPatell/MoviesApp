<template>
  <div class="login-container">
    <div class="login">
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <button  class="details-button" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here
      if (this.username&& this.password) {
        // Simulating successful login
        localStorage.setItem("isLoggedIn", true);
        this.$router.push("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    },
  },
};
</script>
<style>
.login-container {
  display: flex;
  justify-content: center;
  height:300px;
}

.login {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 4px;
}

.login div{
  margin-top: 30px;
}

.details-button {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
  }
  
  .details-button:hover {
    background-color: #0056b3;
  }
</style>
