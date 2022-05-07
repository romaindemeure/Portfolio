<template>
    <div class="container">
        <main class="contact">
            <section class="section">

                <div class="header">
                    <h1 class="title"><span class="color">03.</span> Me contacter</h1>
                </div>

                <div class="main">
                    <div class="divTitle">
                        <h1 class="title">Prendre Contacte Avec Moi</h1>
                    </div>

                    <div class="divText">
                        <p class="text">Étant admis a l'école CESI de Brest, <span class="color">je suis actuellement à la recherche d'une alternance dans le développement en Bretagne.</span>  Ayant tout appris en autodidacte, je touche un peu à tout (back, front). J'aimerais aujourd'hui approfondir mes compétences en développement grâce à une immersion en entreprise. Si mon profil vous intéresse, vous avez une question ou que vous souhaitez simplement me saluer, je vous répondrais avec plaisir.</p>
                    </div>

                    <div class="divButton">
                        <a href="mailto:demeureromain4@gmail.com" class="button">Envoyer un message</a>
                    </div>

                </div>


            </section>
        </main>
    </div>
</template>

<style scoped>

.container {
    margin: 200px 20px;
}

.container .contact .section .header .title .color {
    color: #64FFDA;
}

.container .contact .section .main .divTitle {
    text-align: center;
    color: #CCD6F6;
}

.container .contact .section .main .divText {
    background: #112240;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
}

.container .contact .section .main .divText .text {
    margin: 0;
}

.container .main .divButton {
    text-align: center;
    margin-top: 50px;
}

.container .main .divButton .button {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
}

.container .main .divButton .button:hover {
    background-color: #64FFDA;
    color: #0A192F;
    transition: color, background-color 0.5s;
}

.container .contact .section .main .divText .text .color {
    color: #64FFDA;
    font-weight: 600;
}

@media only screen and (min-width: 900px)  {

    .container {
        max-width: 1100px;
        margin: 200px auto;
        padding: 0 100px;
    }

    .container .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container .contact .section .header {
        margin-bottom: 40px;
    }

    .container .contact .section .header .title {
        font-size: 25px;
    }

    .container .contact .section .main {
        text-align: center;
    }
    
    .container .contact .section .main .divTitle {
        font-size: 20px;
    }

    .container .contact .section .main .divText {
        margin: 50px 200px;
    }

    .container .contact .section .main .divText .text {
        text-align: center;
        font-size: 14px;
    }

    .container .main .divButton .button {
        color: #64FFDA;
        border: solid 1px #64FFDA;
        border-radius: 5px;
        padding: 15px 30px;
        cursor: pointer;
    }

    .container .main .divButton .button:hover {
        background-color: #64FFDA;
        color: #0A192F;
        transition: color, background-color 0.5s;
    }
}


</style>

<script setup lang="ts">

</script>