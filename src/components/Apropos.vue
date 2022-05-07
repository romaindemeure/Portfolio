<template>
    <a name="aboutPage"></a>
    <div class="container">
        <main class="about">

            <section class="section">
                <div class="header">
                    <h1 class="title"><span class="color">01.</span> A Propos de moi</h1>
                </div>
        

                <div class="text">
                    
                    <div class="aboutDivText">
                        <p class="aboutText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto ducimus eum, aliquam voluptatibus rem. Fuga cupiditate consectetur atque, aut laboriosam asperiores quaerat quia consequatur omnis similique nulla suscipit tempore.</p>
                        <p class="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus laboriosam eligendi voluptatem. Esse excepturi, ut, quidem labore aspernatur animi saepe aut cupiditate, cum quasi obcaecati! Quas sint temporibus sunt.</p>
                        <p class="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus consequuntur animi nemo magni, unde in perspiciatis laboriosam ut eius !</p>
                    </div>
                    
                    <div class="aboutPicture">
                        <img class="me" src="src/assets/photoDeProfil.jpg" alt="">
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
    color: #8892B0;
}
.container .about .section .aboutPicture {
    text-align: center;
}
.container .about .section .aboutPicture .me {
    margin-top: 40px;
    border-radius: 5px;
    height: 400px;
    width: auto;
}

@media only screen and (min-width: 900px) {

    .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 200px 100px;
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

    }
    .container .about .aboutPicture {
        width: 50%;
        text-align: center;
        margin: 20px 0;
    }
    .container .about .section .aboutPicture .me {
        margin-top: 0;
        border-radius: 5px;
        height: 250px;
        width: auto;
    }

}



</style>

<script setup lang="ts">

</script>