<template>
    <div class="footer bg-primary py-20">
        <div class="container mx-auto">
        <div class="flex flex-col md:flex-row">
            <div class="w-full lg:w-1/3">
                <div class="footer-logo mb-8">
                    <a href="index.html"><img src="@/assets/logo.png" alt="Logo"></a>
                </div>
                <div class="footer-content text-white mb-10 w-52">
                    <p class="text-sm font-light">
                        Suite 214 Christman House
                        2 Kofi Annan Street
                        Airport Residential Area - Accra
                    </p>
                    <p class="email text-sm font-light my-5">info@africaethicsinstitute.org</p>
                    <p class="phone text-sm font-light my-5">+233 24 423 8306</p>
                </div>
            </div>
            <div class="w-1/2 md:w-1/3">
                <p class="font-light uppercase text-white text-base pb-5 w-40">Explore</p>
                <ul class="list-items font-light">
                    <li class="item">History</li>
                    <li class="item">Who we are</li>
                    <li class="item">What we do</li>
                    <li class="item">Research</li>
                    <li class="item">Publications</li>
                </ul>
            </div>
            <!-- <div class="w-full md:w-1/3">
                <p class="font-light uppercase text-white text-base pb-5 w-40">Contact Us</p>
                <form method="POST" class="contact-form">
                    <input type="text" name="name" id="name" placeholder="Full name">
                    <input type="email" name="email" id="email" placeholder="Email">
                    <input type="text" name="subject" id="subject" placeholder="Subject">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </form>
            </div> -->
        </div>
        <div class="mt-10">
            <div class="footer-copy text-center text-white">
                <p>&copy; 2020 <a href="https://www.facebook.com/hoangpham.1999">Africa Ethnics Institute</a>. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    /* background: url("../assets/img/footer-background.png") no-repeat; */
    background-size: 100% 650px;
    background-position: top;
}

.list-items {
    list-style: none;
    padding: 0;
}

.item {
    padding: 8px 0;
    color: white;
    text-align: left;
    font-size: 16px;
}

.item:hover{
    cursor: pointer;
}

input{
    width: 100%;
    padding: 10px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background: #F2F2F2;
}

textarea{
    width: 100%;
    padding: 10px 20px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background: #F2F2F2;
    height: 120px;
}

@media screen and (max-width: 768px) {
    .footer {
        /* background: url("../assets/img/footer-background.png") no-repeat; */
        background-size: cover;
        background-position: center;
    }
}
</style>