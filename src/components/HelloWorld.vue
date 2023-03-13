<template>
  <h1>Hello</h1>
</template>

<script>
import apiBoard from '@/api/board.js'

export default {
  mounted() {
    apiBoard.getArticle(1)
    .then(function (response) { 
      console.log("getArticle", response);
    })
    .catch(function(e) {
      console.log(e);
      //error가 났을 때
    })

    apiBoard.getArticles(0)
    .then(function (response) { 
      console.log("getArticles", response);
    })
    .catch(function(e) {
      console.log(e);
      //error가 났을 때
    })

    apiBoard.postArticle("id", "title", "body")
    .then(function (response) { 
      console.log("postArticle", response);
    })
    .catch(function(e) {
      console.log(e);
      //error가 났을 때
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
