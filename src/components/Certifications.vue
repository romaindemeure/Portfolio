<template>
    <div class="container">
        <main class="certification">
            <section class="section">

                <div class="header">
                    <h1 class="title"><span class="color">03.</span> Les Formations que j'ai suivis</h1>
                </div>

                <div class="main">

                    <div class="box">
                        <p class="textCertification">La Formation Complète Python - <span class="color">42 Heures</span> - Thibault Houdon</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">JavaScript: la formation ULTIME - <span class="color">15 Heures</span> - Louis Nicolas Leuillet</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">Git & GitHub: la formation ULTIME - <span class="color">3 Heures</span> - Louis Nicolas Leuillet</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">La Formation Complète Django - <span class="color">15 Heures</span> - Thibault Houdon</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">Python avancé: aller plus loin - <span class="color">3.5 Heures</span> - Thibault Houdon</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">Python par la pratique: 101 Exercices Corrigés - <span class="color">3.5 Heures</span> - Thibault Houdon</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">30 Exercices Orientés Objets avec Python - <span class="color">1 Heures</span> - Thibault Houdon</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">La Formation Complète PyCharm - <span class="color">3.5 Heures</span> - Thibault Houdon</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">Mettez votre site internet en ligne - <span class="color">1.5 Heures</span> - Louis Nicolas Leuillet</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">Hacking Éthique: Ingénierie Social - <span class="color">5.5 Heures</span> - Michel Kartner</p>
                    </div>

                    <div class="box">
                        <p class="textCertification">UX & Web Design: les fondamentaux - <span class="color">3.5 Heures</span> - Axel Paris Adobe XD</p>
                    </div>

                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 200px 100px;
}

.container .certification {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.container .certification .section .header {
    margin-bottom: 40px;
}
.container .certification .section .header .title {
    font-size: 25px;
}

.container .certification .section .header .title .color {
    color: #64FFDA;
}

.container .certification .section .main .box {
    background: #112240;
    border-radius: 5px;
    margin: 25px;
    padding: 10px;
}

.container .certification .section .main .box .textCertification {
    margin: 0;
    padding: 0;
}

.container .certification .section .main .box .textCertification .color {
    color: #64FFDA;
}
</style>

<script setup lang="ts">

</script>