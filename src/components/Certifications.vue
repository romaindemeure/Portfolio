<template>
    <div class="container">
        <main class="certification">
            <section class="section">
                <a name="certificationPage"></a>
                <div class="header">
                    <h1 class="title"><span class="color">03.</span> Les formations que j'ai suivis</h1>
                </div>

                <div class="main">

                    <div class="box">
                        <div>
                            <p class="textCertification">La Formation Complète Python - <span class="color">42 Heures</span> - Thibault Houdon</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/formation-complete-python/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">JavaScript: la formation ULTIME - <span class="color">15 Heures</span> - Louis Nicolas Leuillet</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/javascript-la-formation-ultime/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">Développez des sites web professionnels avec Vue.js 3 - <span class="color">15 Heures</span> - DevTheory</p>
                        </div>
                        <div>
                            <a href="https://vue.devtheory.fr/?utm_source=header-devtheory-website&utm_medium=devtheory-website" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">Git & GitHub: la formation ULTIME - <span class="color">3 Heures</span> - Louis Nicolas Leuillet</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/git-github-la-formation-ultime/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">La Formation Complète Django - <span class="color">15 Heures</span> - Thibault Houdon</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/creez-des-sites-web-avec-python-et-django/?src=sac&kw=La+Formation+Compl%C3%A8te+Django" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">Python avancé: aller plus loin - <span class="color">3.5 Heures</span> - Thibault Houdon</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/cours-python-avance/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">Python par la pratique: 101 Exercices Corrigés - <span class="color">101 Exercices</span> - Thibault Houdon</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/python-exercices/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">30 Exercices Orientés Objets avec Python - <span class="color">30 Exercices</span> - Thibault Houdon</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/30-exercices-orientes-objets-avec-python/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">Mettez votre site internet en ligne - <span class="color">1.5 Heures</span> - Louis Nicolas Leuillet</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/mettez-votre-site-internet-en-ligne/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">Hacking Éthique: Ingénierie Social - <span class="color">5.5 Heures</span> - Michel Kartner</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/hacking-ethique-ingenierie-sociale/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                    <div class="box">
                        <div>
                            <p class="textCertification">UX & Web Design: les fondamentaux - <span class="color">3.5 Heures</span> - Axel Paris Adobe XD</p>
                        </div>
                        <div>
                            <a href="https://www.udemy.com/course/ux-web-design/" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
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
.container .certification {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.container .certification .section .header {
    margin-bottom: 40px;
}

.container .certification .section .header .title .color {
    color: #64FFDA;
}

.container .certification .section .main .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #112240;
    border-radius: 5px;
    margin: 25px 0;
    padding: 15px;
}

.container .certification .section .main .box .textCertification {
    margin: 0;
    padding: 0;
}

.container .certification .section .main .box .textCertification .color {
    color: #64FFDA;
}
.svg {
    margin: 0 10px;
}
.svg:hover {
    color: #64FFDA;
    cursor: pointer; 
}

@media only screen and (min-width: 900px) {
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
    .svg {
        font-size: 16px;
    }
}

</style>

<script setup lang="ts">
import ExternalLinkLine from '~icons/ri/external-link-line'

</script>