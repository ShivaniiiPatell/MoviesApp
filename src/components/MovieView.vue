<template>
    <div class="movies">
      <h1>Movies Page</h1>
      <div class="movie-grid">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
          <div class="movie-image">
            <img :src="movie.Images[0]" alt="Movie Poster">
          </div>
          <div class="movie-details">
            <h2 class="movie-title">{{ movie.Title }}</h2>
            <p class="movie-description">{{ movie.description }}</p>
            <router-link :to="`/movies/${movie.id}`" class="details-button">Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieView',
    data() {
      return {
        movies: []
      }
    },
    mounted() {
      this.fetchMovies()
    },
    methods: {
      fetchMovies() {
        // Fetch movie data from the JSON server
        fetch('http://localhost:3000/movies')
          .then(response => response.json())
          .then(data => {
            this.movies = data
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .movies {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .movie-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .movie-card {
    width: 240px;
    margin-bottom: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .movie-image {
    position: relative;
  }
  
  .movie-image img {
    width: 100%;
    display: block;
    height: 200px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .movie-details {
    padding: 15px;
  }
  
  .movie-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .movie-description {
    font-size: 14px;
    color: #555;
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
  