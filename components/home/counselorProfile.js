import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import WomanBicarakan from 'media/webp/woman-banner-jumbotron.webp'
import CounselorCard from 'components/counselorCard'

export default function CounselorProfile() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slidesPerView: 2,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })

    const ArrowLeft = (props) => {
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
            <svg
                onClick={props.onClick}
                className={"arrow arrow--left" + disabeld}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
        )
    }

    const ArrowRight = (props) => {
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
            <svg
                onClick={props.onClick}
                className={"arrow arrow--right" + disabeld}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
        )
    }

    return (
        <div className="counselor-profile">
            <div className="row">
                <div className="col-lg-5">
                    <div>
                        Profil Konseler Kami
                    </div>
                    <div>
                        Friendly, open-minded, dan solutif
                    </div>
                    <div>
                        Lihat Semua Konselor
                    </div>
                    <div>
                        {slider && (
                            <>
                                <ArrowLeft
                                    onClick={(e) => e.stopPropagation() || slider.prev()}
                                    disabled={currentSlide === 0}
                                />
                                <ArrowRight
                                    onClick={(e) => e.stopPropagation() || slider.next()}
                                    disabled={currentSlide === slider.details().size - 1}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide number-slide1">
                                <CounselorCard />
                            </div>
                            <div className="keen-slider__slide number-slide1">
                                <CounselorCard />
                            </div>
                            <div className="keen-slider__slide number-slide1">
                                <CounselorCard />
                            </div>
                        </div>
                    </div>
                    {slider && (
                        <div className="dots">
                            {[...Array(slider.details().size).keys()].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            slider.moveToSlideRelative(idx)
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    />
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}