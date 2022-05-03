<template>
    <div class="container">
        <main class="main">

            <section>
                <div class="box">
                    <h1 class="text myNameIs">Salut, mon nom est</h1>
                </div>

                <div class="box">
                    <h2 class="text me">Demeure Romain</h2>
                </div>

                <div class="box">
                    <h3 class="text iBuild">Je créer des choses sur le web</h3>
                </div>

                <div class="box boxText">
                    <p class="text description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, repellendus aspernatur. Dicta explicabo error quaerat? Facere omnis, excepturi hic molestiae aperiam laborum doloremque quo eveniet eligendi amet officia neque illo.</p>
                </div>

                <div class="box boxButton">
                    <a href="https://github.com/romaindemeure" class="text button">Mon GitHub</a>
                </div>
            </section>

        </main>
    </div>
</template>

<style scoped>
/* Creation de notre estpace de travail pour travailler au milieu de notre page */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 100px;
}

/* Creation de la flexbox colum center  */
.container .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 800px;
}

/* Reset de nos padding et margin  */
.container .main .box .text {
    padding: 0;
    margin: 0;
}

.container .main .box .myNameIs {
    color: #64FFDA;
    font-size: 16px;
}

.container .main .box .me {
    font-size: 60px;
}

.container .main .box .iBuild {
    font-size: 50px;
    color: #CCD6F6;
}

.container .main .box .description {
    font-size: 14px;
    color: #CCD6F6;
    max-width: 540px;
}
.container .main .boxButton {
    padding-top: 40px;
}

.container .main .boxText {
    padding: 20px 0;
}
.container .main .box .button {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 15px 30px;
    cursor: pointer;
}

.container .main .box .button:hover {
    background-color: #64FFDA;
    color: #0A192F;
    transition: color, background-color 0.5s;
}

</style>

<script setup lang="ts">

</script>