<template>
    <header class="container">

        <nav class="topbar">

            <div class="logo">
                <a href="" class="navLogo"><IconLogo class="icons"/></a>
            </div>

            <div class="menu">
                <a href="#aboutPage" class="menuItem"><span class="color">01.</span>À Propos</a>
                <a href="#personalProjectsPage" class="menuItem"><span class="color">02.</span>Créations</a>
                <a href="#certificationPage" class="menuItem"><span class="color">03.</span>Formations</a>
                <a href="#contactPage" class="menuItem"><span class="color">04.</span>Contact</a>
                <a target="_blank" href="https://www.dropbox.com/s/puol9uhb26urj0u/Cv%20demeure%20romain.pdf?raw=1" class="CV menuItem">Mon CV</a>
                
            </div>

            <div class="divCV">
                <a href=""  class="menuItem CV">Mon CV</a>
            </div>

        </nav>

    </header>
</template>

<style scoped>

.container .topbar {
    padding: 20px 0;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container .topbar .logo {
    margin-bottom: 30px;
}

.container .topbar .divCV {
    margin-top: 30px;
}
.container .topbar .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container .topbar .icons {
    font-size: 35px;
    color: #64FFDA;
}

.container .topbar .menu .menuItem {
    display: inline-block;
    margin: 0 15px;
}

.container .topbar .menu .CV {
    display: none;
}
.container .topbar .menu .color {
    color: #64FFDA;
    margin-right: 2px;
} 
.container .topbar .divCV .CV {
    color: #64FFDA;
    border: solid 1px #64FFDA;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.container .topbar .divCV .CV:hover {
    background-color: #64FFDA;
    color: #0A192F;
    transition: color, background-color 0.5s;
}
.container .topbar .menu .menuItem:hover {
    color: #64FFDA;
    cursor: pointer;
}

@media only screen and (min-width: 900px) {
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

    .container .topbar .divCV {
        display: none;
    }
    .container .topbar .logo {
        margin-bottom: 0;
    }
    .container .topbar .menu {
        display: block;
    }

    .container .topbar .logo .navLogo {
        color: white;
    }

    .container .topbar .menu .CV {
        display: inline-block;
    }
    .container .topbar .menu .menuItem {
        padding: 0 10px;
        font-family: 'Fira code';
        color: white;
    }

    .navText {
        flex-direction: row;
    }

    .container .topbar .menu .CV {
        color: #64FFDA;
        border: solid 1px #64FFDA;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        margin-left: 10px;
    }

    .container .topbar .menu .menuItem:hover {
        color: #64FFDA;
        cursor: pointer;
    }

    .container .topbar .menu .CV:hover {
        background-color: #64FFDA;
        color: #0A192F;
        cursor: pointer;
        transition: color, background-color 0.5s;
    }  
}

</style>

<script setup lang="ts">
import IconLogo from '~icons/my-logo/settings'
</script>
