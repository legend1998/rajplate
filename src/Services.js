import React from "react";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import { Fade } from "react-slideshow-image";
function Services() {
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

            <div class="flex justify-center flex-wrap">
                <div class="p-2 m-2 shadow-md rounded border">
                    <div
                        class="
                w-72
                m-2
                shadow-md
                backimage
                flex
                justify-center
                items-center
                rounded
            "
                    >
                        <span class="m-2 h-32 uppercase text-3xl text-white">
                            Weight management
                        </span>
                    </div>
                    <ul class="list-decimal pl-8">
                        <li>Cholesterol management​</li>
                        <li>Anemia management​</li>
                        <li>PCOS/PCOD management</li>
                        <li>Healthy heart managemen</li>
                        <li>Healthy gut management​</li>
                        <li>Diabetes management​</li>
                    </ul>
                </div>
                <div class="p-2 m-2 shadow-md rounded border">
                    <div
                        class="
                w-72
                m-2
                shadow-md
                backimage
                flex
                justify-center
                items-center
                rounded
            "
                    >
                        <span class="m-2 h-32 uppercase text-3xl text-white">
                            Weight management
                        </span>
                    </div>
                    <ul class="list-decimal pl-8">
                        <li>TBD</li>
                    </ul>
                </div>
                <div class="p-2 m-2 shadow-md rounded border">
                    <div
                        class="
                w-72
                m-2
                shadow-md
                backimage
                flex
                justify-center
                items-center
                rounded
            "
                    >
                        <span class="m-2 h-32 uppercase text-3xl text-white">
                            Weight management
                        </span>
                    </div>
                    <ul class="list-decimal pl-8">
                        <li>TBD</li>
                    </ul>
                </div>
                <div class="p-2 m-2 shadow-md rounded border">
                    <div
                        class="
                w-72
                m-2
                shadow-md
                backimage
                flex
                justify-center
                items-center
                rounded
            "
                    >
                        <span class="m-2 h-32 uppercase text-3xl text-white">
                            Weight management
                        </span>
                    </div>
                    <ul class="list-decimal pl-8">
                        <li>TBD</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;
