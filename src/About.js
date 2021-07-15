import React from "react";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import { Fade } from "react-slideshow-image";
function About() {
    const images = [slide1, slide2];
    return (
        <div>
            <Fade>
                {images.map((each, index) => (
                    <div className="w-full h-96 overflow-hidden">
                        <img
                            key={index}
                            alt={`asdfasdfds${index}`}
                            style={{ width: "100%" }}
                            src={each}
                        />
                    </div>
                ))}
            </Fade>
            <div class="m-4 border rounded">
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    <div class="">
                        <div
                            class="
                    h-full
                    flex
                    justify-center
                    items-center
                    bg-blue-300
                "
                        >
                            image
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div class="p-5">
                        <p class="">
                            Hi! I’m Binny Choudhry, your plate manager.​ ​ I’m
                            here to help you find your most optimal diet
                            solutions to allow you to enjoy your life with the
                            food that helps you achieve your body goals.​ ​
                            Instead of just focusing on “losing weight”, I aim
                            to help you improve your overall health and wellness
                            by focusing on fitness and lifestyle improvement.​
                        </p>
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    <div class="p-5">
                        <p class="">
                            For so long we have been taught to peruse diet with
                            an aim to lose weight at all cost. It has become an
                            obsession for all and is passed on as an idea that
                            one should look a certain way in order to be
                            respected. But in achieving these society-enforced
                            goals, we lose ourselves. The pursuit of losing
                            weight at all cost takes away the joy of eating
                            food.​ ​ Hence, our focus is not to make you lose
                            weight at all cost. Our focus is to treat help you
                            achieve your fitness goals in a way that you enjoy
                            what you do, while eating the most enrich food
                            possible. Our nutrition services gives you exactly
                            what you want, which is to learn how and what to eat
                            to improve digestive health and maximize quality of
                            life. ​
                        </p>
                    </div>
                    <div class="">
                        <div
                            class="
                    h-full
                    flex
                    justify-center
                    items-center
                    bg-blue-300
                "
                        >
                            image
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    <div class="">
                        <div
                            class="
                    h-full
                    flex
                    justify-center
                    items-center
                    bg-blue-300
                "
                        >
                            image
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div class="p-5">
                        <p class="">
                            I started My Plate Manager in 2016 while I was
                            working as a Trainee Nutritionist at FitBites. It
                            started out as a place to share my food and healthy
                            recipes with friends, family and customers. However,
                            it was not meeting my goals of sharing my knowledge
                            with the world. Hence, I attended YMCA’s Nutrition
                            and Dietetics where I discovered my passion for
                            Health and Wellness. ​ ​ Ever since then My Plate
                            Manager has flourished into a nutrition hub, helping
                            clients rejuvenate their body.​ ​ With personalized
                            nutrition and lifestyle recommendations, ​you can
                            achieve your body goals without giving up any of
                            your favorite foods.
                        </p>
                    </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1">
                    <div class="p-5">
                        <p class="">
                            2016-18 – Trainee Nutritionist at FitBites​ ​ 2016 –
                            Founded My Plate Manager​ ​ 2017 – YMCA ​ ​ ​
                        </p>
                    </div>
                    <div class="">
                        <div
                            class="
                    h-full
                    flex
                    justify-center
                    items-center
                    bg-blue-300
                "
                        >
                            image
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
