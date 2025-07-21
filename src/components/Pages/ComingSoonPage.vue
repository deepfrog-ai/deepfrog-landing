<template>
    <div class="coming-soon-section page-bg page-bg-1">
        <div class="container">
            <div class="coming-soon-content coming-soon-content-white">
                <div class="new-counter">
                    <p
                        id="days"
                        class="time align-items-center flex-column d-flex justify-content-center"
                    >
                        {{days}}
                        <span>Days</span>
                    </p>
                    <p
                        id="hours"
                        class="time align-items-center flex-column d-flex justify-content-center"
                    >
                        {{hours}}
                        <span>Hours</span>
                    </p>
                    <p
                        id="minutes"
                        class="time align-items-center flex-column d-flex justify-content-center"
                    >
                        {{minutes}}
                        <span>Minutes</span>
                    </p>
                    <p
                        id="seconds"
                        class="time align-items-center flex-column d-flex justify-content-center"
                    >
                        {{seconds}}
                        <span>Seconds</span>
                    </p>
                </div>
                <div class="coming-soon-details">
                    <h2>Coming Soon</h2>
                    <form class="newsletter-form">
                        <div class="form-group m-0">
                            <input type="text" name="EMAIL" id="emailS" class="form-control" placeholder="Enter Your Email*">
                            <button class="btn main-btn" type="submit">SUBSCRIBE NOW</button>
                        </div>
                    </form>
                    <p>Subscribe our newsletter that we can easily connect you.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComingSoonPage',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    created() { // Turn data into viewable values
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
    },
    methods: {
        commingSoonTime() {
            let endTime = new Date("December 5, 2029 17:00:00 PDT");            
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400);
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>