<template>
  <div class="blog-details container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h5 class="mb-0"><i
            class="fa fa-pencil"
            aria-hidden="true"
            @click="editToggle = !editToggle"
            v-if="this.blog.creatorEmail == this.$auth.userInfo.name"
          ></i>
          <i class="fa fa-times-circle-o" aria-hidden="true" @click="deleteBlog" v-if="this.blog.creatorEmail == this.$auth.userInfo.name"></i></h5>
        <h3 class="text-info m-0">{{blog.title}} </h3> 
        <img class="my-3" :src="blog.imgUrl" alt="">
        <p class="author">By: {{blog.creatorEmail}}</p>
        <p class="text-light">{{blog.body}}</p>
        <form class="form d-flex flex-column align-items-center" @submit.prevent="editBlog" v-if="editToggle">
          <input
            type="text"
            class="form-control my-1"
            placeholder="New Img"
            aria-describedby="helpId"
            v-model="blogData.imgUrl"
          />
          <input
            type="text"
            class="form-control my-1"
            placeholder="New Title"
            aria-describedby="helpId"
            v-model="blogData.title"
          />
          <input
            type="text"
            class="form-control my-1"
            placeholder="New Body"
            aria-describedby="helpId"
            v-model="blogData.body"
          />
          <button type="submit" class="btn btn-primary">Post</button>
        </form>

        <hr>

        <div class="row">
          <div class="col-12 d-flex flex-column align-items-center">
            <form class="card flex-column align-items-center p-3 mt-3" action="" @submit.prevent="addComment" v-if="this.$auth.isAuthenticated">
              <div class="form-group">
                <input type="text" class="form-group m-auto commentInput" v-model="newComment.body" placeholder="Add a comment..."/>
              </div>
              <button class="btn btn-primary" type="submit">Post Comment</button>
            </form>

            <div class="card p-3 mt-2 align-items-center">
            <button class="btn btn-info"
              aria-hidden="true"
              @click="commentToggle = !commentToggle"
              >Comments - {{activeComments.length}}</button>
            <div class="mt-3" v-if="commentToggle">
              <comment-component v-for="comment in activeComments" :key="comment.id" :commentProp = comment />
            </div>
            </div>
          </div>
        </div>

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
      blogData: {}, editToggle: false, commentToggle: false,
      newComment: {}
    }
  },
    computed:{
      blog(){
        return this.$store.state.activeBlog
      },
      activeComments(){
        return this.$store.state.activeComments
      },
    },
  mounted(){
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId),
    this.$store.dispatch("getComments", this.$route.params.blogId)
  },
  methods:{
    editBlog(){
      console.log(this.blogData);
      this.blogData.id = this.$route.params.blogId;
      this.$store.dispatch("editBlog", this.blogData);
      this.editToggle = false;
      this.blogData = {}
    },
    addComment(){
      let payload = {
        blog: this.$route.params.blogId,
        body: this.newComment.body
      }
      this.$store.dispatch("addComment", payload)
      this.newComment = {}
    },
    deleteBlog(){
      this.blogData.id = this.$route.params.blogId;
      this.$store.dispatch("deleteBlog", this.blogData.id)
    },
    
  },
  components:{
    CommentComponent
  }
}
</script>


<style scoped>
input{
  width: 38vh;
}
img{
  max-width: 37vh;
}
.card{
  background-color: rgba(107, 196, 221, 0.573);
}
.btn{
  max-width: 9rem;
}
.author{
  color: rgb(107, 196, 221);
}
</style>