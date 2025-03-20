import { ChevronRightIcon, TrashIcon } from "lucide-react";

export default function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((tasks) =>
                <li key={tasks.id} className="flex gap-2" >
                    <button onClick={() => onTaskClick(tasks.id)} className={`bg-slate-400 w-full text-left text-white p-2 rounded-md cursor-pointer ${tasks.isCompleted && "line-through"}`}>{
                        tasks.title}

                    </button>

                    <button className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
                        <ChevronRightIcon />
                    </button>

                    <button onClick={() => onDeleteTaskClick(tasks.id)} className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
                        <TrashIcon />
                    </button>
                </li>
            )}
        </ul>
    )
}