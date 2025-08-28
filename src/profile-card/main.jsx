import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProfileContainer from './ProfileContainer'
import ProfileCard from './ProfileCard'
import "./style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileContainer>
        <ProfileCard
         image={"src/profile-card/WIN_20250720_14_13_28_Pro.jpg"}
         firstName={"Aldi"}
         lastName={"Rachmatdianto"}
         bio={
            "Aldi, 19 tahun, mahasiswa Telkom Surabaya, memiliki pengalaman dan keahlian dalam React, React Native, Kotlin, Flutter, serta Jetpack Compose, dan antusias mengembangkan aplikasi mobile maupun web."

         }
        />
    </ProfileContainer>
  </StrictMode>
)

