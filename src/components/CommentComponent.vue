<template>
  <div class="comment-component row justify-content-center">
    <div class="col-12 d-flex mb-2 justify-content-center">
      <div class="card">
        <div class="card-body">
          <p class="m-0"><u>{{commentProp.creator.name}}</u> says... {{commentProp.body}}</p>
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
    activeComments(){
      return this.$store.state.activeComments
    }
  },
  methods:{
  },
  components:{}
}
</script>


<style scoped>
.card-body{
  padding: 13px;
}
</style>