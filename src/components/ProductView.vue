<template>
    <html>
        <div class="productview">
            <body class="antialiased">
<div class="bg-white shadow-sm sticky top-0">
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

                    <router-link to="/subscribe"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Latest Issues</a></router-link>

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
</div>
<main class="flex-grow">
      <div id="fb-root" class=" fb_reset"></div>
          <!-- <div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div><div class="fb-customerchat fb_invisible_flow fb_iframe_widget" attribution="setup_tool" page_id="115455218485355" theme_color="#553C9A" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;attribution=setup_tool&amp;container_width=0&amp;local_state=%7B%22v%22%3A0%2C%22path%22%3A2%2C%22chatState%22%3A1%2C%22visibility%22%3A%22hidden%22%2C%22showUpgradePrompt%22%3A%22not_shown%22%7D&amp;locale=en_US&amp;page_id=115455218485355&amp;request_time=1612904152866&amp;sdk=joey&amp;theme_color=%23553C9A"><span style="vertical-align: bottom; width: 1000px; height: 0px;"><iframe name="f2e0106615ed37c" width="1000px" height="1000px" title="" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://web.facebook.com/v7.0/plugins/customerchat.php?app_id=&amp;attribution=setup_tool&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1cb2572e629a44%26domain%3Depaper.parentsafrica.com%26origin%3Dhttps%253A%252F%252Fepaper.parentsafrica.com%252Ff99f286dc06204%26relation%3Dparent.parent&amp;container_width=0&amp;local_state=%7B%22v%22%3A0%2C%22path%22%3A2%2C%22chatState%22%3A1%2C%22visibility%22%3A%22hidden%22%2C%22showUpgradePrompt%22%3A%22not_shown%22%7D&amp;locale=en_US&amp;page_id=115455218485355&amp;request_time=1612904152866&amp;sdk=joey&amp;theme_color=%23553C9A" style="padding: 0px; position: fixed; z-index: 2147483646; border-radius: 16px; top: auto; width: 399px; max-height: 0px; background: none; bottom: 85px; right: 4px; margin-right: 12px; min-height: 0px;" class=" fb_customer_chat_bounce_out_v2" data-testid="dialog_iframe"></iframe></span></div><div class="fb_dialog  fb_dialog_advanced" style="overflow: visible; z-index: 2147483644;"><div class="fb_dialog_content"><iframe name="blank_f2e0106615ed37c" width="60px" tabindex="-1" data-testid="bubble_iframe" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://web.facebook.com/v7.0/plugins/customer_chat/bubble" style="margin: 0px 12px; padding: 0px; position: fixed; z-index: 2147483644; bottom: 24px; top: auto; height: 60px; width: 60px; border-radius: 29px; box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px; background: none; display: block; right: 12px;"></iframe><iframe name="unread_f2e0106615ed37c" tabindex="-1" data-testid="unread_iframe" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://web.facebook.com/v7.0/plugins/customer_chat/bubble" style="bottom: 68px; position: fixed; width: 20px; height: 24px; z-index: 2147483645; border-radius: 4pt; background: none; right: 22px;"></iframe></div></div></div> -->
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
                <div class="border-b border-gray-300">
        <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row">
            <div class="flex-none">
                <img src="../assets/img/cover.png" alt="January 2021" class="w-64 lg:w-96">
            </div>
            <div class="md:ml-24">
                <h2 class="text-4xl mt-4 md:mt-0 font-semibold">Feburuary 2021</h2>
                <div class="flex flex-wrap items-center text-purple-800 text-sm mt-2">
                    <span class="ml-1">Ken Ambani, Tausi, Dr. Edward Mungai, Miriam Komu, Cynthia Nyongesa</span>
                    <span class="mx-2">|</span>
                    <span>Issue No.: 001</span>
                    <span class="mx-2">|</span>
                    <span>Price: Ksh.220</span>
                </div>

                <p class="text-gray-700 mt-8 leading-5 tracking-wide">
                    Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. 
                    Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. 
                    Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. 
                    Occasional preference fat remarkably now projecting uncommonly dissimilar. 
                    Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling.
                </p>

                

                <div class="mt-12">

                    <form action="https://epaper.parentsafrica.com/cart/16" method="POST">
                        <input type="hidden" name="_token" value="xQFJOpWOXirhvBF2Kv0bSnDJKARYzaw8JSBAHtA8"> <button type="submit" class="flex inline-flex items-center bg-purple-900 text-white rounded font-bold px-5 py-4 hover:bg-purple-800 transition ease-in-out duration-150">
                            <svg class="w-6 mr-2 fill-current" fill="none" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span>Buy Now</span>
                        </button>
                    </form>

                </div>

            </div>
        </div>
    </div>

    <!-- <div class="border-b border-gray-100">
        <div class="container mx-auto px-4 py-10">
            <h2 class="text-2xl font-semibold">You may also like</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

                                    <div class="mt-8">
                        <a href="/issues/february-2020">
                            <img src="/img/covers/2020/02.jpg" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-2 hover:text-gray:300"></a>
                            <div class="text-sm text-gray-400">
                                February 2020
                            </div>
                        </div>
                    </div>
                                    <div class="mt-8">
                        <a href="/issues/august-2020">
                            <img src="/img/covers/2020/08.jpg" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-2 hover:text-gray:300"></a>
                            <div class="text-sm text-gray-400">
                                August 2020
                            </div>
                        </div>
                    </div>
                                    <div class="mt-8">
                        <a href="/issues/december-2020">
                            <img src="/img/covers/2020/12.jpg" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-2 hover:text-gray:300"></a>
                            <div class="text-sm text-gray-400">
                                December 2020
                            </div>
                        </div>
                    </div>
                                    <div class="mt-8">
                        <a href="/issues/october-2020">
                            <img src="/img/covers/2020/10.jpg" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-2 hover:text-gray:300"></a>
                            <div class="text-sm text-gray-400">
                                October 2020
                            </div>
                        </div>
                    </div>
                                    <div class="mt-8">
                        <a href="/issues/december-2019">
                            <img src="/img/covers/2019/12.jpg" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
                        <div class="mt-2">
                            <a href="#" class="text-lg mt-2 hover:text-gray:300"></a>
                            <div class="text-sm text-gray-400">
                                December 2019
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>  -->

        <!-- /End replace -->
        </div>
    </main>

  </body>
        </div>
    </html>
</template>

<script>
export default {
    name: 'ProductView',
    data() {
        return {
            mobileMenu: false
        }
    }
}
</script>