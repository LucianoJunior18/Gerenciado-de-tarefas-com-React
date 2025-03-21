import { useState } from "react"

export default function AddTask({ onAddTaskSubmit }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text"
                placeholder="Digite o titulo da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50 font-medium"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />


            <input type="text" placeholder="Digite a descriçâo da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50 font-medium"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <button onClick={() => {
                // Verificar se o titulo e a descriçao estao preenchidos , .trim para nao poder adcionar com espaço em branco
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha o título e a descriçâo da tarefa.")
                }
                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")
            }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer" value={description}>Adcionar</button>
        </div>
    )
}