<template>
  <div class="blog-component col-4">
    <router-link class="card my-2" :to="{name:'blog-details', params:{blogId: blogProp.id}}">
      <div class="card text-light">
        <div class="card-body">
          <h5 class="card-title text-light">{{blogProp.title}}</h5>
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
  border-color: #00ADB5;
  background-color: rgba(0, 0, 0, 0.4);
}

.card:hover{
 transform: translateX(1px);
}

.card:active{
  transform: translateY(1px);
}
</style>