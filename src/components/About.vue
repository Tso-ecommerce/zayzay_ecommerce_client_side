<template>

    <div class="container d-grid ">
        <h1 class="justify-content-start">About</h1>
        
        <div class="content">
            <img src="../assets/logo.png" alt="aboutImage" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ad molestias nisi suscipit labore! A, nemo saepe quaerat, architecto officia exercitationem sed placeat dolor quis nihil repudiandae illo obcaecati repellendus.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur consectetur enim quidem doloribus at velit incidunt esse sed ipsa distinctio impedit ab, perspiciatis totam quisquam ex sequi, laudantium provident voluptate.
            </p>
        </div>

        <div class="callSection">
            <p>
                <icon :icon="['fas' , 'phone' ]"/>
                Call Us Now
            </p>
            <a href="tel:09783742007">09783742007</a>
        </div>

        <div class="location">
            <p>
                <icon :icon="['fas' , 'location' ]"/>
                Our Location
            </p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488799.886774544!2d95.60146599646639!3d16.838797828743505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19397cfcab4ad%3A0x197b1c17fcfead6e!2sOTAS!5e0!3m2!1sen!2smm!4v1662350122844!5m2!1sen!2smm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div class="footer">

            <p>
                <icon :icon="['fas' , 'mobile-phone' ]"/>
                Find Us On
            </p>
            <icon :icon="['fab' , 'facebook' ]"/>
            <icon :icon="['fab' , 'telegram' ]"/>

        </div>

        <div class="">
            <p>&copy; 2022 eCommerce, Co.Ltd &reg;</p>
            <p>
                Make with 
                    <icon :icon="['far' , 'heart' ]"/>
                By OTAS
            </p>
        </div>

        
    </div>


</template>

<script>
export default {

}
</script>

<style>

</style>