<template>
 

    <div class=" flex content-center justify-center items-center my-10">

        <div class=" font-mono rounded-2xl bg-white drop-shadow-lg w-11/12 h-3/6 sm:flex">
        <!--
        <img 
            class="flex-1 w-28 sm:h-full h-40 object-cover shadow-md" 
            src="https://picsum.photos/200/550" 
            alt="">
        -->
        <!-- Input Block -->
        
        <div class="p-4 text-center w-full">
            
            
            <h1 class="flex-1 text-3xl py-5 mb-5 font-bold bg-indigo-800 rounded-xl text-white drop-shadow-lg  ">&#128102; Présentation</h1>
          
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                &#128075; Bonjour, je m’appelle Jim Cottet et j’habite à Mornant près de Lyon.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                &#127973; Je suis né à Bron le 17 aout 1994.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                &#127929; J’aime la musique et je pratique l’improvisation au piano que j’ai appris en autodidacte. 
                J’ai également fait de la MAO (Musique Assistée par Ordinateur) et je possède quelques notions de solfège.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                &#128210; J’apprécie, lorsque j’en ai le temps, lire un peu de philosophie ou des livres d’histoire… J’ai une appétence pour les humanités en général.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                &#128213; Je pratique quelques langues étrangères: J’ai appris l’anglais en autodidacte et je lis un peu l’allemand et l’italien.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                &#127811;  Je ne suis pas un grand sportif, mais je fais parfois quelques randonnées dans la campagne autours de chez moi, pour faire un peu d'exercice et me détendre.
            </p>

            <hr>
            
            
     
            
            <!--Button-->
            <div class="flex flex-col justify-between mx-2 my-5 md:justify-end md:flex-row md:mx-40 md:my-5">
                <router-link class="bg-indigo-800 text-white text-xl my-5 py-1.5 px-10 rounded-full drop-shadow-lg hover:translate-x-3 transition ease-in-out duration-500" to="/parcours">Parcours &#8594;</router-link>
            </div>
        </div>
        
    </div>
    </div>
</template>

 <script>

 export default{
   name: 'Présentation'
 }
 </script>
 
