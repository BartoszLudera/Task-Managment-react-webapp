export default function ProjectComponent({title, description, dueDate, onClick}) {
    return (
        <button aria-label="dashboard" onClick={onClick} class="relative flex items-center space-x-4 rounded-md bg-gradient-to-r from-slate-400 to-slate-600 px-4 py-3 mx-2 text-white">
            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
            </svg>
            <div className="flex flex-col">
                <span class="font-medium">{title}</span>
                <span class="font-small text-sm">{description}</span>
                <span class="font-extralight text-sm">{dueDate}</span>
            </div>
        </button>
    );
}