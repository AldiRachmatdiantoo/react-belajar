import "./style.css"
import ProfileImage from "./ProfileImage"
import ProfileName from "./ProfileName"
import ProfileBio from "./ProfileBio"

export default function ProfileCard({image, firstName, lastName, bio}){
    return(
        <div className="flexForParent card" style={{justifyContent: "flex-start"}}>

            <ProfileImage image={image}/>
            <ProfileName firstName={firstName} lastName={lastName}/>
            <ProfileBio bio={bio}/>
        </div>
    )
}