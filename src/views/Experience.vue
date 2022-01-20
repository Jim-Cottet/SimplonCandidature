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
            
            
            <h1 class="flex-1 text-3xl py-5 mb-5 font-bold bg-indigo-800 rounded-xl text-white drop-shadow-lg  ">🖥️ Expérience en programmation</h1>
          
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                ⌨️ Je suis rentré en contact avec l’univers de la programmation au travers de ma pratique de  la MAO. J’utilisais un logiciel(Max/MSP) qui permettait de créer des synthétiseurs numériques, des séquenceurs… en liant des éléments visuels qui sont parfois très proches des variables, des boucles et des conditions que l’on peut retrouver dans la programmation. 
                J’ai alors commencé à apprendre un peu de Python, bien  que je ne me souvienne pas exactement de ce que je comptais en faire, ni même si je comptais en faire quoi que ce soit.
                Ce logiciel musical à éveillé chez moi une curiosité pour le codage.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                🖱️ Depuis il m’arrive régulièrement, par phase, de m’amuser un peu à apprendre un langage généralement autour du développement web.
                Ne pratiquant pas de façon assez régulière, je n’ai jamais atteint un très bon niveau. 
                Mais je garde quelques notions et je m’améliore quand même un peu chaque fois.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                🧮 J’ai récemment, dans le cadre de ma réorientation, fait un stage de trois semaines dans une entreprise de développement web à Annecy.
                Je ne connaissais pas bien la plupart des technologies utilisées sur le projet en cours. Je pouvais donc difficilement suivre ce qui se passait. Nous avons alors décidé que j’essaierai de créer, de mon côté, une application simple avec les technologies qu’ils employaient.
                Pendant trois semaines, j'ai développé, avec leur aide ponctuelle, un petit prototype d’application (Une Todo-list).

            </p>


            <hr>
            
            
     
            
            <!--Button-->
            <div class="flex flex-col justify-between mx-2 my-5 md:flex-row md:justify-between md:mx-40 md:my-5">
                <router-link class="bg-indigo-800 text-white text-xl my-5 py-1.5 px-10 rounded-full drop-shadow-lg hover:-translate-x-3 transition ease-in-out duration-500" to="/parcours">&#8592; Parcours</router-link>
                <router-link class="bg-indigo-800 text-white text-xl my-5 py-1.5 px-10 rounded-full drop-shadow-lg hover:translate-x-3 transition ease-in-out duration-500" to="/motivation">Motivation &#8594;</router-link>
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>

export default {
  name: 'Experience'
}
</script>