<template>
  <div class="comment-component row justify-content-center">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <p>{{commentProp.body}}</p>
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

</style>