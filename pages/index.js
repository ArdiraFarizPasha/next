import Image from 'next/image'
import { useState } from 'react'
import Layout from '../components/layout'
import BicarakanLogoSingle from 'media/webp/icon-bicarakan-white-single-cropped.webp'
import WomanBicarakan from 'media/webp/woman-banner-jumbotron.webp'
import IconSample from 'media/webp/icon-sample.jpeg'
import CounselorProfile from 'components/home/counselorProfile'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Home() {
  // const [sliderRef] = useKeenSlider({
  //   slidesPerView: 9,
  //   mode: "free",
  //   spacing: 20,
  //   loop: true,
  // })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: 2,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <Layout>
      <div className="container-jumbo-tron">
        <div className="jumbo-tron-logo-wrapper">
          <Image
            src={BicarakanLogoSingle}
            className="jumbo-tron-logo-background"
          />
        </div>
        <div className="jumbo-tron-logo-wrapper woman-jumbotron">
          <Image
            src={WomanBicarakan}
            className="person-main-first-banner"
          />
        </div>
        <div className="content-text-banner-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title-first-banner">
                Psikolog Klinis Terbaik, Profesional, Berempati, dan Non-Judgmental
              </div>
              <div className="subtitle-first-banner">
                Bicarakan isi hatimu, temukan jalan keluar atas masalahmu.
              </div>
              <button className="jadwalkan-konseling-button">
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="first-banner-wrapper">
        <div>
          <div>
            <hr />
            <div className="title-problem">
              Dapatkan jawaban untuk apa saja dan segalanya
            </div>
            <div className="subtitle-problem">
              Konsultasikan masalah Anda dengan tim konselor kami yang berpengalaman
              dalam menangani masalah berikut
            </div>
          </div>
        </div>
      </section>
      <CounselorProfile />
    </Layout>
  )
}
