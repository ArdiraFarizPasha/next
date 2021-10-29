import Image from 'next/image'
import BicarakanLogo from '../media/bicarakan-logo.webp'

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div>
        <Image src={BicarakanLogo} />
      </div>
      <div className="navbar-menu-wrapper">
        <div className="navbar-menu-single-wrapper">
          Podcast
        </div>
        <div className="navbar-menu-single-wrapper">
          Tentang Kami
        </div>
        <div className="navbar-menu-single-wrapper">
          Konselor
        </div>
        <div className="navbar-menu-single-wrapper">
          Testimoni
        </div>
        <button className="jadwalkan-sesi-button">
          Jadwalkan Sesi
        </button>
      </div>
    </div>
  )
}