<template>
    <div class="contact-form-section pb-100">
        <div class="container">
            <div class="contact-form-box">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-map contact-form-item">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1611822084496!5m2!1sen!2sbd"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-form-item desk-pad-left-40">
                            <div class="section-title text-start section-title-left">
                                <h2>Let's Get In Touch!</h2>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit</p>
                            </div>
                            <form class="contact-form">
                                <div class="form-group mb-20">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Your Name*" />
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="email" id="email" class="form-control" placeholder="Your Email*" />
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone*" />
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="subject" id="subject" class="form-control" placeholder="Your Subject*" />
                                </div>
                                <div class="form-group mb-20">
                                    <textarea name="message" class="form-control" id="message" rows="3" placeholder="Your Question*"></textarea>
                                </div>
                                <div class="input-checkbox mb-20">
                                    <input type="checkbox" id="contact1">
                                    <label for="contact1">
                                        Accept 
                                        <router-link to="/terms-of-service">Terms of Service</router-link> 
                                        and 
                                        <router-link to="/privacy-policy">Privacy Policy</router-link>
                                    </label>
                                </div>
                                <div class="form-button">
                                    <button class="btn main-btn full-width" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm'
}
</script>