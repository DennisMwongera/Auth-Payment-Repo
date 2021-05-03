<template>
    <html>
        <LoginModal v-if="LoginTrue" class="z-20 absolute" />
        <div class="productview">
            <body class="antialiased">
<div class="bg-white shadow-sm sticky top-0">
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
                    <router-link to="/subscribe"><a href="#" class="text-gray-900 hover:bg-gray-900 focus:bg-gray-900 text-white hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a></router-link>

                    <router-link to="/"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Contributors</a></router-link>

                    <router-link to="/subscribe"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Latest Issues</a></router-link>

                    <router-link to="/blog"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">News</a></router-link>

                    <router-link to="/blog"><a href="#" class="text-gray-900 hover:bg-gray-700 focus:bg-gray-900 hover:text-white focus:text-white px-3 py-2 rounded-md text-sm font-medium">Stories</a></router-link>
                    </div>
                </div>
        </div>
        <div class="hidden md:block">
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
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
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

                <router-link to="/"><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a></router-link>
              </div>
            </div>                           
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
    <div class=" md:hidden absolute z-20 w-full" v-if="mobileMenu">
      <div>
          <div class="block w-full mt-0 px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-900 ">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/"><a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a></router-link>

                <router-link to="/"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contributers</a></router-link>

                <router-link to="/"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Latest Issues</a></router-link>

                <router-link to="/blog"><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Stories</a></router-link>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Account</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Signout</a>
            </div>
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
                    <span class="ml-1">Naphtali Budamba, John Doe, Jane Doe, Mary Jane, Sam Smith</span>
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

                    <form action="" method="POST">
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
    </html>
</template>

<script>
export default {
    name: 'ProductView',
    data() {
        return {
            mobileMenu: false,
            LoginTrue: false
        }
    }
}
</script>