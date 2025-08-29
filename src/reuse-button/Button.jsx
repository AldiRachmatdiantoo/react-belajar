export default function Button({text, logical}){
    return (
        <button onClick={logical}>{text}</button>
    )
}