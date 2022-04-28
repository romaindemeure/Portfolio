<template>
    <div class="container">

        <div class="left">

        </div>

        <div class="main">

            <h1 class="textFirst">Salut, mon nom est</h1>
            <h2 class="textSecond">Romain Demeure</h2>
            <h3 class="textThird">Je construit des choses sur le web.</h3>
            <p class="textFour">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore nihil eos a perferendis natus, earum laborum maxime non at repellendus vero, iste ipsa reprehenderit atque fugit incidunt porro dicta!
            </p>

            <div class="divButton">
                <a href="" class="textButton">Button</a>
            </div>

        </div>

        <div class="right">

        </div>

    </div>
</template>

<style scoped>
.container {
    background: #0A192F;
    height: 800px;
}
.container .main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #0A192F;
    color: #fff;
    height: 500px;
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.container .main .textFirst {
    margin: 10px 0 0;
    font-size: 14px;
    color: #64FFDA;
}

.container .main .textSecond {
    margin: 10px 0 0;
    font-size: 50px;
    color: #fff;
}

.container .main .textThird {
    margin: 10px 0 0;
    font-size: 30px;
    color: #8892B0;
}
.container .main .textFour {
    margin: 10px 0 0;
    color: #8892B0;
}
.container .main .divButton {
    margin: 30px 0 0;
}
.container .main .textButton {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.container .main .textButton:hover {
    background-color: #64FFDA;
    color: #0A192F;
    transition: color, background-color 0.5s;
}
</style>

<script setup lang="ts">

</script>