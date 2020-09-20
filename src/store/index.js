import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    activeComments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    },
    setComments(state, comments) {
      state.activeComments = comments
    },
    deleteBlog(state, blog) {
      state.blogs = blog
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({commit}){
      try {
        let res = await api.get("blogs");
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createBlog({commit}, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        console.log(res);
        commit("setBlogs", [...this.state.blogs, res.data])
        router.push({path: "/blog/" + res.data.id})
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBlog({commit}, blogId) {
      try {
        let res = await api.get("blogs/" + blogId)
        commit("setActiveBlog", res.data)
        commit("setComments", res.data.comments)
      } catch (error) {
        console.error(error);
      }
    },
    async editBlog({commit}, blogData){
      try {
        let res = await api.put("blogs/" + blogData.id, blogData)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getComments({commit}, blogId){
      try {
        let res = await api.get("blogs/" + blogId + "/comments")
        commit("setComments", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addComment({commit, dispatch}, commentData) {
      try {
        let res = await api.post("comments" , commentData)
        console.log(res);
        dispatch("getComments", res.data.blog)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBlog({commit}, blogId){
      try {
        await api.delete("blogs/" + blogId)
        this.dispatch("deleteBlog", blogId)
        router.push({name: 'Home'})
      } catch (error) {
        console.error(error);
      }
    }
  },
});
