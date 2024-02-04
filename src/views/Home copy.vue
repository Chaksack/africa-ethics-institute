<template>
  <Navbar />
  <Banner />
  <div class="section-1 py-24 mt-24 text-center">
    <h1 class="text-lg text-white mb-5">Our History</h1>
    <p class="text-base text-white">Africa Ethics Institute is a non-for-profit organization founded in 2022.</p>
  </div>
  <div class="section-2">
    <div class="mx-auto container py-16">
      <img src="@/assets/actions.png" alt="action in ethics" class="actions">
      
      <div class="cta flex md:h-14 flex-col md:flex-row bg-white rounded-md justify-between items-center my-16">
        <div class="info1 w-full md:w-1/4 bg-primary py-4 items-center flex rounded-md border-white border">
          <h2 class="text-base text-center m-auto text-white">Who we are</h2>
        </div>
        <div class="info2 w-3/4 my-3">
          <h2 class="text-sm text-center">We teach young and future generations to be ethically minded in carrying out their roles in society.</h2>
        </div>
      </div>

      <div class="my-24">
        <h1 class="text-base font-normal text-center bg-primary border border-white p-4 w-48 text-white mx-auto capitalize rounded">What we do</h1>

        <div class="border border-white p-4 mx-auto capitalize rounded mt-8 bg-primary md:w-2/3">
          <p class="info text-sm font-light text-center text-white ">At Africa Ethics Institute, we use the power of education to teach young and future generation to be ethically minded in carrying out their roles in society. This involves working with like-minded institutions to incorporate ethics in the educational curriculum of primary, secondary and tertiary institutions of learning. We believe that when ethics is introduced at an early stage of a person's life and professional career, that it will manifest in their behavior and attitude.</p>
        </div>

        <div class="services">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-16">
            <div class="layout-1">
              <div class="card rounded-md bg-white p-8 mb-8 text-center">
                <div class="icon mb-5">
                  <img src="@/assets/icon-dark.svg" alt="mission" class="m-auto">
                </div>
                <div class="card-title text-base font-normal mb-3">Ethnics Clubs</div>
                <p class="info font-light">After school programs designed to foster discussions and activities on ethics.</p>
              </div>
              <div class="card rounded-md bg-white p-8 mb-8 text-center">
                <div class="icon mb-5">
                  <img src="@/assets/icon-dark.svg" alt="mission" class="m-auto">
                </div>
                <div class="card-title text-base font-normal mb-3">Ethics Certification</div>
                <p class="info font-light">We are working to develop ethics certification standards. We will work with participating primary, secondary and tertiary institutions of learning to work towards achieving certification in ethics.</p>
              </div>
            </div>

            <div class="layout-2 justify-center flex items-center">
              <div class="card rounded-md bg-primary p-8 mb-8 text-white text-center">
                <div class="icon mb-5">
                  <img src="@/assets/icon-white.svg" alt="icon" class="m-auto">
                </div>
                <div class="card-title text-base font-normal mb-3">Curriculum Development and Enhancement</div>
                <p class="info mb-3 font-light">Development and enhancement programs to incorporate ethics into new and existing early childhood education curriculums.</p>
                <p class="info font-light">Development and enhancement programs to incorporate ethics into new and existing secondary and tertiary education curriculums.</p>
              </div>
            </div>

            <div class="layout-3">
              <div class="card rounded-md bg-white p-8 text-center mb-5">
                <div class="icon mb-5">
                  <img src="@/assets/icon-dark.svg" alt="mission" class="m-auto">
                </div>
                <div class="card-title text-base font-normal mb-3">Training</div>
                <p class="info font-light">Train educators</p>
              </div>
              <div class="card rounded-md bg-white p-8 text-center mb-5">
                <div class="icon mb-5">
                  <img src="@/assets/icon-dark.svg" alt="mission" class="m-auto">
                </div>
                <div class="card-title mb-3 text-base font-normal">Africa Ethics Summit & Forum</div>
                <p class="info font-light">Convene students, educators, administrators and other key stakeholders for periodic summits and forums to discuss and share relevant information and topics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-14 bg-white rounded-md">
        <h1 class="title text-center text-base font-medium">
          Aims & Objectives
        </h1>
        <p class="info text-sm font-light text-center text-primary my-8">Our objective is to help bring awareness and educate the youth of Africa on the subject of ethics. We educate and empower young and future generations across Africa to be efficient and effective custodians of resources for the greater good. We believe that when ethics is introduced at an early stage of a person’s life and professional career, there is a strong likelihood that the behavior and attitude of the person is exhibited in how they carry out activities and responsibilities in society.</p>
        <div class="a-o flex mx-auto gap-6 justify-center md:flex-row flex-col">
          <div class="card p-7 bg-primary rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/mission.png" alt="mission" class="m-auto">
            </div>
            <div class="card-content text-xs font-light m-auto w-48 mt-5">
              <p class="text-center text-white">Develop and roll out early childhood curriculum in ethics geared towards primary school children.</p>
            </div>
          </div>

          <!-- card two -->
          <div class="card p-7 bg-secondary rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/mission.png" alt="mission" class="m-auto">
            </div>
            <div class="card-content text-xs font-light m-auto w-48 mt-5">
              <p class="text-center text-white">Develop and roll out early childhood curriculum in ethics geared towards primary school children.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- leadership -->
      <div class="leadership bg-white mx-auto my-24 p-10 rounded-md">
        <h1 class="title text-center text-lg font-medium">
          Leadership
        </h1>
        <div class="leadership-content flex flex-col md:flex-row gap-6 justify-center my-10">
          <div class="card p-7 rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/larye.png" alt="mission" class="m-auto">
            </div>
            <div class="card-content text-xs text-center font-light m-auto w-48 mt-5">
              <h1 class="name text-base font-normal mb-2">Isreal Layea</h1>
              <p class="text-black font-semibold text-sm mb-3">Director</p>
              
              <p class="text-center text-black">Israel@africaethicsinstitute.org</p>
              <div class="socials flex">

              </div>
            </div>
          </div>

          <!-- card two -->
          <div class="card p-7 rounded-md">
            <div class="card-img w-full text-center">
              <img src="@/assets/joseph.png" alt="mission" class="m-auto">
            </div>
            <div class="card-content text-xs font-light m-auto w-48 mt-5 text-center">
              <h1 class="name text-base font-normal mb-2">Joseph Atatsi</h1>
              <p class="text-black font-semibold text-sm mb-3">Senior Policy Advisor</p>
              <p class="text-center text-black">joseph@africaethicsinstitute.org</p>
            </div>
          </div>
        </div>
      </div>

      <!-- blog -->
      <div class="blog py-16 my-24 bg-white rounded-md">
        <h1 class="title text-center text-lg font-medium">
          Research
        </h1>
        <div class="grid cards grid-cols-1 md:grid-cols-3 px-8 gap-5">
          <div v-for="blog in blogs" :key="blog.id">
            <BlogCard :title="blog.title" :info="blog.info" :img="blog.img"/>
          </div>
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
    </div>
  </div>
  <Footer/>
</template>

<script>
import Banner from '@/components/Banner.vue'
import BlogCard from '@/components/Blog.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    BlogCard,
    Footer,
    Navbar
  },

  data() {
    return {
      title: 'Home',
      blogs: [
        {
          title: 'Research title',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!',
          img: '@/assets/blog.png'
        },
        {
          title: 'Research title',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!',
          img: '@/assets/blog.png'
        },
        {
          title: 'Research title',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!',
          img: '@/assets/blog.png'
        },
      ]
    }
  }
}
</script>

<style scoped>
.section-1 {
  background: url('../assets/section1.png') no-repeat center center;
  background-size: cover;
}

.section-2 {
  background: url('../assets/background.png') no-repeat;
  /* 100% background width */
  background-size: cover;
  /* height: 9000px; */
}

.leadership{
  max-width: 750px;
}

.card-img img{
  object-fit: cover;
}
</style>
