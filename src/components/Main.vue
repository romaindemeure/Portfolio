<template>
    <div class="container">

        <div class="main">

            <h1 class="textFirst">Salut, mon nom est</h1>
            <h2 class="textSecond">Romain Demeure</h2>
            <h3 class="textThird">Je construit des choses sur le web.</h3>
            <p class="textFour">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore nihil eos a perferendis natus, earum laborum maxime non at repellendus vero. earum laborum maxime non at repellendus vero.
            </p>

            <div class="divButton">
                <a href="" class="textButton">Button</a>
            </div>

        </div>

    </div>
</template>

<style scoped>
.container {
    display: flex;
    height: 800px;
}
.container .main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #0A192F;
    color: #fff;
    height: 600px;
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}

.container .main .textFirst {
    margin: 0;
    font-size: 14px;
    font-family: 'Fira code';
    font-weight: 500;
    color: #64FFDA;
}

.container .main .textSecond {
    margin: 5px 0 0;
    font-size: 50px;
    font-family: 'Inter';
    color: #fff;
}

.container .main .textThird {
    margin: 0;
    margin: -10px 0 0;
    font-size: 50px;
    font-family: 'Inter';
    color: #8892B0;
}
.container .main .textFour {
    margin: 5px 0 0;
    font-size: 16px;
    font-family: 'Inter';
    color: #8892B0;
    max-width: 540px;
}
.container .main .divButton {
    margin: 30px 0;
}
.container .main .textButton {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 15px 50px;
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