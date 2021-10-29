import WomanBicarakan from 'media/webp/woman-banner-jumbotron.webp'
import Image from 'next/image'

export default function CounselorCard() {
    return (
        <div className="counselor-card-wrapper">
            <div className="counselor-photo">
                <Image
                    src={WomanBicarakan}
                    className="person-main-first-banner"
                />
            </div>
            <div>
                Joe Irene, M. Psi., Psikolog
            </div>
            <div className="helped-client-wrapper">
                <div>
                    Logo Person
                </div>
                <div>
                    Sudah membantu 800+ Pembicara
                </div>
            </div>
            <div className="counselor-rating-wrapper">
                <div>⭐</div>
                <div>
                    4.5 (223 Reviews)
                </div>
            </div>
            <div>
                Konselor Joe spesialis di:
            </div>
            <div className="counselor-speciality-wrapper">
                <div>
                ✓
                </div>
                <div>
                    Konflik Keluarga
                </div>
            </div>
            <div className="counselor-speciality-wrapper">
                <div>
                ✓
                </div>
                <div>
                    Hubungan & Pasangan
                </div>
            </div>
            <div className="counselor-speciality-wrapper">
                <div>
                ✓
                </div>
                <div>
                    Stress & Anxiety
                </div>
            </div>
            <div>
                <button>
                    Profil Lengkap
                </button>
            </div>
        </div>
    )
}