<template>
    <div class="container">
        <div class="certification">

            <section class="section">
                <a name="certificationPage"></a>
                <div class="header">
                    <h1 class="title"><span class="color">03.</span> Les formations que j'ai suivis</h1>
                </div>

                <div class="main">

                    <div class="box" v-for="certification in certifications">
                        <div>
                            <p class="textCertification" >{{ certification.title }} - <span class="color">{{ certification.hours }}</span> - {{ certification.trainer }}</p>
                        </div>
                        <div>
                            <a :href="certification.link" target="_blank"><ExternalLinkLine class="svg"/></a>
                        </div>
                    </div>

                </div>
            </section>

        </div>
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
    font-weight: 400;
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

<script lang="ts">
import ExternalLinkLine from '~icons/ri/external-link-line'

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
        certifications: [
            {
                title: "La Formation Complète Python",
                hours: "42 heures",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/formation-complete-python/",
            }, 
            {
                title: "JavaScript: la formation ULTIME",
                hours: "15 Heures",
                trainer: "Louis Nicolas Leuillet",
                link: "https://www.udemy.com/course/javascript-la-formation-ultime/",
            },
            {
                title: "Développez des sites web professionnels avec Vue.js 3",
                hours: "15 Heures",
                trainer: "DevTheory",
                link: "https://vue.devtheory.fr/?utm_source=header-devtheory-website&utm_medium=devtheory-website",
            },
            {
                title: "Git & GitHub: la formation ULTIME",
                hours: "3 Heures",
                trainer: "Louis Nicolas Leuillet",
                link: "https://www.udemy.com/course/git-github-la-formation-ultime/",
            },
            {
                title: "La Formation Complète Django",
                hours: "15 Heures",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/creez-des-sites-web-avec-python-et-django/?src=sac&kw=La+Formation+Compl%C3%A8te+Django",
            },
            {
                title: "Python avancé: aller plus loin",
                hours: "3.5 Heures",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/cours-python-avance/",
            },
            {
                title: "Python par la pratique: 101 Exercices Corrigés",
                hours: "101 Exercices",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/python-exercices/",
            },
            {
                title: "30 Exercices Orientés Objets avec Python",
                hours: "30 Exercices",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/30-exercices-orientes-objets-avec-python/",
            },
            {
                title: "Mettez votre site internet en ligne",
                hours: "1.5 Heures",
                trainer: "Louis Nicolas Leuillet",
                link: "https://www.udemy.com/course/mettez-votre-site-internet-en-ligne/",
            },
            {
                title: "Hacking Éthique: Ingénierie Social",
                hours: "5.5 Heures",
                trainer: "Michel Kartner",
                link: "https://www.udemy.com/course/hacking-ethique-ingenierie-sociale/",
            },
            {
                title: "UX & Web Design: les fondamentaux",
                hours: "3.5 Heures",
                trainer: "Axel Paris Adobe XD",
                link: "https://www.udemy.com/course/ux-web-design/",
            },
        ]
      
    }
  },
  components: {
      ExternalLinkLine
  }
})
</script>