export default function ListTugas({text, isCompleted}){
    const completedTask = `${text} ✅`
    return (
        <h1>{isCompleted ? completedTask : text}</h1>
    )
}