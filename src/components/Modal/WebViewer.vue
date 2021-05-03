<template>
<html>
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
    </div>
  <div class="view" ref='viewer'></div>
      <!-- <div class="py-4">
    <div class="shadow-lg group container  rounded-md   max-w-sm flex justify-center items-center  mx-auto content-div" >
      <img class="relative rounded w-full object-cover object-center mb-2" src="../assets/img/cover.png" alt="content">
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
            <div class="pt-8 text-center">
           <button class="text-center rounded-lg px-4 py-2 bg-white  text-gray-700 font-bold text-base content-div">View</button>
           </div>
        </div>
    </div>
         <div class="group relative w-full flex justify-between py-2 px-2 border border-transparent text-sm font-medium rounded-b-md text-white bg-blue-900 hover:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:shadow-outline-none active:bg-yellow-700 transition duration-150 ease-in-out cursor-pointer">
              <a href="/issues/february-2021" class="hover:text-gray-300">Buy Now</a>
              <a href="/issues/february-2021" class="hover:text-gray-300">Ksh. 220</a>
          </div>
    </div> -->
  </html>
</template>

<script>
/* eslint-disable */
export default {
  name: 'WebViewer',
  props: {
    path: String,
    url: String
  },
  mounted: function () {
        WebViewer({
            path: this.path,
            initialDoc: this.url, // replace with your own PDF file
          }, this.$refs.viewer).then((instance) => {
            this.url = instance
          });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view{
  width: 100%; 
  height: auto;
  position: absolute;
  z-index: 999;
}
</style>