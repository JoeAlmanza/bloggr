<template>
  <div class="blog-details container-fluid">
    <div class="row text-center">
      <div class="col-12">
        <h3 class="text-info my-4">{{blog.title}}</h3>
        <p>
          <button class="btn btn-outline-warning"
            aria-hidden="true"
            @click="editToggle = !editToggle"
            v-if="isCreator"
          >Edit Blog</button>
          <button class="btn btn-outline-danger" 
            @click="deleteBlog"
            v-if="isCreator"
            >Delete Blog</button>
        </p>
        <img :src="blog.imgUrl" alt="">
        <p class="text-secondary">Created By: {{blog.creatorEmail}}</p>
        <p class="text-primary">{{blog.body}}</p>
        <form class="form d-flex flex-column align-items-center" @submit.prevent="editBlog" v-if="editToggle">
          <div class="col-6 d-flex justify-content-center">
          <input
            type="text"
            class="form-control my-1"
            placeholder="New Img"
            aria-describedby="helpId"
            v-model="blogData.imgUrl"
          />
          </div>
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
          <button type="submit" class="btn btn-warning">Post</button>
        </form>
        <hr>
         <form action="" @submit.prevent="addComment">
      <input type="text" class="form-control m-auto commentInput" v-model="newComment.body" placeholder="Add a comment..."/>
      <button class="btn btn-outline-primary my-2" type="submit">Post Comment</button>
    </form>
        <button class="btn btn-outline-warning my-3"
          aria-hidden="true"
          @click="commentToggle = !commentToggle"
        >Comments  </button>
      <div  v-if="commentToggle">
        <comment-component v-for="comment in activeComments" :key="comment.id" :commentProp = comment />
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
      isCreator(){
        return this.$store.state.profile.email == this.blog.creatorEmail
      }
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
  max-width: 30rem;
}
</style>