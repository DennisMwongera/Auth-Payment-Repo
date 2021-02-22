
<template>
    <html>
        <!-- This example requires Tailwind CSS v2.0+ -->
<div class="fixed z-20 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
             
              <div class="portfolio-info">
                <!-- <h3><a href="assets/img/portfolio/portfolio-1 this is not working.jpg" data-gall="portfolioGallery" class="venobox" title="App 1">Preview Issue 1</a></h3> -->
                <div>

                  <!--inside preview-->

                  <a href="assets/img/portfolio/in1-1.jpg" data-gall="portfolioGallery" class="venobox" title="inside 1 of thumb 1"><i class="icofont-eye"></i></a>
                  <a href="portfolio-details.html" title="Details"><!--<i class="icofont-plus"></i>--></a>



                  <a href="assets/img/portfolio/in1-2.jpg" data-gall="portfolioGallery" class="venobox" title="inside 2 of thumb 1"><!--<i class="icofont-eye"></i>--></a>

                  <a href="assets/img/portfolio/in1-3.jpg" data-gall="portfolioGallery" class="venobox" title="inside 2 of thumb 1"><!--<i class="icofont-eye"></i>--></a>

                  <a href="portfolio-details.html" title="Details"><!--<i class="icofont-plus"></i>--></a>
                </div>
              </div>
      </div>
    </div>
  </div>
</div>

    </html>
</template>
 
<script>
// import pdf from 'vue-pdf'
export default {
    components: {
        // pdf
    },
    data () {
      return {
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Page 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Page 2',
            w: 1200,
            h: 900
          }
        ],
          currentPage: 1,
            pageCount: 0
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
  }
</script>

<style scoped>
/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 30px;
}

.portfolio-details .portfolio-details-container {
  position: relative;
}

.portfolio-details .portfolio-details-carousel {
  position: relative;
  z-index: 1;
}

.portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
  margin-top: 5px;
  text-align: left;
}

.portfolio-details .portfolio-details-carousel .owl-dot {
  display: inline-block;
  margin: 0 10px 0 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd !important;
}

.portfolio-details .portfolio-details-carousel .owl-dot.active {
  background-color: #70b9b0 !important;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  position: absolute;
  right: 0;
  bottom: -70px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 50px;
}

.portfolio-details .portfolio-description h2 {
  width: 50%;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0 0 0 0;
}

@media (max-width: 768px) {
  .portfolio-details .portfolio-description h2 {
    width: 100%;
  }
  .portfolio-details .portfolio-info {
    position: static;
    margin-top: 30px;
  }
}
</style>