<template>
  <div id="app">
    <div class="bg-indigo-600 font-mono" id="nav">
      <div class=" max-w-7xl mx-auto">
        <div class="flex justify-between ml-0">
          <!-- Menu -->
          <div>
            <!-- Logo -->
           <div class="flex items-center py-5 px-4 hover:py-4">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-12 w-12 text-white hover:h-14 w-14" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
              <!-- Title -->
                <h1 class="text-4xl text-white ml-2">Puzzle</h1>
              <!-- Menu -->
              <div class=" hidden md:flex ml-10 text-white text-xl text-center ">
                <router-link class="text-xl hover:text-2xl" to="/">Home</router-link> |
                <router-link class="text-xl hover:text-2xl" to="/about">About</router-link> |
                <router-link class="text-xl hover:text-2xl" to="/">Box</router-link> 
              </div>
           </div>
          </div>
          <!-- Login --> 
          <div class="hidden md:flex justify-between items-center text-white mr-5 py-5 px-4">
            <router-link class=" mx-2 text-xl hover:text-lg" to="/login">Login</router-link> |
            <router-link class="mx-2 text-xl hover:text-lg" to="/register">Register</router-link> 
          </div>
          <!-- Button show mobile menu -->
          <div class="md:hidden flex item-center">
            <button class="py-5 px-8" >
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-10 w-10 text-white hover:h-8 w-8 text-gray" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
  
        </div>
      </div>

    </div>
           <!--- Mobile menu ---->
          <div class="md:hidden">
            <router-link class=" " to="/login">Login</router-link>
            <br>
            <router-link class="" to="/register">Register</router-link>
            <br> 
            <router-link class="" to="/">Home</router-link>  
            <br>
            <router-link class="" to="/about">About</router-link>
            <br> 
            <router-link class="" to="/">Box</router-link> 

          </div>
    <router-view class=""/>
  </div>
</template>
