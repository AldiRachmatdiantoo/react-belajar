export default function ProfileName({firstName, lastName}){
    return(
        <div>
            <h1 style={{color: "white", fontFamily: "sans-serif", fontSize: "30px", textAlign: "center"}}>{firstName} {lastName}</h1>
        </div>
    )
}