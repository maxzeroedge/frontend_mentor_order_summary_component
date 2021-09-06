<main class="main-container">
    <section class="content-container">
        <div class="title-image" style="background-image: url('images/illustration-hero.svg')"></div>
        <div class="summary-container">
            <h1>Order Summary</h1>
            <div class="summary-text">
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </div>
            <div class="plan-setting">
                <div class="music-icon" style="background-image: url('images/icon-music.svg')"></div>
                <div class="plan-detail">
                    <h4>Annual Plan</h4>
                    <p>$59.99/year</p>
                </div>
                <div class="change-btn btn">
                    Change
                </div>
            </div>
            <div class="action-container">
                <div class="submit-btn btn">
                    Proceed to Payment
                </div>
                <div class="cancel-btn btn">
                    Cancel Order
                </div>
            </div>
        </div>
    </section>
</main>

<style type="text/sass">
    $primary-color: hsl(245, 75%, 52%)


    .main-container
        width: 100vw
        height: 100vh
        display: grid
        justify-content: center
        align-content: center
        background-image: url('images/pattern-background-desktop.svg')
        background-repeat: no-repeat
        background-size: 100% 50%
        .content-container
            width: 450px
            height: 100vh
            max-height: 700px
            display: grid
            grid-template-rows: 11fr 24fr //220:480
            border-radius: 20px
            overflow: hidden
            background-color: white
            justify-self: center
            align-self: center
            .title-image
                background-size: cover
            .summary-container
                display: grid
                justify-content: center
                align-content: space-around
                padding: 0 50px
                text-align: center
                h1
                    padding: 0
                    margin: 0
                .summary-text
                    color: hsl(224, 23%, 55%)
                .btn
                    cursor: pointer
                    font-size: 90%
                    font-weight: bold
                .plan-setting
                    display: flex
                    justify-content: space-around
                    align-content: center
                    border-radius: 16px
                    background-color: hsl(225, 100%, 98%)
                    padding: 16px
                    .music-icon
                        width: 50px
                        height: 50px
                        background-size: cover
                    .plan-detail
                        display: grid
                        align-content: center
                        h4, p
                            padding: 0
                            margin: 0
                        p
                            color: hsl(224, 23%, 55%)
                    .change-btn
                        color: hsl(245, 75%, 52%)
                        display: grid
                        align-items: center
                .action-container
                    .submit-btn
                        background-color: hsl(245, 75%, 52%)
                        color: white
                        padding: 16px
                        border-radius: 16px
                        box-shadow: 0px 16px 20px 2px hsla(245, 75%, 52%, 20%)
                        margin-bottom: 25px
                        

    @media only screen and (max-width: 500px)
        .main-container
            .content-container
                width: 90%
                height: min(600px, 100vh)
                max-height: min(600px, 100vh)
                .summary-container
                    padding: 0 20px
</style>