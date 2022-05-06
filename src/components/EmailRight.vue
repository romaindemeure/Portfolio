<template>
    <div class="container">

        <div class="right">
            <div class="divEmail">
                <a href="mailto:demeureromain4@gmail.com" class="rightEmail">demeureromain4@gmail.com</a>
            </div>
            <div  class="whiteLine">

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
    .container .right {
        width: 40px;
        height: 350px;
        position: fixed;
        bottom: 0;
        left: auto;
        right: 40px;
        z-index: 10;
    }

    .container .right .divEmail {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .container .right .divEmail .rightEmail {
        position: relative;
        transform: rotate(90deg);
        color: #fff;
        letter-spacing: 1.5px;
        line-height: 80px;
    }
    .whiteLine {
        display: block;
        width: 1px;
        background: #fff;
        height: 1000px;
        margin: auto;
        position: relative;
        left: -1px;
        top: 100px;
    }
}



</style>

<script setup lang="ts">

</script>