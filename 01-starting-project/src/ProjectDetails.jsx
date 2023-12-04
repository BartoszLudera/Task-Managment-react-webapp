import React from "react";

export default function ProjectDetails(){
    return(
        <div>
            <h1>Title</h1>
            <button>Edit</button>
            <button>Delete</button>
            <p>date</p>
            <p>description</p>
            <hr></hr>
            <h1>Tasks</h1>
            <input
                className="border-2 rounded-md bg-gray-200 w-full p-2"
            ></input>
        </div>
    );
}