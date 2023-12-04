import React from "react";
import noProjectsImage from "./assets/no-projects.png";

export default function NoneProject({ onAddProject }) {
    return (
        <div className="justify-content-center">
            <div className="text-center align-items-center justify-content-center">
                <p className="text-2xl font-bol py-8">Hello User, add a new project or choose a project that you created!</p>
                <div className="flex justify-center items-center flex-col">
                    <button onClick={onAddProject}
                        className="flex justify-center items-center  bg-black rounded-md px-6 py-3 mx-4 text-white"
                    >
                        <span className="font-medium">+ Add Project</span>
                    </button>
                    <img className="w-1/3 h-auto pt-8" src={noProjectsImage} alt="no-projects"></img>
                </div>
            </div>
        </div>
    );
}
