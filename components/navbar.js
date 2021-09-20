import { JadwalSesiButton, NavbarMenuSingleWrapper, NavbarMenuWrapper, NavbarWrapper } from "../styled";
import Image from 'next/image'
import BicarakanLogo from '../media/bicarakan-logo.webp'

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div>
        <Image src={BicarakanLogo} />
      </div>
      <NavbarMenuWrapper>
        <NavbarMenuSingleWrapper>
          Podcast
        </NavbarMenuSingleWrapper>
        <NavbarMenuSingleWrapper>
          Tentang Kami
        </NavbarMenuSingleWrapper>
        <NavbarMenuSingleWrapper>
          Konselor
        </NavbarMenuSingleWrapper>
        <NavbarMenuSingleWrapper>
          Testimoni
        </NavbarMenuSingleWrapper>
        <JadwalSesiButton>
          Jadwalkan Sesi
        </JadwalSesiButton>
      </NavbarMenuWrapper>
    </NavbarWrapper>
  )
}