<template>
  <div id="app">
    <div class="bg-indigo-900 font-mono drop-shadow-lg" id="nav">
      <div class=" max-w-7xl ">
        <div class="flex justify-between ml-0">
          <!-- Menu -->
          <div>
            <!-- Logo -->
           <div class="sm:flex flex-row ml-10 items-center py-5 w-max ">
              <!-- Title -->
                <h1 class="text-2xl sm:text-4xl text-white ml-1">☕Formation Java Simplon</h1>
              <!-- Menu -->
              <div class=" hidden xl:flex flex-row items-center text-white text-lg ml-20 px-10 ">
                <div class="flex flex-row mr-10 hover:-translate-y-1 transition ease-in-out duration-500">&#128102;<router-link class="text-xl hover:underline  focus:underline" to="/">Présentation</router-link></div>
                <div class="flex flex-row mr-10 hover:-translate-y-1 transition ease-in-out duration-500">🧭<router-link class="text-xl hover:underline  focus:underline" to="/parcours">Parcours</router-link></div>
                <div class="flex flex-row mr-10 hover:-translate-y-1 transition ease-in-out duration-500">🖥️<router-link class="text-xl hover:underline  focus:underline" to="/experience">Expérience </router-link> </div>
                <div class="flex flex-row mr-10 hover:-translate-y-1 transition ease-in-out duration-500">🚀<router-link class="text-xl hover:underline  focus:underline" to="/motivation">Motivations</router-link></div>
              </div>
              
           </div>
          </div>

          <!-- Login --> 
 
          <!-- Button show mobile menu -->
  
        </div>
      </div>
          
    
    </div>
      

    <!--      
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
    -->
       
    <router-view class=""/>
  </div>
</template>
