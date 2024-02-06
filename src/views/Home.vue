<template>
  <Navbar />
  <Header />
  <div class="section-2 py-24">
    <div
      class="section-1 text-center flex flex-col md:flex-row container mx-auto mb-24"
    >
      <h1 class="text-xl text-white font-semibold w-full md:w-1/2 my-5">
        Our History
      </h1>
      <div class="text-sm text-white w-full md:w-1/2 shape p-8 md:text-base" id="about">
        Africa Ethics Institute is a non-for-profit organization founded in
        2022.
      </div>
    </div>
    <div class="py-24 bg-white sec-bg container mx-auto">
      <div class="w-full md:w-1/2 text-center mx-auto">
        <h1 class="title text-lg font-semibold capitalize mb-5">Who we are</h1>
        <p class="info md:text-base font-light">
          We teach young and future generations to be ethically minded in
          carrying out their roles in society.
        </p>
      </div>

      <div class="my-24 text-center">
        <h1 class="title text-lg font-semibold capitalize text-center mb-5">
          What we do
        </h1>

        <div class="mx-auto capitalize mt-2 md:w-3/4">
          <p class="info md:text-base font-light">
            At Africa Ethics Institute, we use the power of education to teach
            young and future generation to be ethically minded in carrying out
            their roles in society. This involves working with like-minded
            institutions to incorporate ethics in the educational curriculum of
            primary, secondary and tertiary institutions of learning. We believe
            that when ethics is introduced at an early stage of a person's life
            and professional career, that it will manifest in their behavior and
            attitude.
          </p>
        </div>
      </div>

      <div class="illustration mx-auto text-center flex justify-center py-24">
        <img src="@/assets/services.svg" alt="" />
      </div>
    </div>

    <div class="lg:p-14 p-1 sec-bg-2 rounded-md bg-black">
      <h1 class="title text-center text-lg font-semibold text-white">
        Meet the board
      </h1>
      <!-- <div class="leadership bg-white rounded-md mx-auto p-8 my-10">
        <h1 class="text-lg font-semibold text-center">Vetting in progress</h1>
      </div> -->
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
      <!-- <h1 class="title text-center text-lg font-semibold text-white my-16">Leadership</h1> -->
      <div class="bg-white mx-auto lg:p-8 p-1 rounded-md" id="board">
        <div
          class="flex flex-col lg:flex-col justify-center my-5 gap-6"
        >
          <div class="card lg:p-7 p-1 rounded-md w-full lg:flex block">
            <div class="card-img lg:w-1/5 w-full text-center m-auto">
              <img src="@/assets/larye.png" alt="mission" class="m-auto" />
            </div>
            <div
              class="card-content text-xs text-left font-light m-auto w-full lg:w-4/5 mt-5"
            >
              <h1 class="name text-base font-normal mb-2">Isreal Layea</h1>
              <p class="text-black font-semibold text-sm mb-3">Director</p>

              <!-- <p class="text-left text-black">
                Israel@africaethicsinstitute.org
              </p> -->
              <div class="socials">
                Israel Laryea is a broadcaster who’s now ventured into digital
                marketing as the Executive Head of Influencer Africa. He has
                been a well-known face and voice on TV and radio especially in
                Ghana for more than twenty years. He is a CNN African Journalist
                of the Year Award winner and has also had stints with the BBC,
                CNN and other international media houses. Israel is extremely
                passionate about Ghana and is constantly rethinking practical
                solutions to local problems which policies have failed to
                address. He was a moderator of the 2008 presidential and
                vice-presidential debates and is an alumnus of the Blavatnik
                School of Governance, Oxford University (Executive Course on
                Oil, Gas and Mining).
              </div>
            </div>
          </div>

          <!-- card two -->
          <div class="card lg:p-7 p-1 rounded-md w-full lg:flex block">
            <div class="card-img lg:w-1/5 w-full text-center m-auto">
              <img src="@/assets/joseph.png" alt="mission" class="m-auto" />
            </div>
            <div
            class="card-content text-xs text-left font-light m-auto w-full lg:w-4/5 mt-5"
            >
              <h1 class="name text-base font-normal mb-2">Joseph Atatsi</h1>
              <p class="text-black font-semibold text-sm mb-3">
                Senior Policy Advisor
              </p>
              <!-- <p class="text-center text-black">
                joseph@africaethicsinstitute.org
              </p> -->
              <div class="socials">
                Joseph Atatsi is a Regulator with the US Securities and Exchange Commission. He informs policy, conducts examinations and investigations on matters relating to emerging technologies, including cybersecurity, digital assets, regulation technology and technologies impacting the capital markets. He serves as the Co-Chair of the Financial Technology (FinTech) Working Group at the US Securities and Exchange Commission. He is an Adjunct Lecturer of Anti-Money Laundering at the University of Illinois at Chicago in the United States and a Visiting Adjunct Faculty of Anti-Money Laundering at Ashesi University in Ghana, West Africa. His research interests are innovative and emerging technologies, ethics, governance, and anti-money laundering. He holds a Master of Accounting Degree from the Bowling Green State University, Ohio, United States; a Master of Business Administration Degree from the University of Florida, Florida, United States; and a Doctor of Business Administration Degree from the University of Florida, Florida, United States. He is currently pursuing a Master of Laws Degree in Information Systems, Technology and the Law from Edinburgh University in Scotland. He also holds professional certifications in Internal Audit, Fraud Examination and Regulatory Compliance.
              </div>
            </div>
          </div>

          <!-- card two -->
          <div class="card lg:p-7 p-1 rounded-md w-full lg:flex block">
            <div class="card-img lg:w-1/5 w-full text-center m-auto">
              <img src="@/assets/eli.jpeg" alt="mission" class="m-auto" />
            </div>
            <div
            class="card-content text-xs text-left font-light m-auto w-full lg:w-4/5 mt-5"
            >
              <h1 class="name text-base font-normal mb-2">Eli Atatsi</h1>
              <p class="text-black font-semibold text-sm mb-3">
                Director
              </p>
              <!-- <p class="text-center text-black">
                joseph@africaethicsinstitute.org
              </p> -->
              <div class="socials">
                Dr. Eli Atatsi is a Senior Lecturer at the Ho Technical University,  Ho, in the Volta Region of Ghana. She obtained her PhD in Management at Open Universiteit, Heelen, in The Netherlands. She holds  Master of Arts in English from  the University of Education, Winneba and a Commonwealth Master of Business Administration from the Kwame Nkrumah University of Science & Technology, Kumasi, Ghana. Her teaching experience spans almost  three decades. Her research interests are in organizational management, leadership, ethics, citizenship behaviors and team learning
              </div>
            </div>
          </div>

          <div class="card lg:p-7 p-1 rounded-md w-full lg:flex block">
            <div class="card-img lg:w-1/5 w-full text-center m-auto">
              <img src="@/assets/team.jpeg" alt="mission" class="m-auto" />
            </div>
            <div
            class="card-content text-xs text-left font-light m-auto w-full lg:w-4/5 mt-5"
            >
              <h1 class="name text-base font-normal mb-2">Folasade Adekunle</h1>
              <p class="text-black font-semibold text-sm mb-3">
                Director
              </p>
              <!-- <p class="text-center text-black">
                joseph@africaethicsinstitute.org
              </p> -->
              <div class="socials">
                Dr. Folasade Adekunle is the principal of Sayre Language Academy, a promising neighborhood school on the northwest side of Chicago. Her work with teachers around developing high-quality instruction, teacher learning and culturally responsive pedagogy have and continue to positively impact Sayre’s student outcomes. She is committed to securing enriching opportunities that expand the educational experiences of the students she serves. Under her leadership, Sayre was awarded the Chicago Public Education Fund Design Challenge grant award for the innovative design of enriching learning opportunities for African American boys in grades 3-5.  She has co-presented in panel discussions around educational implications of remote learning with Brainpop and the MIT Lifelong Kindergarten project. Sayre was just recently awarded an IB MYP program for their middle school students. Folasade earned her doctorate and masters degrees in education from the University of  Illinois Chicago. Prior to school administration, Dr. Adekunle served as a field coach to first and second year teachers in the AUSL network and as a middle school classroom teacher in the  Belmont -Cragin neighborhood.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- blog -->
    <div class="blog py-16 bg-offwhite rounded-md">
      <h1 class="title text-center text-lg font-medium">
        Research & Publications
      </h1>
      <div
        class="grid cards grid-cols-1 md:grid-cols-3 px-8 gap-5"
        v-if="research"
      >
        <div v-for="blog in blogs" :key="blog.id">
          <BlogCard :title="blog.title" :info="blog.info" :img="blog.img" />
        </div>
      </div>
      <div class="flex justify-center" v-else>
        <h1 class="title text-center text-md font-semibold mt-10">
          Coming Soon
        </h1>
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
    <div class="contact my-16 container mx-auto" id="contact">
      <form
        method="POST"
        class="contact-form bg-white rounded-md px-10 py-10 mx-auto"
      >
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
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Full name"
            />
          </div>
          <div class="flex flex-col w-full">
            <label for="company" class="font-semibold mb-3">Company</label>
            <input
              type="company"
              name="company"
              id="company"
              placeholder="Company"
            />
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
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!",
          img: "@/assets/blog.png",
        },
        {
          title: "Research title",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!",
          img: "@/assets/blog.png",
        },
        {
          title: "Research title",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil debitis nulla totam iste inventore aspernatur eum quae eaque iusto!",
          img: "@/assets/blog.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-2 {
  background: linear-gradient(
    180deg,
    #4e54c8 0%,
    rgba(143, 148, 251, 0) 169.19%
  );
}

.leadership {
  max-width: 750px;
}

/* .card-img img {
  object-fit: cover;
} */

.card-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
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
