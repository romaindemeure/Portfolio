<template>
    <div class="container">

        <div class="left">

            <div class="divEmail">
                
                <a href="https://www.linkedin.com/in/romain-demeure-a2a18b215/" class="leftEmail"><LinkedinIcon class="icon"/></a>
                <a href="https://github.com/romaindemeure" class="leftEmail"><GithubIcon class="icon"/></a>
                <a href="https://www.instagram.com/romain.dme/?hl=fr" class="leftEmail"><InstagramIcon class="icon"/></a>
                <a href="https://www.facebook.com/profile.php?id=100010117632884" class="leftEmail"><FacebookIcon class="icon"/></a>
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

@media only screen and (min-width: 1000px) {
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

    .whiteLine {
        display: block;
        width: 1px;
        background: #fff;
        height: 1000px;
        margin: auto;
        position: relative;
        left: -6px;
    }

    .icon {
        display: block;
        font-size: 20px;
        margin: 20px 0;
    }
    .icon:hover {
        color: #64FFDA;
    }
}



</style>

<script setup lang="ts">
import GithubIcon from '~icons/ri/github-line'
import LinkedinIcon from '~icons/ri/linkedin-line'
import InstagramIcon from '~icons/ri/instagram-line'
import FacebookIcon from '~icons/ri/facebook-line'
</script>