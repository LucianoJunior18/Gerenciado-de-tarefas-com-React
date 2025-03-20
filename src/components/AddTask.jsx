export default function AddTask() {
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50 font-medium" />
            <input type="text" placeholder="Digite a descriçâo da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50 font-medium" />

            <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">Adcionar</button>
        </div>
    )
}