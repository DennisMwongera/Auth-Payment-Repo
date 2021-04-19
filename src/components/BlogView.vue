<template>
<!-- component -->
<html>
 <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
      <nav class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-auto" src="../assets/img/logo top.png" alt="L99 Magazine">
                 </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/"><a href="#" class="text-gray-900 hover:bg-gray-900 focus:bg-gray-900 text-white hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a></router-link>

                    <router-link to="/"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Contributors</a></router-link>

                    <router-link to=""><a href="#latest Issues" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Latest Issues</a></router-link>

                    <router-link to="/blog"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">News</a></router-link>

                    <router-link to="/blog"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Stories</a></router-link>
                    </div>
                </div>
                </div>
                <div class="hidden md:block">
                <div v-on:click="LoginTrue = true" class="ml-4 flex items-center md:ml-6 lg:ml-6">      
                    <a href="#" class="text-white bg-red-600 hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Subscribe</a>
                    <!--  <router-link to="/signin"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a></router-link> -->
                </div>
                </div>
                <div class="-mr-2 flex md:hidden" @click="mobileMenu = true">
                <!-- Mobile menu button -->
                <button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
            </div>
            </div>

            <!--
            Mobile menu, toggle classes based on menu state.

            Open: "block", closed: "hidden"
            -->
            <div v-if="mobileMenu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contributers</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Latest Issues</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Stories</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
            </div>
          </div>
        </nav>
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        From the blog
      </h2>
          <div class="inline-flex px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Parenting</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Relationships</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Health</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Food</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Travel</a>
            </div>
    </div>
    <div class="mt-12 max-w-md mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none">
      <div v-for="(blog, index) in blogs" :key="index" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="../assets/img/Blog-1.jpg" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1 justify-start">
            <p class="text-left text-sm font-medium text-indigo-600 outline">
              <a href="#" class=" hover:underline">
                {{ blog.category}}
              </a>
            </p>
            <router-link to="/blog_post"><a href="#" class="block mt-2 text-left">
              <p class="text-left text-xl font-semibold text-gray-900">
                {{ blog.StoryTitle }}
              </p>
              <p class="mt-3 text-base text-gray-500">
               {{ blog.body }}
              </p>
            </a></router-link>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">Roel Aufderehar</span>
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </a>
            </div>
            <div class="ml-3">
              <p class="text-left text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">
                 {{ blog.author }}
                </a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">
                  {{ blog.published}}
                </time>
                <span aria-hidden="true">
                  &middot;
                </span>
                <span>
                  {{ blog.readtime}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</html>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blog',
  components: {
  },
  data(){
    return{
    blogs: [],
    errors: [],
    mobileMenu: false
    }
  },
    // Fetches posts when the component is created.
  created() {
    axios
      .get('http://127.0.0.1:8000/api/stories')
      .then((res) => {
        // JSON responses are automatically parsed.
        this.blogs = res.data;
        console.log('endpoint working')
      })
      .catch((e) => {
        this.errors.push(e);
      });
  }
 
}
</script>
