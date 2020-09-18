<template>
  <div class="comment-component row justify-content-center">
    <div v-for="comment in activeComments" :key="comment.id" :commentProp = comment>

    </div>
    <form action="" @submit.prevent="addComment">
      <input type="text" class="form-control my-2" v-model="newComment.body" placeholder="Add a comment..."/>
      <button class="btn btn-outline-primary" type="submit">Post Comment</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "comment-component",
  data(){
    return {
      newComment: {}
    }
  },
  computed:{
    activeComments(){
      return this.$store.state.activeComments
    }
  },
  methods:{
    addComment(){
      let payload = {
        blog: this.$route.params.blogId,
        body: this.newComment.body
      }
      this.$store.dispatch("addComment", payload)
    },
  },
  components:{}
}
</script>


<style scoped>

</style>