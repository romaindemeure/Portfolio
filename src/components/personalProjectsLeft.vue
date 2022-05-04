<template>
    <div class="container">

        <main class="about">

            <section class="section">

                <div class="main">

                    <div class="left">
                        <img class="img" src="https://via.placeholder.com/600x300" alt="">
                    </div>

                    <div class="right">

                        <div class="divPresentation">
                            <h1 class="presentation">Site Internet</h1>
                        </div>

                        <div class="divProjectName">
                            <h2 class="projectName">Le Ptit Jeannot</h2>
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
    padding: 0 100px;
}
.container .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
}
.container .about .section {
    position: relative;
    bottom: 200px;
}
.container .about .section .header .color{
    color: #64FFDA;
}
.container .about .section .main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}
.container .about .section .main .left {
    position: absolute;
    right: 0;
}
.container .about .section .main .right {
    text-align: left;
    position: absolute;
    left: 0;
}

.container .about .section .main .right .divPresentation .presentation {
    font-size: 16px;
    color: #64FFDA;
}
.container .about .section .main .right .divText {
    background: #112240;
    max-width: 550px;
    padding: 15px;
    border-radius: 5px;
}
.container .about .section .main .right .divList .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.container .about .section .main .right .divList .list .listElement {
    margin: 0 10px;
}




</style>

<script setup lang="ts">

</script>