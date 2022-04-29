<template>
    <div class="container">

        <div class="about">

            <div class="aboutDivText">
                <h1 class="aboutMe"><span class="color">01.</span> A Propos</h1>
                <p class="aboutText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto ducimus eum, aliquam voluptatibus rem. Fuga cupiditate consectetur atque, aut laboriosam asperiores quaerat quia consequatur omnis similique nulla suscipit tempore.</p>
                <p class="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus laboriosam eligendi voluptatem. Esse excepturi, ut, quidem labore aspernatur animi saepe aut cupiditate, cum quasi obcaecati! Quas sint temporibus sunt.</p>
                <p class="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus consequuntur animi nemo magni, unde in perspiciatis laboriosam ut eius !</p>
            </div>
            
            <div class="aboutPicture">

            </div>

        </div>

    </div>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
}
.container .about {
    display: flex;
    flex-direction: row;
}

.container .about .aboutDivText {
    width: 50%;
}
.container .about .aboutMe {
    color: #fff;
}
.container .about .aboutMe .color {
    color: #64FFDA;
}

.container .about .aboutDivText .aboutText {
    color: #8892B0;
}



</style>

<script setup lang="ts">

</script>