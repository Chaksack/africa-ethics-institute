<template>
  <div class="card p-7 rounded-md">
    <div class="card-img w-full text-center">
      <img src="@/assets/blog.png" alt="blog 1" class="m-auto" />
    </div>
    <div
      class="
        card-content
        w-full
        rounded-b-md
        bg-dark
        text-xs
        font-light
        m-auto
        py-8
        px-5
      "
    >
      <h1 class="card-title text-white text-base font-normal">
        {{ title }}
      </h1>
      <div class="card-info text-sm text-white">
        {{ info }}
      </div>
      <div class="btn bg-white text-primary p-2 mt-5 w-36 rounded-md">
        Learn More
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Blog",
    props: {
        title: String,
        info: String,
        img: String,
    },
};
</script>

<style>
</style>