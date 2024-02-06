<template>
    <div class="navbar bg-primary py-2">
        <div class="container flex mx-auto justify-between">
            <!-- logo -->
            <div class="logo">
                <img src="@/assets/logo.png" alt="logo">
            </div>
            <!-- nav items -->
            <ul class="nav-items flex">
                <li class="link">
                    <a href="#home">Home</a>
                </li>
                <li class="link">
                    <a href="#about">About</a>
                </li>
                <li class="link">
                    <a href="#board">Board</a>
                </li>
                <li class="link">
                    <a href="#contact">Contact Us</a>
                </li>
            </ul>
            <!-- contact btn -->
            <button class="btn border p-3 my-2 border-white rounded-md w-32 text-white hidden lg:block">Contact Us</button>

            <!-- mobile nav -->
            <div class="mobile-nav hidden my-auto" @click="toggleDrawer">
                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-drawer">
        <div class="drawer-content">
            <div class="nav-overlay" @click="toggleDrawer"></div>
            <div class="close m-auto absolute" @click="toggleDrawer">
                <!-- close svg -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="drawer-item mb-5">
                <a href="#home">Home</a>
            </div>
            <div class="drawer-item mb-5">
                <a href="#about">About</a>
            </div>
            <div class="drawer-item mb-5">
                <a href="#board">Board</a>
            </div>
            <div class="drawer-item mb-5">
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        toggleDrawer() {
            const drawer = document.querySelector('.nav-drawer');
            // prevent scrolling when drawer is open
            document.body.classList.toggle('overflow-hidden');

            drawer.classList.toggle('active', !drawer.classList.contains('active'));
        }
    }

}
</script>

<style scoped>
.navbar {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link {
    min-width: 110px;
    padding: 18px 20px;
    color: white;
    text-align: center;
}

.nav-items{
    background: rgba(255, 255, 255, 0.1);
    margin: auto;
    border-radius: 10px;
    /* width: 600px; */
}

.link:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    cursor: pointer;
}

/* mobile hamburger */
.mobile-nav {
    display: none;
}

.active {
    display: block !important;
}

.hamburger {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.line {
    width: 100%;
    height: 3px;
    background: white;
}

.nav-overlay{
    position: fixed;
    top: 0;
    left: -150px;
    width: 150px;
    height: 100%;
    background: rgba(255, 0, 0, 0);
    z-index: 1;
}

.close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    left: -50px;
    z-index: 20;
}

.nav-drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: none;
}

.drawer-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-30%, -50%);
    width: 100%;
    max-width: 500px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    height: 100vh;
}

/* animate navbar */
.navbar {
    transition: all 0.5s ease;
}

@media screen and (max-width: 768px) {
    .nav-items {
        display: none;
    }

    .mobile-nav {
        display: block;
    }

    .hamburger {
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .line {
        width: 100%;
        height: 3px;
        background: white;
    }

    .btn{
        display: none;
    }

    /* .nav-drawer {
        display: block;
    } */

    .drawer-item {
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }
}
</style>