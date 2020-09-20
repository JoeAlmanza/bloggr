<template>
  <div class="about text-center">
    <h1>{{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class="container-fluid">
      <div class="row">
        <blogComponent v-for="blog in userBlogs" :key="blog.id" :blogProp="blog" />
      </div>
    </div>




  </div>
</template>

<script>
import blogComponent from "../components/BlogComponent.vue"
export default {
  name: "Profile",
  mounted(){
        this.$store.dispatch("getAllBlogs"),
        this.$store.dispatch("getProfile")
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userBlogs() {
      return this.$store.state.blogs.filter(b => b.creatorEmail == this.profile.email)
    }
  },
  components: {
  blogComponent
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
