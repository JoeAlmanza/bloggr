<template>
  <div class="blog-details container-fluid">
    <div class="row text-center">
      <div class="col-12">
        <h3 class="text-info my-4">{{blog.title}}</h3>
        <img :src="blog.imgUrl" alt="">
        <p class="text-secondary">Created By: {{blog.creatorEmail}}</p>
        <p class="text-primary">{{blog.body}}</p>
        <comment-component/>
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
      blogData: {}, editToggle: false
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
    isCreator(){
      return this.$store.state.profile.email == this.post.creatorEmail
    }
  },
  methods:{
    editBlog(){
      this.blogData.id = this.$route.params.blogId;
      this.$store.dispatch("editPost", this.blogData);
      this.editToggle = false;
    }
  },
  components:{
    CommentComponent
  }
}
</script>


<style scoped>

</style>