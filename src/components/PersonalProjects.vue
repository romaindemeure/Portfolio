<template>
    <div class="container">

            <section class="section">
                <a name="personalProjectsPage"></a>
                <div class="header">
                    <h1 class="title"><span class="color">02.</span>  Mes créations</h1>
                </div>

                <div class="mainLeft">

                    <div class="left">
                        <img class="img" src="/images/RestaurantProject.PNG" alt="">
                    </div>

                    <div class="right">

                        <div class="divPresentation">
                            <h1 class="presentation">Site Internet | Frontend</h1>
                        </div>

                        <div class="divProjectName">
                            <h2 class="projectName">Création d'un Restaurant Vue.Js3</h2>
                        </div>
                        
                        <div class="divText">
                            <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quibusdam, debitis deleniti voluptatum cumque tenetur minus quaerat qui, molestias non facere expedita explicabo tempora placeat suscipit dignissimos quos iure inventore.</p>
                        </div>

                        <div class="divList">

                            <ul class="list">
                                <li class="listElement">HTML</li>
                                <li class="listElement">Css</li>
                                <li class="listElement">Javascript/Typescript</li>
                                <li class="listElement">Vue.Js3</li>
                            </ul>

                        </div>

                        <div class="divIconLink">
                            <a href="" target="_blank"><ExternalLinkLine class="icon"/></a>
                            <a href="https://github.com/romaindemeure/restaurantWithVue3-Ts" target="_blank"><GithubIcon class="icon"/></a>
                        </div>
                        
                    </div>
                </div>
                <!-- test -->
                <div class="mainRight">

                    <div class="right">
                        <img class="img" src="/images/BackendBlogProject.PNG" alt="">
                    </div>

                    <div class="left">

                        <div class="divPresentation">
                            <h1 class="presentation">Site Internet | Backend</h1>
                        </div>

                        <div class="divProjectName">
                            <h2 class="projectName">Création d'un blog Django</h2>
                        </div>
                        
                        <div class="divText">
                            <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quibusdam, debitis deleniti voluptatum cumque tenetur minus quaerat qui, molestias non facere expedita explicabo tempora placeat suscipit dignissimos quos iure inventore.</p>
                        </div>

                        <div class="divList">

                            <ul class="list">
                                <li class="listElement">HTML</li>
                                <li class="listElement">Css</li>
                                <li class="listElement">Python</li>
                                <li class="listElement">Django</li>
                            </ul>

                        </div>

                        <div class="divIconLink">
                            <a href="" target="_blank"><ExternalLinkLine class="icon"/></a>
                            <a href="https://github.com/romaindemeure/django-blog" target="_blank"><GithubIcon class="icon"/></a>
                        </div>
                        
                    </div>
                </div>

            </section>
    </div>
</template>

<style scoped>
.container {
    margin: 200px 20px;
}

.container .section .header {
    font-size: 16px;
    margin-bottom: 40px;
}

.container .section .header .title .color {
    color: #64FFDA;
    font-weight: 400;
}

.container .section .mainLeft {
    margin-bottom: 100px;
}

.container .section .mainLeft .right .divText {
    background: #112240;
    padding: 15px;
    border-radius: 5px;
}

.container .section .mainRight .left .divText {
    background: #112240;
    padding: 15px;
    border-radius: 5px;
}

.container .section .mainLeft .left .img {
    border-radius: 5px;
}

.container .section .mainRight .right .img {
    border-radius: 5px;
}

.container .section .mainLeft .right .divPresentation .presentation {
    color: #64FFDA;
    font-weight: 400;
}

.container .section .mainRight .left .divPresentation .presentation {
    color: #64FFDA;
    font-weight: 400;
}

.container .section .mainLeft .right .divList .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.container .section .mainLeft .right .divList .list .listElement {
    margin-right: 10px;
}

.container .section .mainRight .left .divList .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.container .section .mainRight .left .divList .list .listElement {
    margin-right: 10px;
}

.text {
    color: #CCD6F6;
}

.icon {
    font-size: 18px;
    margin: 0 8px;
}

.icon:hover {
    color: #64FFDA;
    cursor: pointer;
}

@media only screen and (min-width: 1150px)  {
    .container {
        display: block;
        max-width: 1100px;
        margin: 400px auto;
        padding: 0 50px;
    }

    .container .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        bottom: 200px;
    }
    .container .section .header {
        margin-bottom: 40px;
    }
    .container .section .header .title {
        font-size: 25px;
    }

    .container .section .mainLeft {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .container .section .mainLeft .left {
        position: absolute;
        left: 0;
    }

    .container .section .mainLeft .right {
        text-align: right;
        position: absolute;
        right: 0;
    }

    .container .section .mainLeft .right .divPresentation .presentation {
        font-size: 16px;
        color: #64FFDA;
    }
    .container .section .mainLeft .right .divText {
        background: #112240;
        max-width: 550px;
        padding: 15px;
        border-radius: 5px;
    }
    .container .section .mainLeft .right .divList .list {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        list-style: none;
    }

    .container .section .mainLeft .right .divList .list .listElement {
        margin: 0 10px;
    }
    /* droite */

    .container .section .mainRight {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 400px;
    }

    .container .section .mainRight .right {
        position: absolute;
        right: 0;
    }
    .container .section .mainRight .right .img {
        border-radius: 5px;
    }

    .container .section .mainRight .left {
        text-align: left;
        position: absolute;
        left: 0;
    }

    .container .section .mainRight .left .divPresentation .presentation {
        font-size: 16px;
        color: #64FFDA;
    }
    .container .section .mainRight .left .divText {
        background: #112240;
        max-width: 550px;
        padding: 15px;
        border-radius: 5px;
    }
    .container .section .mainRight .left .divList .list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
    }

    .container .section .mainRight .left .divList .list .listElement {
        margin: 0 10px;
    }    
}


</style>

<script setup lang="ts">
import ExternalLinkLine from '~icons/ri/external-link-line'
import GithubIcon from '~icons/ri/github-line'
</script>