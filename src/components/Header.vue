<template>
    <header class="container">

        <nav class="nav">

            <div class="logo">
                <a href="" class="navLogo">Logo</a>
            </div>

            <div class="link">
                <router-link to="" class="navText"><span class="color">01.</span>A Propos</router-link>
                <router-link to="" class="navText"><span class="color">02.</span>Créations</router-link>
                <router-link to="" class="navText"><span class="color">03.</span>Formations</router-link>
                <router-link to="" class="navText"><span class="color">04.</span>Contact</router-link>
                <router-link to="" class="navText CV">Mon CV</router-link>
            </div>

        </nav>

    </header>
</template>

<style scoped>

.container .nav {
    background: #0A192F;
    height: 100px;
    width: auto;
    padding: 0 50px;
    /* flexbox */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.container .nav .logo .navLogo {
    color: white;
}
.container .nav .link .navText {
    padding: 0 10px;
    font-family: 'Fira code';
    font-weight: 500;
    color: white;
}
.container .nav .link .navText:hover {
    color: #64FFDA;
    cursor: pointer;
}
.container .nav .boutton .CV {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 10px;
}
.container .nav .link .CV:hover {
    background-color: #64FFDA;
    color: #0A192F;
    transition: color, background-color 0.5s;
}
.container .nav .link .color {
    color: #64FFDA;
    margin-right: 2px;
} 
.navText {
    flex-direction: row;
}

@media only screen and (max-width: 800px) {
    .container .nav {
        background: lightcoral;
        padding: 0;
        display: block;
    }
    
    .container .nav .link .CV {
        color: #64FFDA;
        border: solid 1px #64FFDA;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        margin-left: 0;
    }
    
}

</style>

<script setup lang="ts">

</script>