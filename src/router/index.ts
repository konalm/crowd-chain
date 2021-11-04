import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserProfileUpdate from "@/components/UserProfileUpdate.vue";
import UserProfileRequired from "@/components/UserProfileRequired.vue";
import Posts from "@/components/Posts.vue";
import CreatePost from "@/components/CreatePost.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  }, {
    name: "UserProfile",
    path: "/user-profile",
    component: UserProfile,
  }, {
    name: "UserProfileUpdate",
    path: "/user-profile-update",
    component: UserProfileUpdate
  }, {
    name: "UserProfileRequired",
    path: "/user-profile-required",
    component: UserProfileRequired
  }, {
    name: "Posts",
    path: "/posts",
    component: Posts
  }, {
    name: "CreatePost",
    path: "/create-post",
    component: CreatePost
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;