<template>
    <div class="details">
      <h2>{{ movie.Title }}</h2>
      <img :src="imgUrl">
      <p>{{ movie.Plot }}</p>
      <router-link :to="`/movies/${movie.id}/reviews`" class="details-button">View Rating</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieDetails',
    data() {
      return {
        movie: {},
        imgUrl:null

      }
    },
    mounted() {
      this.fetchMovie()
    },
    methods: {
      fetchMovie() {
        const movieId = this.$route.params.id
        // Fetch movie details based on the movie ID from the JSON server
        fetch(`http://localhost:3000/movies/${movieId}`)
          .then(response => response.json())
          .then(data => {
            this.movie = data
            this.imgUrl = this.movie.Images[0]
            console.log(this.movie.Images)
          })
      }
    }
  }
  </script>
<style scoped>
.details{
  color: white;
  padding-bottom: 130px;
}
.details img{
  height: 500px;
}
.details-button {
    display: inline-block;
    margin-top: 20px;
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
  