import React from "react";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import { Fade } from "react-slideshow-image";
function Contact() {
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
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="">
                    <h1 class="text-4xl text-center italic py-5 font-bold">
                        Still have questions?
                    </h1>
                    <p class="text-center py-5">
                        Read what our clients have to say about our services or
                        contact us
                    </p>
                    <div class="text-center flex bg-yellow-200 flex-wrap">
                        <div class="m-2">
                            <p class="text-lg capitalize font-bold py-3">
                                i am so gratefull having her in my life
                            </p>
                            <p class="text-sm">
                                dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and
                                scrambled it to make a
                            </p>
                        </div>
                        <div class="m-2">
                            <p class="text-lg capitalize font-bold py-3">
                                i am so gratefull having her in my life
                            </p>
                            <p class="text-sm">
                                dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and
                                scrambled it to make a
                            </p>
                        </div>
                        <div class="m-2">
                            <p class="text-lg capitalize font-bold py-3">
                                i am so gratefull having her in my life
                            </p>
                            <p class="text-sm">
                                dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and
                                scrambled it to make a
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-yellow-200 p-5">
                    <p class="text-4xl capitalize py-3">office</p>
                    <p class="text-2xl capitalize py-3">phone</p>
                    <p class="text-2xl capitalize py-3">email</p>
                    <p class="text-2xl capitalize py-3">location</p>
                    <p class="text-xl capitalize py-3">something</p>
                    <p class="text-xl capitalize py-3">something</p>
                    <p class="text-xl capitalize py-3">something</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
