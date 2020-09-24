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
    setComments(state, comment) {
      state.activeComments = comment
    },
    deleteBlog(state, blog) {
      state.blogs = blog
    },
    deleteComment(state, comment) {
      state.activeComments = state.activeComments.filter(c => c.id != comment.id)
    }
  },
  actions: {
    //---------- BLOG ACTIONS //
    async getProfile({commit}) {
      try {
        let res = await api.get("/profile");
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
    async createBlog({dispatch}, blogData) {
      try {
        let res = await api.post("blogs", blogData)
        dispatch("getAllBlogs")
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
    async deleteBlog({commit}, blogId){
      try {
        await api.delete("blogs/" + blogId)
        commit("deleteBlog", blogId)
        router.push({name: 'Home'})
      } catch (error) {
        console.error(error);
      }
    },
    //----------COMMENT ACTIONS
    async getComments({commit}, blogId){
      try {
        let res = await api.get("blogs/" + blogId + "/comments")
        commit("setComments", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addComment({dispatch}, commentData) {
      try {
        let res = await api.post("comments" , commentData)
        dispatch("getComments", res.data.blog)
      } catch (error) {
        console.error(error);
      }
    },
    async editComment({dispatch}, commentData) {
      try {
        let res = await api.put("comments/" + commentData.id, commentData)
        dispatch("getComments", res.data.blog)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteComment({commit, dispatch}, commentData){
      try {
        await api.delete("comments/" + commentData.id)
        commit("deleteComment", commentData.id)
        dispatch("getComments", commentData.blog)
      } catch (error) {
        console.error(error);
      }
    }
  },
});
