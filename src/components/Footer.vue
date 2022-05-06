<template>
    <div class="container">
        <main class="footer">
            <section class="section">

                <div class="main">
                    <h1 class="text">Inspired by Brittany Chiang and created by Romain Demeure</h1>
                </div>

            </section>
        </main>
    </div>
</template>

<style scoped>

.container {
    padding: 0 50px;
    margin-top: 200px;
}

.container .footer .section .main {
    text-align: center;
}

.container .footer .section .main .text {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #9DA7C5;
}

@media only screen and (min-width: 900px)  {
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 100px;
    margin-top: 400px;
}

.container .footer .section .main .text {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #9DA7C5;
}

}


</style>

<script setup lang="ts">

</script>