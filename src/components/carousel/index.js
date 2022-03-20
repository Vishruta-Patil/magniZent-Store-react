import { useState } from "react"
import { BtnSlider } from "./BtnSlider"
import carouselData from "../../data/carouselData"
import "./index.css"

export const Carousel = () => {
    const [slide, setSlide] = useState(1)

    const nextSlide = () => {
        if (carouselData.length <= slide) {
            setSlide(1)
        }
        else
            setSlide(slide + 1)
    }

    const prevSlide = () => {
       if(slide === 1) {
        setSlide(carouselData.length)
       }
       else setSlide(slide-1)
    }

    return (
        <div className="bg-img-container">
            <div>
                {carouselData.map((item, index) => (
                    <div key={index}>
                        <img className={index + 1 === slide ? "hero-bg-img hero-bg-img-active" : "hero-bg-img"} src={item.img_url} alt={item.img_name} />
                    </div>
                ))}
            </div>
            <BtnSlider dir={"prev"} positionSlide={prevSlide} />
            <BtnSlider dir={"next"} positionSlide={nextSlide} />
        </div>
    )
}