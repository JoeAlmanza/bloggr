<template>
  <div class="comment-component row justify-content-center">
    <div class="col-12 d-flex mb-2 justify-content-baseline">
      <div class="card">
        <div class="card-body">
          <p class="m-0"><u class="text-info">{{commentProp.creatorEmail}}</u>: {{commentProp.body}}  -  <i class="fa fa-times-circle-o" aria-hidden="" @click="deleteComment" v-if="commentProp.creatorEmail == this.$auth.userInfo.name"></i>  <i
            class="fa fa-pencil"
            aria-hidden="true"
            @click="editToggle = !editToggle"
            v-if="commentProp.creatorEmail == this.$auth.userInfo.name"
          ></i></p>
          <form class="form d-flex flex-column align-items-center" @submit.prevent="editComment" v-if="editToggle">
          <div class="col-6 d-flex justify-content-center">
          <input
            type="text"
            class="form-control my-1"
            placeholder="Edit Comment..."
            aria-describedby="helpId"
            v-model="commentData.body"
          />
          </div>
          <button type="submit" class="btn btn-warning">Post</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "comment-component",
  props: ["commentProp"],
  data(){
    return {
      commentData: {}, editToggle: false,
    }
  },
  computed:{
    blog(){
        return this.$store.state.activeBlog
      },
  },
  mounted(){
    this.$store.dispatch("getComments", this.$route.params.blogId)
  },
  methods:{ 
    deleteComment(){
      this.$store.dispatch("deleteComment", this.commentProp)
    },
    editComment(){
      this.commentData.id = this.commentProp.id;
      this.$store.dispatch("editComment", this.commentData)
      this.commentData = {}
      this.editToggle = false
    }
  },
  components:{}
}
</script>


<style scoped>
.card-body{
  padding: 13px;
}
</style>