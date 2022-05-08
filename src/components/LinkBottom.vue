<template>
    <div class="container">

            <ul class="bottom-container left">
                <li><a href="https://www.linkedin.com/in/romain-demeure-a2a18b215/"><LinkedinIcon class="icon"/></a></li>
                <li><a href="https://github.com/romaindemeure"><GithubIcon class="icon"/></a></li>
                <li><a href="https://www.instagram.com/romain.dme/?hl=fr"><InstagramIcon class="icon"/></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100010117632884"><FacebookIcon class="icon"/></a></li>
            </ul>

            <ul class="bottom-container right">
                <li><a href="#">demeureromain4@gmail.com</a></li>
            </ul>

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

.bottom-container {
    position: fixed;
    bottom: 0;
    padding: 0;
    margin: auto;
    list-style-type: none;
}

.left {
    left: 3rem;
}

.right {
    right: 3rem;
}

ul li a {
    color: #fff;
    text-decoration: none;
}

ul li {
    text-align: center;
    margin: 20px 0;
}

ul::after {
    content: '';
    display: block;
    height: 100px;
    width: 1px;
    background-color: #fff;
    margin: auto;
}

ul.right li:first-of-type a {
    writing-mode: vertical-lr;
}
ul.right li:first-of-type a:hover, .icon:hover {
    color: #64FFDA;
}
.icon {
    font-size: 18px;
}

}



</style>

<script setup lang="ts">
import GithubIcon from '~icons/ri/github-line'
import LinkedinIcon from '~icons/ri/linkedin-line'
import InstagramIcon from '~icons/ri/instagram-line'
import FacebookIcon from '~icons/ri/facebook-line'
</script>