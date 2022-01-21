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
            
            <h1 class="flex-1 text-3xl py-5 mb-5 font-bold bg-indigo-800 rounded-xl text-white drop-shadow-lg  ">🧭 Parcours</h1>

            <h2 class="text-xl text-left md:mx-10 mt-10">&#128218; Scolarité :</h2>
          
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">

                Un parcours scolaire assez mauvais. Des difficultés en français combinées avec un manque de motivation m’ont amené à quitter le cursus général après la troisième.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                J’obtiens quand-même mon brevet et pars faire un BAC pro Systèmes Électroniques et Numériques dans le lycée Pablo Picasso à Givors. Le programme ne correspondait pas vraiment à mes attentes et les frictions fréquentes avec  les autres élèves m’ont poussé à quitter le lycée en cours de première année. Je l’ai terminée  dans un lycée de Saint-Etienne. Déçu par cette expérience et ne sachant pas quoi faire, je quitte cette formation pour entreprendre un CAP de Plâtrier-Plaquiste. Bien que le métier ne me plaise pas, je suis assez assidu la première année. 
                Mais encore une fois lassé du comportement de mes camarades, je ne viens presque plus en cours lors la deuxième année. Je ne passe pas le CAP.
            </p>
            <h2 class="text-xl text-left md:mx-10 mt-10">&#128084; Monde du travail :</h2>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                Je déménage à Annecy où je touve assez vite un poste dans la restauration, en tant que plongeur pour l’été, je suis gardé en tant que commis de cuisine après la saison.
                Le chef qui devait me former a quitté le restaurant, je suis confié à quelqu’un qui n’avait visiblement pas le temps ou l’envie de former qui que ce soit. Après environ six mois à travailler dans cet établissement, je quitte mon poste.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
                Je reviens à Mornant. Durant plus d’un an et demi je ne travail pas. Je profité de cette période d’oisiveté pour lire et apprendre le solfège ainsi que le piano. Puis je trouvé un poste d’employé polyvalent en restauration à mi-temps dans un restaurant tout près de chez moi. J'y travaille pendant plus de quatre ans.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
               Suite à l'aggravation de mes difficultés psychiques, je décide de quitter ce travail qui, à cause du stress qu’il génère, tend à aggraver mon état.
                Je quitte l'entreprise en 2020.
            </p>
            <p class="text-justify mx-3 my-10 text-lg md:text-justify md:mx-10 md:my-10">
               J’entame ensuite un parcours de soins et d’orientation. C’est dans ce contexte que jobtien une RQTH. Je rejoins 
                le module d’orientation approfondie de LADAPT de Lyon.
            </p>

            <hr>
            <!--Button-->
            <div class="flex flex-col justify-between mx-2 my-5 md:flex-row md:justify-between md:mx-40 md:my-5">
                <router-link class="bg-indigo-800 text-white text-xl my-5 py-1.5 px-10 rounded-full drop-shadow-lg hover:-translate-x-3 transition ease-in-out duration-500" to="/">&#8592; Présentation </router-link>
                <router-link class="bg-indigo-800 text-white text-xl my-5 py-1.5 px-10 rounded-full drop-shadow-lg hover:translate-x-3 transition ease-in-out duration-500" to="/experience">Expérience &#8594;</router-link>
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Parcours',
}
</script>
