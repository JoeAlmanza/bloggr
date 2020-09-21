<template>
  <div class="home container-fluid p-4">
    <div class="row">
    <div class="col-5" v-if="this.$auth.isAuthenticated">
      <h5 class="text-info my-2">Create a Post...</h5>
      <form class="form row m-0" @submit.prevent="createBlog">
      <div class="col-6 form-group p-0">
        <input
            type="text"
            v-model="newBlog.title"
            class="form-control"
            placeholder="Title..."
            aria-describedby="helpId"
          />
      </div>
      <div class="col-12 form-group p-0">
        <input
            type="url"
            class="form-control"
            v-model="newBlog.imgUrl"
            placeholder="Image URL..."
            aria-describedby="helpId"
          />
      </div>
      <div class="col-12 form-group p-0">
        <input
            type="text"
            class="form-control"
            v-model="newBlog.body"
            placeholder="Body..."
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
    <h5 class="mt-4 text-info mb-0">Posted blogs:</h5>
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
      this.newBlog = {}
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
