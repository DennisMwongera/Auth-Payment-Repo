<template>
<!-- component -->
<html>
  <LoginModal v-if="LoginTrue" class="z-20 absolute" />
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

                    <router-link to="/"><a href="#latest Issues" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Latest Issues</a></router-link>

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
                <div class="-mr-2 md:hidden" @click="mobileMenu = true">
                <!-- Mobile menu button -->
            <button v-if="menuBtn" class="bg-gray-800 inline-flex items-center justify- p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" v-on:click="showMenu">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
            <button v-if="closeBtn" v-on:click="close" class="flex justify-end"><svg class="z-20 mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
                </div>
            </div>
            </div>

            <!--
            Mobile menu, toggle classes based on menu state.

            Open: "block", closed: "hidden"
            -->
             <div v-if="mobileMenu" class="md:hidden absolute z-20 w-full bg-red-800">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/"><a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a></router-link>

                <router-link to="/"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contributers</a></router-link>

                <router-link to="/"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Latest Issues</a></router-link>

                <router-link to="/blog"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Stories</a></router-link>

                  <a v-on:click="login" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Subscribe</a>
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

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium">Relationships</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium">Health</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium">Food</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium">Travel</a>
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
    <div class="bg-white">
        <div id="more" class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
              <div class="px-5 py-2">
                  <a href="" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                  About Us
                  </a>
              </div>
              <div class="px-5 py-2">
                  <a href="" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Contact Us
                  </a>
              </div>
            </nav>
              <div class="mt-8 flex justify-center">
                <a href="https://www.facebook.com/L99Magazine" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/l99magazine/" class="ml-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="https://twitter.com/L99Magazine" class="ml-6 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                </a>
              </div>
            <div class="mt-8">
            <p class="text-center text-base leading-6 text-gray-400">
                © 2021 L99 Magazine. All rights reserved.
            </p>
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
      isHidden: false,
      mobileMenu: false,
      menuBar: true,
      menuBtn: true,
      closeBtn: false,
      LoginTrue: false,
      blogs: [],
      errors: [],
   
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
  },
  methods: {
        showMenu() {
          this.mobileMenu = true
          this.closeBtn = true
          this.menuBtn = false
        },
        close() {
          this.menuBtn = true
          this.closeBtn = false
          this.mobileMenu = false
         },
         login() {
           this.LoginTrue = true
         }
  }
 
}
</script>
