<template>
  <div class="movies">
    <h1>Movies Page</h1>
    <div class="movie-grid">
      <div v-for="review in reviews" :key="review.id" class="movie-card">
        <div class="movie-details">
          <h1 class="movie-title">Review {{ review.id }}</h1>
          <p class="movie-title">Rating {{ review.Rating }}</p>
          <p class="movie-description">Description {{ review.Description }}</p>
          <router-link
            :to="{
              path: `/movies/${movieId}/reviews/${review.id}`,
              query: { reviewData: JSON.stringify(review) },
            }"
            class="details-button"
            >Review Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ReviewView",
  data() {
    return {
      reviews: [],
      movieId: null,
    };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    fetchMovie() {
      const movieId = this.$route.params.id;
      console.log("in revire page movie id", movieId);
      // Fetch movie details based on the movie ID from the JSON server
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => response.json())
        .then((data) => {
          this.reviews = data.Reviews;
          this.movieId = data.id;
          console.log("this revieewss", data);
        });
    },
  },
};
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
  
}

.movie-card {
  width: 240px;
  margin-bottom: 200px;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 100px;
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
  