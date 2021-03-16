<template>
    <html>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="max-w-md w-full px-6">
    <img class="mx-auto h-8 w-auto" src="@/assets/img/logo top.png" alt="L99 Magazine">

    
    <h2 class="mt-10 text-3xl font-semibold text-center font-display">Reset your password</h2>
    <p class="mt-5 text-sm text-center text-gray-600">
      Enter your email and we'll send you a link to reset your password.
    </p>

    <form class="mt-5" action="https://tailwindui.com/password/email" method="POST">
      <input type="hidden" name="_token" value="BzrSBBxFPpOrn1TfR8g1VWzJkGmSRujPF7ePviJC">      <div class="rounded-md shadow-sm">
        <input aria-label="Email address" name="email" type="email" required="" autofocus="" class="border-gray-300 placeholder-gray-500 focus:shadow-outline-blue focus:border-blue-300  appearance-none relative block w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none sm:text-sm" placeholder="Email address" value="">
      </div>

      
      <div class="mt-5">
        <button type="submit" class="relative block w-full py-2 px-3 border border-transparent rounded-md text-white font-semibold bg-gray-800 hover:bg-gray-700 focus:bg-gray-900 focus:outline-none focus:shadow-outline sm:text-sm">
          Send password reset email
        </button>
      </div>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-gray-100 text-gray-500">Don't have an account?</span>
        </div>
      </div>

      <div class="mt-6">
        <router-link to="/signin"><a href="" class="block w-full text-center py-2 px-3 border border-gray-300 rounded-md text-gray-900 font-medium hover:border-gray-400 focus:outline-none focus:border-gray-400 sm:text-sm">
          Create Account
        </a></router-link>
      </div>
    </div>

      </div>
</div>
    </html>
</template>

<script>
export default {
    name: 'ForgotPassword'
}
</script>