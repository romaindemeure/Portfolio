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
                            <a :href="certification.certificate" target="_blank"><ExternalLinkCertification class="svg"/></a>
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
    font-size: 16px;
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
        padding: 50px 0;
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
import ExternalLinkCertification from '~icons/ri/task-line'


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
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bd92857d-59e1-4c77-823b-9902668e65b9.pdf"
            }, 
            {
                title: "JavaScript: la formation ULTIME",
                hours: "15 Heures",
                trainer: "Louis Nicolas Leuillet",
                link: "https://www.udemy.com/course/javascript-la-formation-ultime/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a3ec0287-6e6a-4c74-850f-696fa77a5861.pdf"
            },
            {
                title: "Développez des sites web professionnels avec Vue3",
                hours: "15 Heures",
                trainer: "DevTheory",
                link: "https://vue.devtheory.fr/?utm_source=header-devtheory-website&utm_medium=devtheory-website",
                certificate: "https://vue.devtheory.fr/?utm_source=header-devtheory-website&utm_medium=devtheory-website"
            },
            {
                title: "Git & GitHub: la formation ULTIME",
                hours: "3 Heures",
                trainer: "Louis Nicolas Leuillet",
                link: "https://www.udemy.com/course/git-github-la-formation-ultime/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c2889096-7752-4686-b802-5114dde9ce32.pdf"
            },
            {
                title: "La Formation Complète Django",
                hours: "15 Heures",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/creez-des-sites-web-avec-python-et-django/?src=sac&kw=La+Formation+Compl%C3%A8te+Django",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9d7d00fd-1b98-4ba2-b36b-20a1adcc2406.pdf"
            },
            {
                title: "Python avancé: aller plus loin",
                hours: "3.5 Heures",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/cours-python-avance/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9fba3c3c-4ca8-4673-86c3-65c873746d64.pdf"
            },
            {
                title: "Python par la pratique: 101 Exercices Corrigés",
                hours: "101 Exercices",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/python-exercices/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9f432339-9739-4c08-9441-2e10b39de96d.pdf"
            },
            {
                title: "30 Exercices Orientés Objets avec Python",
                hours: "30 Exercices",
                trainer: "Thibault Houdon",
                link: "https://www.udemy.com/course/30-exercices-orientes-objets-avec-python/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-9f432339-9739-4c08-9441-2e10b39de96d.pdf"
            },
            {
                title: "Mettez votre site internet en ligne",
                hours: "1.5 Heures",
                trainer: "Louis Nicolas Leuillet",
                link: "https://www.udemy.com/course/mettez-votre-site-internet-en-ligne/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-5306db09-d4e6-4201-ab0c-42d6b9eea4af.pdf"
            },
            {
                title: "Hacking Éthique: Ingénierie Social",
                hours: "5.5 Heures",
                trainer: "Michel Kartner",
                link: "https://www.udemy.com/course/hacking-ethique-ingenierie-sociale/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-afba72dc-94ec-46f7-9147-473850e2af26.pdf"
            },
            {
                title: "UX & Web Design: les fondamentaux",
                hours: "3.5 Heures",
                trainer: "Axel Paris Adobe XD",
                link: "https://www.udemy.com/course/ux-web-design/",
                certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-af563ddc-7eba-4e22-8951-dfe8cc0e0804.pdf"
            },
        ]
      
    }
  },
  components: {
      ExternalLinkLine,
      ExternalLinkCertification
  }
})
</script>