<template>
    <a name="aboutPage">
    <div class="container">
        <main class="about">

            <section class="section">
                <div class="header">
                    <h1 class="title"><span class="color">01.</span> À propos de moi</h1>
                </div>
        

                <div class="text">
                    
                    <div class="aboutDivText">
                        <p class="aboutText"><span class="color">2015</span> - Je suis rentré dans la programmation grace au jeu vidéo Minecraft ou j'ai écrit mes premiers scripts en Java pour créer des mini-jeux et jouer avec mes amis.</p>
                        <p class="aboutText"><span class="color">2017</span> - Je découvre JavaScript avec lequel je créé des petits jeux web, ce qui m’a permis de découvrir la puissance de la programmation.</p>
                        <p class="aboutText"><span class="color">2021</span> - Je décide de me lancer réellement dans la programmation, d'investir dans des formations et de mettre en oeuvre mes idées. Je commence à avoir des compétences, j'aimerais donc en faire mon métier.</p>
                    </div>
                    
                    <div class="aboutPicture">
                        <img class="me" src="/images/photoDeProfil.jpg" alt="">
                    </div>

                </div>


            </section>


        </main>

    </div>
    </a>
</template>

<style scoped>

.container {
    margin: 200px 20px;
}

.container .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container .about .title {
    color: #fff;
}

.container .about .title .color {
    color: #64FFDA;
}

.container .about .aboutDivText .aboutText {
    color: #CCD6F6;
}

.container .about .section .aboutPicture {
    text-align: center;
}

.container .about .section .header {
    font-size: 16px;
    margin-bottom: 40px;
}

.container .about .section .aboutPicture .me {
    margin-top: 40px;
    border-radius: 5px;
    width: 400px;
    height: auto;
}

.color {
    color: #64FFDA;
    font-weight: 400;
}

@media only screen and (min-width: 900px) {

    .container {
        max-width: 1100px;
        margin: 0 auto;
        padding-top: 200px;
    }

    .container .about .text {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .container .about .section .header {
        margin-bottom: 40px;
    }

    .container .about .section .title {
        font-size: 25px;
    } 

    .container .about .aboutDivText {
        width: 50%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
    }

    .container .about .aboutPicture {
        width: 50%;
        text-align: center;
        margin: 20px 0;
    }

    .container .about .section .aboutPicture .me {
        border-radius: 5px;
        height: 350px;
        margin-top: 0;
        width: auto;
    }
}



</style>

<script setup lang="ts">

</script>