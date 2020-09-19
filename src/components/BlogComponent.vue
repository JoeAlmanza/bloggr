<template>
  <div class="blog-component col-4">
    <router-link class="card my-2" :to="{name:'blog-details', params:{blogId: blogProp.id}}">
      <div class="card text-light">
        <div class="card-body">
          <h4 class="card-title text-info">{{blogProp.title}}</h4>
          <p class="text-primary">By: {{blogProp.creatorEmail}}</p>
        </div>
      </div>
    </router-link>
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