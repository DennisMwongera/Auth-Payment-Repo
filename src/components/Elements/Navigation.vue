<template>
  <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
             <div class="flex items-center">
                <div class="flex-shrink-0">
                   <router-link to="/">
                     <img 
                        class="h-8 w-auto"
                        src="@/assets/img/logo top.png" 
                        alt="L99 Magazine">
                    </router-link>
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/"> 
                        <a href="#" 
                           class="text-gray-900 hover:bg-gray-900 focus:bg-gray-900 text-white hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">
                           Home
                        </a>
                    </router-link>

                        <a href="#contributers" 
                        class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contributors
                        </a>

                    <router-link to="/">
                        <a href="#latest Issues" 
                        class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Latest Issues
                        </a>
                    </router-link>

                    <router-link to="/blog">
                        <a href="#" 
                        class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Stories
                        </a>
                    </router-link>
                    </div>
                 </div>
                </div>
                <div class="hidden md:block">
                  <div class="ml-4 flex items-center md:ml-6 lg:ml-6"> 
                        <nav class="navbar navbar-expand navbar-dark bg-dark">
                            <div class="container inline-flex">
                               <span  v-if="!isLoggedIn" class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                  <svg class="h-full w-full text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                            <ul class="nav navbar-nav mt-1 px-1">
                                <router-link
                                v-if="!isLoggedIn"
                                class="nav-item nav-link text-gray-600 pointer-cursor"
                                :to="{ name: 'Login' }"
                                no-history="true"
                                >
                                Login /
                                </router-link>
                                <router-link
                                v-if="!isLoggedIn"
                                class="nav-item nav-link text-gray-600 pointer-cursor"
                                :to="{ name: 'Signin' }"
                                no-history="true"
                                >
                                Register
                                </router-link>
                                <div v-if="isLoggedIn" class="hidden md:block">
                                  <div class="ml-4 flex items-center md:ml-6">
                                    <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                      <span class="sr-only">View notifications</span>
                                      <!-- Heroicon name: bell -->
                                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                      </svg>
                                    </button>

                                    <!-- Profile dropdown -->
                                    <div class="ml-3 relative">
                                      <div>
                                        <button v-on:click="isHidden = !isHidden" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2   focus:ring-white" id="user-menu" aria-haspopup="true">
                                          <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                              <svg class="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                              </svg>
                                            </span>
                                        </button>
                                      </div>
                                      <!--
                                        Profile dropdown panel, show/hide based on dropdown state.

                                        Entering: "transition ease-out duration-100"
                                          From: "transform opacity-0 scale-95"
                                          To: "transform opacity-100 scale-100"
                                        Leaving: "transition ease-in duration-75"
                                          From: "transform opacity-100 scale-100"
                                          To: "transform opacity-0 scale-95"
                                      -->
                                      <div  v-if="isHidden" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                                        <a href="#" v-if="isLoggedIn" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" @click.prevent="logout">Sign out</a>
                                      </div>
                                    </div>                           
                                  </div>
                                </div>
                            </ul>
                            </div>
                        </nav>
                  </div>
                </div>
                <div class="-mr-2 flex md:hidden" >
                    <!-- Mobile menu button -->
                    <button v-if="menuBtn" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" v-on:click="showMenu">
                        <span class="sr-only">Open main menu</span>
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button v-if="closeBtn" v-on:click="close" class="flex justify-end"><svg class="z-20 mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </button>
                </div>
              </div>
        </div>

            <!--
            Mobile menu, toggle classes based on menu state.

            Open: "block", closed: "hidden"
            -->
            <div v-if="mobileMenu" class="md:hidden absolute z-20 w-full bg-gray-200">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/">
                    <a href="#" 
                    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                    </a>
                </router-link>

                <router-link to="/">
                    <a href="#" 
                    class="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contributers
                    </a>
                </router-link>

                <router-link to="/">
                    <a href="#" 
                    class="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Latest Issues
                    </a>
                </router-link>

                <router-link to="/blog">
                    <a href="#" 
                    class="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Stories
                    </a>
                </router-link>

                 <div class="guest" data-toggle="modal" data-target="#md-login">
                   <router-link
                                v-if="!isLoggedIn"
                                class="nav-item nav-link text-gray-600 pointer-cursor"
                                :to="{ name: 'Login' }"
                                no-history="true"
                                >
                                Login /
                                </router-link>
                                <router-link
                                v-if="!isLoggedIn"
                                class="nav-item nav-link text-gray-600 pointer-cursor"
                                :to="{ name: 'Signin' }"
                                no-history="true"
                                >
                                Register
                                </router-link>
                </div>

                
            </div>
          </div>
        </nav>
</template>

<script>
import User from "@/apis/User.js";

export default {
  name: "Navigation",
  data() {
    return {
      user: [],
      mobileMenu: false,
      menuBar: true,
      menuBtn: true,
      isHidden: false,
      isLoggedIn: false,
      closeBtn: false,
    };
  },

  mounted() {
    this.$root.$on("login", () => {
      this.isLoggedIn = true;
    });

    this.isLoggedIn = !!localStorage.getItem("auth");
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
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("auth");
        this.isLoggedIn = false;
        this.$router.push({ name: "Index" });
      });
    }
  }
};
</script>