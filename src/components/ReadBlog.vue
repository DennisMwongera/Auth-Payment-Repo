<template>
    <html>
        <!-- component -->
<div class="max-w-screen-xl mx-auto">
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
                <div v-on:click="LoginTrue = true" class="ml-4 flex items-center md:ml-6 lg:ml-6 float-right">      
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
    <!-- header ends here -->

    <main class="mt-10">
      <div v-for="(blog, index) in blogs" :key="index" >
      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style="height: 24em;">
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
          style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
        <img src="../assets/img/Blog-1.jpg" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a href="#"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{{ blog.category}}</a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
           {{ blog.StoryTitle }}
          </h2>
          <div class="flex mt-3">
            <img src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover" />
            <div>
              <p class="font-semibold text-gray-200 text-sm"> {{ blog.author }} </p>
              <p class="font-semibold text-gray-400 text-xs"> {{ blog.published }} </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">{{ blog.body }}</p>

        <!-- <p class="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
          thoroughly
          partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
          attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
          expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
          uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
          newspaper in advantage frankness to concluded unwilling.</p>

        <p class="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
          discovered
          uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
          spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
          active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
          prospect no as raptures quitting.</p>

        <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
          Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
          expression
          unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
          Steepest speaking up attended it as. Made neat an on be gave show snug tore.
        </div>

        <p class="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
          everything.
          Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
          is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
          among. Delightful remarkably new assistance saw literature mrs favourable.</p>

        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

        <p class="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
          oh he common
          future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
          simplicity at do projecting increasing terminated. As edward settle limits at in.</p>

        <p class="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
          Hundred no
          prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
          ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
          connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
          ask expense are compact. New all paid few hard pure she.</p>

        <p class="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
          tastes really
          so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
          elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
          in cold no less been sent hard hill.</p>

        <p class="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
          make two real
          miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
          to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
          without me.</p> -->

      </div>
      </div>
    </main>
    <!-- main ends here -->

    <!-- footer -->
    <footer class="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
      <div class="flex">

        <div class="w-full md:w-1/3 lg:w-1/4">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li> <a href="" class="block text-gray-600 py-2">Team</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">About us</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Press</a> </li>
          </ul>
        </div>

        <div class="w-full md:w-1/3 lg:w-1/4">
          <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li> <a href="" class="block text-gray-600 py-2">Blog</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Privacy Policy</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Terms & Conditions</a> </li>
            <li> <a href="" class="block text-gray-600 py-2">Documentation</a> </li>
          </ul>
        </div>

      </div>
    </footer>
  </div>
    </html>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReadBlog',
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
      .get('http://127.0.0.1:8000/api/blogs')
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