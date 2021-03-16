
<template>
    <html>
       <div>
          <div class="fixed z-20 inset-0 overflow-y-auto">
            <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
              </div>
             
            <div class="images relative z-30" > 
              <button v-on:click="close" class="float-right focus:outline-none relative z-40 mr-5">
                <svg  class="mt-0 fixed mr-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
              <div>
                <img  v-for="(src, idx) in images"  :key="idx"  v-bind:src="src.url" v-show="currentImage === idx" :class="{'is-active-slide': currentImage === idx}" width="900px" height="auto" class="relative mt-8 transform transition-all lg:m-auto lg:w-full sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 ">
              </div>
              <button v-if="images.length-1!=currentImage" v-on:click="prevSlide"  class="prev control-3 w-8 h-8 ml-2 md:ml-10 fixed cursor-pointer float-left text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-white focus:outline-none  leading-tight text-center z-40 inset-y-0 left-0 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              </button>
              <button   v-on:click="nextSlide"  class="next control-3 w-8 h-8 mr-2 md:mr-10 fixed cursor-pointer float-right  text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-white focus:outline-none  leading-tight text-center z-40 inset-y-0 right-0 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
              </button>   
            </div> 
            </div>
          </div>
        </div>
      </html>
</template>

  
<script>
  // import axios from 'axios'
  export default {
    name: 'ImageModal',
    components: {
    },
  
   data() {
      return{
        currentImage: 0,
        images: [
           {
        "ID": "001", 
        "Name": "page1", 
        "url": require('@/assets/img/1.jpg')
       },
        {
        "ID": "002", 
        "Name": "page2", 
        "url": require('@/assets/img/2.jpg')
    },
  
    {
        "ID": "003", 
        "Name": "page3", 
        "url": require('@/assets/img/3.jpg')
    },
    {
        "ID": "004", 
        "Name": "page4", 
        "url": require('@/assets/img/4.jpg')

    },
     {
        "ID": "005", 
        "Name": "page5", 
        "url": require('@/assets/img/5.jpg')

    },
     {
        "ID": "006", 
        "Name": "page6", 
        "url": require('@/assets/img/6.jpg')

    },
     {
        "ID": "007", 
        "Name": "page7", 
        "url": require('@/assets/img/7.jpg')

    },
     {
        "ID": "008", 
        "Name": "page8", 
        "url": require('@/assets/img/8.jpg')

    }
        ]
     }
    },
    created() {
      // for ( let i of this.images){
      console.log(this.images)
      // }
    this.images.forEach(function (item, index) {
      console.log(item.url, index);
    });
    //   axios.get("https://picsum.photos/v2/list?page=2&limit=5")
    //   .then(response => {
    //      this.images = response.data.photos;
    //       console.log(response.data);W
    //   }, error => {
    //   console.log(error);
    //  });
     },
    methods: {
      getImages() {
          //  const myList = document.querySelector('images')
    
              },
    //       getImgUrl: function (imagePath) {
    //   return require('@/assets/' + imagePath);
    // },
       nextSlide(){
          this.currentImage++;
      },
      prevSlide(){
          this.currentImage--;
      },
      close() {
         this.$parent.showImage = false
      }
    }
  }
</script>