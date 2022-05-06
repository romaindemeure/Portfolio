<template>
    <header class="container">

        <nav class="topbar">

            <div class="logo">
                <a href="" class="navLogo">Logo</a>
            </div>

            <div class="menu">
                <router-link to="" class="menuItem"><span class="color">01.</span>A Propos</router-link>
                <router-link to="" class="menuItem"><span class="color">02.</span>Créations</router-link>
                <router-link to="" class="menuItem"><span class="color">03.</span>Formations</router-link>
                <router-link to="" class="menuItem"><span class="color">04.</span>Contact</router-link>
                <router-link to="" class="menuItem CV">Mon CV</router-link>
            </div>

        </nav>

    </header>
</template>

<style scoped>

.container .topbar {
    padding: 20px 0;
    font-size: 14px;
    text-align: center;
}
.container .topbar .menu .menuItem {
    display: inline-block;
    margin: 0 15px;
}

@media only screen and (min-width: 800px) {
    .container .topbar {
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
    .container .topbar .logo .navLogo {
        color: white;
    }
    .container .topbar .menu .menuItem {
        padding: 0 10px;
        font-family: 'Fira code';
        font-weight: 500;
        color: white;
    }
    .container .topbar .menu .menuItem:hover {
        color: #64FFDA;
        cursor: pointer;
    }
    .container .topbar .menu .CV {
        color: #64FFDA;
        border: solid 1px #64FFDA;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        margin-left: 10px;
    }
    .container .topbar .menu .CV:hover {
        background-color: #64FFDA;
        color: #0A192F;
        transition: color, background-color 0.5s;
    }
    .container .topbar .menu .color {
        color: #64FFDA;
        margin-right: 2px;
    } 
    .navText {
        flex-direction: row;
    }
    
}

</style>

<script setup lang="ts">

</script>