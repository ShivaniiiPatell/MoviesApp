<template>
  <div class="reviewDetails">
    <h1>Review Details</h1>
    <h2> Description  {{ reviewData }}</h2>
   
  </div>
</template>

<script>
export default {
  name: "ReviewDeatilView",
  data() {
    return {
      review: [],
      movieId: null,
      ReviewId:null,
      reviewData: null,
    };
  },
  mounted() {
    this.reviewData = JSON.parse(this.$route.query.reviewData);
    // this.fetchMovie();
  },
  methods: {
    // fetchMovie() {
    //   // const movieId = this.$route.params.id;
    //   const ReviewId = this.$route.params.reviewId;
    //   this.reviewData = JSON.parse(this.$route.query.reviewData);
    //   console.log("in revire details page movie id", ReviewId);
    //   // Fetch movie details based on the movie ID from the JSON server
    //   fetch(`http://localhost:3000/Reviews/${ReviewId}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.review = data.Reviews;
    //       console.log("this revieewss", data);
    //     });
    // },
  },
};
</script>
<style scoped>
.reviewDetails{
  color: white;
  padding-bottom: 680px;
}
</style>  