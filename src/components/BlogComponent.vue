<template>
  <div class="blog-component col-4">
    <router-link :to="{name:'blog-details', params:{blogId: blogProp._id}}" />
      <div class="card text-light">
        <img class="card-img-top" :src="blogProp.imgUrl" alt />
        <div class="card-body">
          <h4 class="card-title">{{blogProp.title}}</h4>
          <p>{{blogProp.creatorEmail}}</p>
          <p>{{blogProp.body}}</p>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'blog-component',
  props: ["blogProp"],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>