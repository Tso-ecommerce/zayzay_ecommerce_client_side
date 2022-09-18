<template>

    <div class="container">

        <h1 class="d-flex justify-content-start">About</h1>
        
        <div class="content sect">
            <!-- <img src="../assets/logo.png" alt="aboutImage" /> -->
            <p class="about-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad molestias nisi suscipit labore! A, nemo saepe quaerat, architecto officia exercitationem sed placeat dolor quis nihil repudiandae illo obcaecati repellendus.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur consectetur enim quidem doloribus at velit incidunt esse sed ipsa distinctio impedit ab, perspiciatis totam quisquam ex sequi, laudantium provident voluptate.
            </p>
        </div>

        <div class="call-section sect">
            <p class="sect-header">
                <icon :icon="['fas' , 'phone' ]"/>
                Call Us Now
            </p>
            <a href="tel:09420091093" class="important-links">09420091093</a>
        </div>

        <div class="location sect">
            <p class="sect-header">
                <icon :icon="['fas' , 'location' ]"/>
                Our Location
            </p>
            <iframe 
               class="d-flex justify-content-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488716.7507469616!2d95.62830164999997!3d16.870966100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19397cfcab4ad%3A0x197b1c17fcfead6e!2sOTAS!5e0!3m2!1sen!2smm!4v1662428644574!5m2!1sen!2smm" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div class="contact sect">

            <p class="sect-header">
                <icon :icon="['fas' , 'mobile-phone' ]"/>
                Find Us On
            </p>
            <icon class="social" :icon="['fab' , 'facebook' ]"/>
            <icon class="social" :icon="['fab' , 'telegram' ]"/>

        </div>

        <div class="about-footer sect">
            <p>&copy; 2022 eCommerce, Co.Ltd &reg;</p>
            <p>
                Make with 
                    <icon class="heart" :icon="['fas' , 'heart' ]"/>
                By 
                <a href="#" class="important-links">OTAS</a>
            </p>
        </div>

        
    </div>


</template>

<script>
export default {

}
</script>

<style>
    /* about commom section */
    .sect{
        margin: 1.5rem;
        padding: 1.5rem;
    }

    .sect-header{
        font-size: 20px;
    }
    /* about commom section */


    .about-content{
        text-align: justify;
    }

    .important-links{
        text-decoration: none;
    }
    
    /* Icon Styles */
    .social{
        width: 3rem;
        height: 4rem;
        border-radius: 50%;
        color: #000;
        font-size: 2rem;

        padding: 0.8rem;
    }

    .heart{
        color: red;
    }
    /* Icon Styles */    

</style>