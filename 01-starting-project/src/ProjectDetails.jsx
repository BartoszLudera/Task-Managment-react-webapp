// Inside ProjectDetails component
import React from "react";

export default function ProjectDetails({ projectDetails }) {
    return (
        <div>
            <h1>{projectDetails.title}</h1>
            <button>Edit</button>
            <button>Delete</button>
            <p>Date: {projectDetails.dueDate}</p>
            <p>Description: {projectDetails.description}</p>
            <hr />
            <h1>Tasks</h1>
            <input
                className="border-2 rounded-md bg-gray-200 w-full p-2"
            ></input>
        </div>
    );
}
