<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="text-primary my-2">Create a Post...</h3>
        <form class="form-inline" @submit.prevent="createBlog">
        <div class="form-group">
          <input
              type="text"
              v-model="newBlog.title"
              class="form-control"
              placeholder="Blog Title"
              aria-describedby="helpId"
            />
            <input
              type="text"
              class="form-control"
              v-model="newBlog.body"
              placeholder="Blog Body"
              aria-describedby="helpId"
            />
        </div>
            <button type="submit" class="btn btn-success">
            Post Blog
          </button>
        </form>
      </div>
    </div>
    <br>
    <div class="row">
      <blogComponent v-for="blog in blogs" :key="blog.id" :blogProp="blog" />
    </div>
  </div>
</template>

<script>
import blogComponent from "../components/BlogComponent.vue"
export default {
  name: "home",
  data() {
    return {
      newBlog: {}
    }
  },
  mounted() {
    this.$store.dispatch("getAllBlogs")
  },
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog)
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs
    }
  },
  components: {
    blogComponent
  },
};
</script>
