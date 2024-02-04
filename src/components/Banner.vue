<template>
    <div class="banner relative">
        <img src="@/assets/hero.png" alt="">
        <div class="content z-50 text-lg md:text-xl font-semibold w-full">
            <h1 class="mb-3">Building ethically minded societies. </h1>
            <h3>One person at a time</h3>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    background: rgba(0, 0, 0, 0.5);
}

.banner img {
    width: 100%;
    height: 700px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .banner {
        height: 400px;
    }

    .banner img {
        height: 100%;
    }

    .overlay {
        height: 100%;
    }
}
</style>