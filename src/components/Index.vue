<template>
<html>
<div>
 <main>
   <LoginModal v-if="LoginTrue" class="z-20 absolute" />
   <ImageModal v-if ="showImage" />
    <div class="z-10 fixed w-full">
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                <div class="flex-shrink-0">
                   <router-link to="/"><img class="h-8 w-auto" src="../assets/img/logo top.png" alt="L99 Magazine"></router-link>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/"><a href="#" class="text-gray-900 hover:bg-gray-900 focus:bg-gray-900 text-white hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a></router-link>

                    <a href="#contributers" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Contributors</a>

                    <router-link to="/"><a href="#latest Issues" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Latest Issues</a></router-link>

                    <router-link to="/blog"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Stories</a></router-link>
                    </div>
                </div>
                </div>
                <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6 lg:ml-6"> 
                  <div class="guest" data-toggle="modal" data-target="#md-login">
                          <span v-on:click="LoginTrue = true" class="cursor-pointer font-normal px-2 bg-teal-200">Sign In </span>
                          <span>or </span>
                          <router-link to="/signin"><span class="px-2 font-normal"> Sign Up</span></router-link>
                  </div>
                    <!-- <a v-on:click="LoginTrue = true" href="#" class="text-white bg-red-600 hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Subscribe</a> -->
                    <!--  <router-link to="/signin"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a></router-link> -->
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

                  <a v-on:click="LoginTrue = true" href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Subscribe</a>
            </div>
          </div>
        </nav>
    </div>
    <div class="carousel shadow-2xl bg-white w-full">
<div class="carousel-inner relative overflow-hidden w-full">
<!--Slide 1-->
		<input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
		<div class="carousel-item absolute opacity-0" style="height:80vh;">
			<div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center bg-center bg-cover">
      <img class="w-full h-full object-cover sm:h-full md:h-full lg:w-full lg:h-full" src="@/assets/hero-img/1.png" alt="">
      </div>
		</div>
		<label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>  
<!--Slide 2-->
		<input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
		<div class="carousel-item absolute opacity-0" style="height:80vh;">
			<div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center bg-center bg-cover" style='background-image: url("../src/assets/hero-img/2.png");'>
      <img class="w-full h-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/hero-img/2.png" alt="">
      </div>
		</div>
		<label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
<!--Slide 3-->
		<input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
		<div class="carousel-item absolute opacity-0" style="height:80vh;">
			<div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center bg-center bg-cover" style='background-image: url("../src/assets/hero-img/3.png");'>
      <img class="w-full h-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/hero-img/3.png" alt="">
      </div>
		</div>
  <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
		<label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

		<!-- Add additional indicators for each slide-->
		<ol class="carousel-indicators">
			<li class="inline-block mr-3">
				<label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
			</li>
		</ol>	
    <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black flex justify-start" ></span> 
</div>
    </div>
    <h1 id="latest Issues" class="mt-8 text-black font-semibold flex justify-center text-3xl">Latest Issues</h1>
      <div class="mx-auto py-2 sm:px-6 lg:px-3">
        <div class="px-4 py-4 sm:px-0">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-2 mx-auto">
              <div class="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div v-for="issue in issues" :key="issue.id" v-on:click="showImage = true" @click="imgShow" class="content-div cursor-pointer ">
                  <h2 class="text-sm text-gray-900 font-medium title-font mb-2 text-left ">{{ issue.date }}</h2>
                  <div class="img-box p-1 rounded-lg transform hover:-translate-y-1 hover:scale-100">
                    <img class="rounded w-full object-cover object-center mb-2" src="../assets/img/cover.png" alt="content">
                      <router-link to="/productview">
                        <div class="group relative w-full flex justify-between py-2 px-2 border border-transparent text-sm font-medium rounded-b-md text-white bg-blue-900 hover:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:shadow-outline-none active:bg-yellow-700 transition duration-150 ease-in-out cursor-pointer">
                          <span class="hover:text-gray-300">Buy Now</span>
                          <span class="hover:text-gray-300">Ksh. 220</span>
                        </div>
                        </router-link>
                        <div class="mag-view-box">
                          <span class="text-white font-medium "><svg class="px-10" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffff">
                         <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"/></svg>Preview</span>
                      </div>
                  </div>
                </div> 
              </div>
            </div>
          </section>
        </div>
      </div>

    
            
      <section id="contributers" class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Here are our Contributers</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae qui 
                distinctio ex soluta? Voluptates, ea! Esse, natus. Quas possimus laboriosam 
                consectetur deserunt ea sapiente. Dicta ipsam atque voluptatem provident
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full flex justify-center">
              <splide :options="options">
                <splide-slide>
                  <img src="../assets/img/con-1.jpg">
                </splide-slide>
                <splide-slide>
                  <img src="../assets/img/con-2.png">
                </splide-slide>
                <splide-slide>
                  <img src="../assets/img/con-1.jpg">
                </splide-slide>
                <splide-slide>
                  <img src="../assets/img/con-4.jpg">
                </splide-slide>
                <splide-slide>
                  <img src="../assets/img/con-1.jpg">
                </splide-slide>
                <splide-slide>
                  <img src="../assets/img/con-2.png">
                </splide-slide>
              </splide>
            </div>
          </div> 
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

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
    </main>

</div>
</html>
</template>

<script>
// import axios from 'axios'
import LoginModal from '../components/Modal/LoginModal.vue'
import ImageModal from '../components/Modal/ImageModal'
export default {
  name: 'Index',
  components: {
    LoginModal,
    ImageModal
  },
  data(){
    return{
      user: [],
      isHidden: false,
      mobileMenu: false,
      menuBar: true,
      menuBtn: true,
      closeBtn: false,
      LoginTrue: false,
      showImage: false,
      issues: [
        {
          title: 'Magazine Title',
          date: 'Feburuary, 2020',
        }
      ],
         options: {
          rewind : true,
          width  : 800,
          gap    : '3rem',
          type   : 'loop',
	perPage: 3,
	perMove: 1,
        }
    }
  },
     methods: {
        showMenu() {
          this.mobileMenu = true
          this.closeBtn = true
          this.menuBtn = false
        },
        imgShow() {
            this.showImage = true
        },
        close() {
          this.menuBtn = true
          this.closeBtn = false
          this.mobileMenu = false
        }
    }
}
</script>

<style scoped>

			.carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 2%;
				left: 0;
				right: 0;
				text-align: center;
				z-index: 2;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
			}
.content-div .img-box::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.699);
	display: inline-block;
	transform: scaleY(0);
	transform-origin: 0 0 0;
	transition: all 0.4s ease-in-out 0s;
	opacity: 0;
  border-radius: 2%;
}
.content-div:hover .img-box::before {
	opacity: 1;
	transform: scaleY(1);
	visibility: visible;
}
.mag-view-box {
	position: absolute;
	top: -10%;
	left: 0;
	right: 0;
    transform: translate(0, -50%);
	padding: 0 28px;
    transition: all 1s ease 0s;
    
}

.content-div:hover .mag-view-box {
	top: 50%;
}
.content-div{
  /* background-image:url('../assets/img/cover.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  height: 100%;
}
  
 .image-cover {
      height: 400px;
      width: 100%;
    } 

		</style>