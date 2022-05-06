<template>
    <div class="container">

        <div class="left">

            <div class="divEmail">
                <a href="https://www.linkedin.com/in/romain-demeure-a2a18b215/" class="leftEmail"><img class="svg" src="/src/assets/svg/linkedin.svg" alt=""></a>
                <a href="https://github.com/romaindemeure" class="leftEmail"><img class="svg" src="/src/assets/svg/github.svg" alt=""></a>
                <a href="https://www.instagram.com/romain.dme/?hl=fr" class="leftEmail"><img class="svg" src="/src/assets/svg/instagram.svg" alt=""></a>
                <a href="https://www.facebook.com/profile.php?id=100010117632884" class="leftEmail"><img class="svg" src="/src/assets/svg/facebook.svg" alt=""></a>
            </div>

            <div class="whiteLine">

            </div>
            
        </div>

    </div>
</template>

<style scoped>

.container {
    display: none;
}

@media only screen and (min-width: 800px) {
    .container {
        display: block;
    }
    .container .left {
        width: 40px;
        height: 350px;
        position: fixed;
        bottom: 0;
        right: auto;
        left: 40px;
        z-index: 10;
    }

    .svg {
        fill: white;
        height: 20px;
        width: 20px;
        margin: 10px 5px;
        text-align: center;
    }

    .svg:hover {
        color: red;
    }

    .whiteLine {
        display: block;
        width: 1px;
        background: #fff;
        height: 1000px;
        margin: auto;
        position: relative;
        left: -6px;
    }
}



</style>

<script setup lang="ts">

</script>