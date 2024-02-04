<template>
  <Navbar />
  <Header />
  <div class="section-2 py-24">
    <div class="section-1 text-center flex flex-col md:flex-row container mx-auto mb-24">
      <h1 class="text-xl text-white font-semibold w-full md:w-1/2 my-5">Our History</h1>
      <div class="text-sm text-white w-full md:w-1/2 shape p-8 md:text-base">
        Africa Ethics Institute is a non-for-profit organization founded in 2022.
      </div>
    </div>
    <div class="py-24 bg-white sec-bg container">
      <div class="w-full md:w-1/2 text-center mx-auto">
        <h1 class="title text-lg font-semibold capitalize mb-5">Who we are</h1>
        <p class="info md:text-base font-light">
          We teach young and future generations to be ethically minded in carrying out
          their roles in society.
        </p>
      </div>

      <div class="my-24 text-center">
        <h1 class="title text-lg font-semibold capitalize text-center mb-5">
          What we do
        </h1>

        <div class="mx-auto capitalize mt-2 md:w-3/4">
          <p class="info md:text-base font-light">
            At Africa Ethics Institute, we use the power of education to teach young and
            future generation to be ethically minded in carrying out their roles in
            society. This involves working with like-minded institutions to incorporate
            ethics in the educational curriculum of primary, secondary and tertiary
            institutions of learning. We believe that when ethics is introduced at an
            early stage of a person's life and professional career, that it will manifest
            in their behavior and attitude.
          </p>
        </div>
      </div>

      <div class="illustration mx-auto text-center flex justify-center py-24">
        <img src="@/assets/services.svg" alt="" />
      </div>
    </div>

    <div class="p-14 sec-bg-2 rounded-md bg-black">
      <h1 class="title text-center text-lg font-semibold text-white">Meet the board</h1>
      <div class="leadership bg-white rounded-md mx-auto p-8 my-10">
        <h1 class="text-lg font-semibold text-center">Vetting in progress</h1>
      </div>
      <!-- <h1 class="title text-center text-lg font-semibold text-white">
          Aims & Objectives
        </h1>
        <p class="info text-sm font-light text-center my-8 md:w-1/2 mx-auto text-white">Our objective is to help bring awareness and educate the youth of Africa on the subject of ethics. We educate and empower young and future generations across Africa to be efficient and effective custodians of resources for the greater good. We believe that when ethics is introduced at an early stage of a person’s life and professional career, there is a strong likelihood that the behavior and attitude of the person is exhibited in how they carry out activities and responsibilities in society.</p>
        <div class="a-o flex mx-auto gap-6 justify-center md:flex-row flex-col my-24">
          <div class="card p-7 bg-dark rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/mission.png" alt="mission" class="m-auto">
            </div>
            <div class="card-content text-xs font-light m-auto w-48 mt-5">
              <p class="text-center text-white">Develop and roll out early childhood curriculum in ethics geared towards primary school children.</p>
            </div>
          </div> -->

      <!-- card two -->
      <!-- <div class="card p-7 bg-secondary rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/mission.png" alt="mission" class="m-auto">
            </div>
            <div class="card-content text-xs font-light m-auto w-48 mt-5">
              <p class="text-center text-white">Develop and roll out early childhood curriculum in ethics geared towards primary school children.</p>
            </div>
          </div>
        </div> -->

      <!-- leadership -->
      <h1 class="title text-center text-lg font-semibold text-white my-16">Leadership</h1>
      <div class="leadership bg-white mx-auto p-8 rounded-md">
        <div
          class="leadership-content flex flex-col md:flex-row gap-6 justify-center my-5"
        >
          <div class="card p-7 rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/larye.png" alt="mission" class="m-auto" />
            </div>
            <div class="card-content text-xs text-center font-light m-auto w-48 mt-5">
              <h1 class="name text-base font-normal mb-2">Isreal Layea</h1>
              <p class="text-black font-semibold text-sm mb-3">Director</p>

              <p class="text-center text-black">Israel@africaethicsinstitute.org</p>
              <div class="socials flex"></div>
            </div>
          </div>

          <!-- card two -->
          <div class="card p-7 rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/joseph.png" alt="mission" class="m-auto" />
            </div>
            <div class="card-content text-xs font-light m-auto w-48 mt-5 text-center">
              <h1 class="name text-base font-normal mb-2">Joseph Atatsi</h1>
              <p class="text-black font-semibold text-sm mb-3">Senior Policy Advisor</p>
              <p class="text-center text-black">joseph@africaethicsinstitute.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- blog -->
    <div class="blog py-16 bg-offwhite rounded-md">
      <h1 class="title text-center text-lg font-medium">Research & Publications</h1>
      <div class="grid cards grid-cols-1 md:grid-cols-3 px-8 gap-5" v-if="research">
        <div v-for="blog in blogs" :key="blog.id">
          <BlogCard :title="blog.title" :info="blog.info" :img="blog.img" />
        </div>
      </div>
      <div class="flex justify-center" v-else>
        <h1 class="title text-center text-md font-semibold mt-10">Coming Soon</h1>
      </div>
    </div>

    <!-- blog -->
    <!-- <div class="blog py-16 my-24 bg-white rounded-md">
        <h1 class="title text-center text-lg font-medium">
          Publications
        </h1>
        <div class="grid cards grid-cols-1 md:grid-cols-3 px-8 gap-5">
          <div v-for="blog in blogs" :key="blog.id">
            <BlogCard :title="blog.title" :info="blog.info" :img="blog.img"/>
          </div>
        </div>
      </div> -->

    <!-- contact form -->
    <div class="contact my-16 container">
      <form method="POST" class="contact-form bg-white rounded-md px-10 py-10 mx-auto">
        <div class="flex flex-col md:flex-row gap-5 my-8">
          <div class="flex-col flex w-full">
            <label for="name" class="font-semibold mb-3">Name</label>
            <input type="text" name="name" id="name" placeholder="Full name" />
          </div>
          <div class="flex flex-col w-full">
            <label for="email" class="font-semibold mb-3">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-5 my-8">
          <div class="flex-col flex w-full">
            <label for="phone" class="font-semibold mb-3">Phone</label>
            <input type="text" name="phone" id="phone" placeholder="Full name" />
          </div>
          <div class="flex flex-col w-full">
            <label for="company" class="font-semibold mb-3">Company</label>
            <input type="company" name="company" id="company" placeholder="Company" />
          </div>
        </div>

        <label for="message" class="font-semibold mb-3">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          class="mb-8"
        ></textarea>
        <div class="btn bg-primary p-4 rounded-md text-white w-52 text-center">
          Send Message
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import BlogCard from "@/components/Blog.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Header,
    BlogCard,
    Footer,
    Navbar,
  },

  data() {
    return {
      title: "Home",
      blogs: [
        {
          title: "Research title",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!",
          img: "@/assets/blog.png",
        },
        {
          title: "Research title",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!",
          img: "@/assets/blog.png",
        },
        {
          title: "Research title",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!",
          img: "@/assets/blog.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-2 {
  background: linear-gradient(180deg, #4e54c8 0%, rgba(143, 148, 251, 0) 169.19%);
}

.leadership {
  max-width: 750px;
}

.card-img img {
  object-fit: cover;
}

.sec-bg {
  border-radius: 652px 0px 0px 0px;
}

.sec-bg-2 {
  background: linear-gradient(180deg, #00b4db -9.05%, rgb(0, 131, 176) 46.87%);
}

.cta {
  max-width: 600px;
}

input {
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #f2f2f2;
}

textarea {
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #f2f2f2;
  height: 120px;
}

.contact-form {
  width: 850px;
}

.shape {
  background: #06ac60;
  border-radius: 200px 0px 100px;
}

@media screen and (max-width: 768px) {
  .contact-form {
    width: 100%;
  }

  .sec-bg {
    border-radius: 200px 0px 0px 0px;
  }
}
</style>
