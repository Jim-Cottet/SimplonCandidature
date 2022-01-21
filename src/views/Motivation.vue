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
            
            
            <h1 class="flex-1 text-3xl py-5 mb-5 font-bold bg-indigo-800 rounded-xl text-white drop-shadow-lg  ">🚀 Motivations à entreprendre cette formation</h1>
          
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
               🌠 Je ne peux et ne veux plus exercer mon ancien métier dans la restauration et je cherche donc à me former dans un domaine qui me convienne mieux : plus en phase avec mes attentes et mes besoins. 
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
               🌕 Le développement me semble être un métier qui m’irait plutôt bien. Il m’est parfois difficile de voir beaucoup de monde, et trop d’agitation ce n’est pas très bon pour moi.
                C’est un domaine ou le travail à distance, au moins partiellement, est une pratique courante. Ce qui pourrait être un vecteur de stabilité. 
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                🔥 Je m’ennuie assez vite lorsque la routine s’installe. La programmation est un domaine où les choses évoluent très rapidement et où il y a toujours quelque chose de nouveau à apprendre. 
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                🌌 J’ai depuis pas mal de temps de l’intérêt pour cette activité. Je l’ai pratiquée en dilettante  pendant quelques années et je souhaite maintenant le faire avec plus de rigueur et de constance afin d’en faire un métier. 
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                ☕ Je n’avais jamais utilisé le Java avant de préparer cette candidature, mais sa découverte lors des exercices sur Sololearn m'a plutôt plu. 
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                🪐 Je crois que cette formation pourrait me permettre d’apprendre un langage plus en profondeur, avec plus de régularité et d’acquérir une expérience professionnelle très précieuse. 
            </p>
            <hr>
            
            
     
            
            <!--Button-->
            <div class="flex flex-col justify-between mx-2 my-5 md:flex-row md:justify-between md:mx-40 md:my-5">
                <router-link class="bg-indigo-800 text-white text-xl my-5 py-1.5 px-10 rounded-full drop-shadow-lg hover:-translate-x-3 transition ease-in-out duration-500" to="/experience">&#8592; Expérience </router-link>
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>

export default {
  name: 'Motivation'
}
</script>