<template>
  <div class="blog-details container-fluid">
    <div class="row text-center">
      <div class="col-12">
        <h3 class="text-info my-4">{{blog.title}}</h3>
        <img :src="blog.imgUrl" alt="">
        <p class="text-secondary">Created By: {{blog.creatorEmail}}</p>
        <p class="text-primary">{{blog.body}}</p>
        <hr>
         <form action="" @submit.prevent="addComment">
      <input type="text" class="form-control m-auto commentInput" v-model="newComment.body" placeholder="Add a comment..."/>
      <button class="btn btn-outline-primary my-2" type="submit">Post Comment</button>
    </form>
        <comment-component v-for="comment in activeComments" :key="comment.id" :commentProp = comment />
      </div>
    </div>
  </div>
</template>


<script>
import CommentComponent from "../components/CommentComponent.vue"
export default {
  name: 'blog-details',
  data(){
    return {
      blogData: {}, editToggle: false,
      newComment: {}
    }
  },
  mounted(){
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId),
    this.$store.dispatch("getComments", this.$route.params.blogId)
  },
  computed:{
    blog(){
      return this.$store.state.activeBlog;
    },
    activeComments(){
      return this.$store.state.activeComments
    },
    isCreator(){
      return this.$store.state.profile.email == this.post.creatorEmail
    }
  },
  methods:{
    editBlog(){
      this.blogData.id = this.$route.params.blogId;
      this.$store.dispatch("editPost", this.blogData);
      this.editToggle = false;
    },
    addComment(){
      let payload = {
        blog: this.$route.params.blogId,
        body: this.newComment.body
      }
      this.$store.dispatch("addComment", payload)
    },
  },
  components:{
    CommentComponent
  }
}
</script>


<style scoped>
.commentInput{
  max-width: 30rem;
}
</style>