<template>
 

    <div class=" flex content-center justify-center items-center sm:mt-10 py-20">

        <div class=" font-mono bg-slate-50 drop-shadow-md max-w-lg sm:flex">
        
        <img 
            class="flex-1 w-full sm:h-full h-40 object-cover shadow-md" 
            src="https://picsum.photos/200/550" 
            alt="">
        
        <!-- Input Block -->
        
        <div class="p-4 text-center">
            
            <h1 class="flex-1 text-2xl py-5 font-bold underline underline-offset-8">Register Box</h1>
            
            <div class="m-4">
               
                <label 
                    class="block text-gray-600 my-2"
                    for="username">User Name </label>
                
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

                <label 
                class="block text-gray-600 my-2" 
                for="username">Confirm Password</label>
               
                <input 
                    class="border border-grey-300 shadow-inner p-2 text-gray-700 w-full focus:shadow-lg" 
                    type="password" 
                    name="password" 
                    id="confPass" >

                <label 
                class="block text-gray-600 my-2" 
                for="Email">Email</label>
               
                <input 
                    class="border border-grey-300 shadow-inner p-2 text-gray-700 w-full focus:shadow-lg" 
                    type="email" 
                    name="password" 
                    id="password" >
           
            </div>
            
            <!--Button-->
            
            <button 
                class="my-5 bg-blue-700 text-white py-1.5 px-10 rounded-full hover:bg-blue-400" 
                type="submit">Register</button>
        
        </div>
        
    </div>
    </div>
</template>

<script>

export default {
  name: 'Register'
}
</script>