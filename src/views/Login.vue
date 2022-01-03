<template>
 

    <div class=" flex content-center justify-center items-center sm:mt-20 py-20">

        <div class=" font-mono bg-slate-50 drop-shadow-md max-w-lg sm:flex">
        
        <img 
            class="flex-1 w-full sm:h-full h-40 object-cover shadow-md" 
            src="https://picsum.photos/200/370" 
            alt="">
        
        <!-- Input Block -->
        
        <div class="p-4 text-center">
            
            <h1 class="flex-1 text-2xl py-5 font-bold underline underline-offset-8">Login Box</h1>
            
            <div class="m-4">
               
                <label 
                    class="block text-gray-600 my-2"
                    for="username">username</label>
                
                <input 
                    class="border border-grey-300 shadow-inner p-2 text-gray-700 w-full focus:shadow-lg" 
                    type="text" 
                    name="usernale" 
                    id="username">
               
                <label 
                    class="block text-gray-600 my-2" 
                    for="username">Password</label>
               
                <input 
                    class="border border-grey-300 shadow-inner p-2 text-gray-700 w-full focus:shadow-lg" 
                    type="password" 
                    name="password" 
                    id="password" >
           
            </div>
            
            <!--Button-->
            
            <button 
                class="my-5 bg-blue-700 text-white py-1.5 px-10 rounded-full hover:bg-blue-400" 
                type="submit">Log in</button>
        
        </div>
        
    </div>
    </div>
</template>

<script>

export default {
  name: 'Login'
}
</script>