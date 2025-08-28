export default function HelloWorld({namaOrang, namaSaya}){
    return(
        <div style={{width: "100%",height: "100vh",display: "flex",alignItems: "center",justifyContent: "center"}}>
            <h1>Hallo {namaOrang} nama saya {namaSaya}</h1>
        </div>
    )
}