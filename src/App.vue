<template>
  <div id="app">
    <div class="bg-indigo-600" id="nav">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!-- Menu -->
          <div>
            <!-- Logo -->
            
          </div>
          <!-- Login -->
          <div></div>
          <!-- Button show mobile menu -->
          <div></div>
        </div>
      </div>
    </div>
    <router-view class=""/>
  </div>
</template>

        <router-link class="text-2xl hover:text-xl" to="/">Home</router-link> |
        <router-link class="text-2xl hover:text-xl" to="/about">About</router-link> |
        <router-link class="text-2xl hover:text-xl" to="/other">Box</router-link> 
