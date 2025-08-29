import ListTugas from "./ListTugas"

export default function FriendList(){
    const taskList = [
        {
            isCompleted: true,
            id:0,
            task: "Gym"
        },
        {
            id: 1,
            isCompleted: true,
            task: "Jumatan"
        },
        {
            id: 2,
            isCompleted: true,
            task: "Ngoding React"
        },
        {
            id:3,
            isCompleted: false,
            task: "Ngoding Compose"
        }

    ]
    return (
        taskList.map((value) => {
            return(
                <ListTugas
                isCompleted={value.isCompleted}
                text={value.task}
                key={value.id}
                />

            )
        })
    )
}