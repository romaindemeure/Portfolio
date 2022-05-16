<template>
    <div class="container">
        <div class="main">

            <section>
                <div class="box">
                    <h1 class="text myNameIs">Salut, mon nom est</h1>
                </div>

                <div class="box">
                    <h2 class="text me">Demeure Romain</h2>
                </div>

                <div class="box">
                    <h3 class="text iBuild">Je crée des choses sur le web</h3>
                </div>

                <div class="box boxText">
                    <p class="text description">Passionné par le développement informatique depuis que j'ai 15 ans, je travaille principalement avec Javascript et Python. J'aime découvrir de nouvelles technologies, les apprendre et créer des projets. <span class="color">Je suis actuellement à la recherche d'une alternance.</span></p>
                </div>

                <div class="box boxButton">
                    <a href="https://github.com/romaindemeure" class="text button">Mon GitHub</a>
                </div>
            </section>

        </div>
    </div>
</template>

<style scoped>

.container {
    margin: 100px 20px;
}

.container .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container .main .box .text {
    padding: 0;
    margin: 20px 0;
}

.container .main .box .myNameIs {
    color: #64FFDA;
    font-size: 14px;
    font-weight: 400;
}

.container .main .box .me {
    font-size: 25px;
}

.container .main .box .iBuild {
    font-size: 25px;
    color: #CCD6F6;
}

.container .main .box .description {
    font-size: 14px;
    color: #CCD6F6;
}

.container .main .boxButton {
    margin-top: 40px;
}

.container .main .box .button {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
}

.container .main .box .button:hover {
    background-color: #64FFDA;
    color: #0A192F;
    transition: color, background-color 0.5s;
}

.color {
    color: #64FFDA;
}

@media only screen and (min-width: 900px) {
/* Creation de notre estpace de travail pour travailler au milieu de notre page */
    .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 200px 100px;
    }

    /* Reset de nos padding et margin  */
    .container .main .box .text {
        margin: 0;
    }

    .container .main .box .myNameIs {
        font-size: 16px;
    }

    .container .main .box .me {
        font-size: 60px;
    }

    .container .main .box .iBuild {
        font-size: 50px;
    }

    .container .main .box .description {
        max-width: 540px;
    }

    .container .main .boxText {
        padding: 20px 0;
    }
    .container .main .box .button {
        padding: 15px 30px;
    }

}

</style>

<script setup lang="ts">

</script>