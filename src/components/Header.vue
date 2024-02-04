<template>
  <div class="banner relative text-right flex place-content-end">
    <img src="@/assets/bg.png" alt="" />
    <div class="content z-50 text-lg md:text-xl font-semibold w-full text-left">
      <h1 class="mb-3 font-light text-xxl">Africa Ethics Institute</h1>
      <h3 class="text-md font-semibold">
        Building ethically minded societies, one person at a time.
      </h3>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.content {
  /* content on left */
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(20%, -50%);
  color: #fff;
  width: 560px;
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
  height: 700px;
  object-fit: contain;
  margin: 0 100px;
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

  .content {
    transform: translate(10%, -50%);
  }
}
</style>
