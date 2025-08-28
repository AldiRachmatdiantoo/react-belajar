import "./style.css"

export default function ProfileContainer({children}){
    return(
        <div className="flexForParent">
            {children}
        </div>
    )
}