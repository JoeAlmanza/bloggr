<template>
  <div class="blog-component col-4">
    <router-link class="card my-2" :to="{name:'blog-details', params:{blogId: blogProp.id}}">
      <div class="card text-light">
        <div class="card-body">
          <h5 class="card-title text-dark">{{blogProp.title}}</h5>
          <p class="text-light">By: {{blogProp.creatorEmail}}</p>
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
.card{
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(0, 173, 181, .3);
}

.card:hover{
 transform: translateX(1px);
}

.card:active{
  transform: translateY(1px);
}
</style>