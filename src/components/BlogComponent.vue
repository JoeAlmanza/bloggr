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
.card{
  border-style: solid;
  border-color: #20c997;
}

.card:hover{
 transform: translateX(1px);
}

.card:active{
  transform: translateY(1px);
}
</style>