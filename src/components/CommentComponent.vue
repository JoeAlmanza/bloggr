<template>
  <div class="comment-component row justify-content-center">
    <div class="col-12 d-flex mb-2 justify-content-center">
      <div class="card">
        <div class="card-body">
          <p class="m-0"><u>{{commentProp.creator.name}}</u>: {{commentProp.body}} <i class="fa fa-times-circle-o" aria-hidden="" @click="deleteComment" v-if="commentProp.creator.name == this.$auth.userInfo.name"></i></p>
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
      newComment: {}
    }
  },
  computed:{
    blog(){
        return this.$store.state.activeBlog
      },
  },
  methods:{ 
    deleteComment(){
      let payload = {
        blog: this.$route.params.blogId,
        body: this.commentProp.body,
        creatorEmail: this.commentProp.creatorEmail,
        id: this.commentProp.id
      }
      this.$store.dispatch("deleteComment", payload)
      console.log(this.$auth.userInfo);
      console.log(this.commentProp);
    }
  },
  components:{}
}
</script>


<style scoped>
.card-body{
  padding: 13px;
}

.fa{
  cursor:pointer;
}
</style>