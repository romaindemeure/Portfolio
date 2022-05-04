<template>
    <div class="container">
        <main class="contact">
            <section class="section">

                <div class="header">
                    <h1 class="title"><span class="color">03.</span> Me contacter</h1>
                </div>

                <div class="main">

                    <div class="divText">
                        <p class="text">Étant admis a l'école CESI de Brest, je suis actuellement à la recherche d'une alternance dans le dev en Bretagne. Actuellement je touche un peu à tout (back, front) j'aimerais aujourd'hui approfondir mes compétences en développement grâce à une immersion en entreprise. Si vous avez une question ou que vous souhaitez simplement me saluer, je vous répondrais avec plaisir.</p>
                    </div>

                    <div class="divButton">
                        <a href="mailto:demeureromain4@gmail.com" class="button">blabla</a>
                    </div>

                </div>


            </section>
        </main>
    </div>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 400px auto;
    padding: 0 100px;
}

.container .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container .contact .section .header .title {
    font-size: 25px;
}

.container .contact .section .header .title .color {
    color: #64FFDA;
}



</style>

<script setup lang="ts">

</script>