import React, { useState } from "react";
import { SketchPicker } from 'react-color'

export default function NewProjectDetails({ saveProjectDetails, projectDetails, onClose, setProjectDetails }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const saveHandler = () => {
        const newProject = {
            title: title,
            description: description,
            dueDate: dueDate
        };
        const updatedProjects = [...projectDetails, newProject];
        setTitle('');
        setDescription('');
        setDueDate('');
        saveProjectDetails(updatedProjects);

        onClose();
    };


    return (
        <div className="mr-auto w-full p-20">
            <div className="flex flex-row gap-4 justify-end">
                <button onClick={onClose}>Close</button>
                <button onClick={saveHandler} className="border-2 border-black bg-black text-white rounded-md p-2 px-6">Save</button>
            </div>

            <p>Project title</p>
            <input
                className="border-2 rounded-md bg-gray-200 w-full p-2"
                value={title}
                onChange={handleTitleChange}
                required
            ></input>

            <p>Description</p>
            <textarea
                className="border-2 rounded-md bg-gray-200 w-full p-2 h-20"
                value={description}
                onChange={handleDescriptionChange}
                required
            ></textarea>


            <p>Due date</p>
            <input
                className="border-2 rounded-md bg-gray-200 w-full p-2"
                value={dueDate}
                onChange={handleDueDateChange}
                required
                type="date"
            ></input>
        </div>
    );
}
