<template>
    <div class="container">

        <section class="main">
            
            <div class="content">
                <h1 class="textFirst">Salut, mon nom est</h1>
            </div>
            
            <div class="content">
                <h2 class="textSecond">Romain Demeure.</h2>
            </div>

            <div class="content">
                <h3 class="textThird">Je construit des choses sur le web.</h3>
            </div>

            <div class="content">
                <p class="textFour">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore nihil eos a perferendis natus, earum laborum maxime non at repellendus vero. earum laborum maxime non at repellendus vero.
                </p>
            </div>
            
            <div class="divButton content">
                <a href="" class="textButton">Button</a>
            </div>

        </section>

    </div>
</template>

<style scoped>
.container {
    max-width: 1100px;
    margin: 0 auto;
}
.container .main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 1100px;
    margin: -200px 0 50px;
}
.container .main .content {
    margin: 5px 0;
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
    font-size: 60px;
    font-family: 'Inter';
    color: #fff;
}

.container .main .textThird {
    margin: 0;
    margin: -10px 0 0;
    font-size: 60px;
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
    margin-top: 50px;
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