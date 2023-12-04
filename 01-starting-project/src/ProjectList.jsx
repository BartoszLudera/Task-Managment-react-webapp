import React, { useState } from "react";
import ProjectComponent from "./ProjectComponent";
import NewProjectDetails from "./NewProjectDetails";
import NoneProject from "./NoneProject";
import ProjectDetails from "./ProjectDetails";

export default function ProjectPage() {
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
    // dane o projekcie
    const [projectDetails, setProjectDetails] = useState([]);

    const addProjectHandler = () => {
        setIsProjectOpen(true);
    };

    const openProjectDetails = () => {
        setIsProjectDetailsOpen(true)
    }

    const saveProjectDetails = (details) => {
        setProjectDetails(details);
        setIsProjectOpen(false);
    };

    const closeProjectDetails = () => {
        setIsProjectOpen(false);
    };



    return (
        <div className="bg-gray-100 flex justify-center items-center">
            <div className="flex w-full">
                <div className="sidebar min-h-screen overflow-hidden border-r w-56">
                    <div className="flex flex-col justify-between pt-2 pb-6">
                        <div>
                            <div className="w-max p-2.5">
                                {/* <h1>LOGO</h1> */}
                            </div>
                            <div className="flex justify-center">
                                <button onClick={addProjectHandler} className="relative flex items-center bg-black rounded-md px-6 py-3 mx-4 text-white">
                                    <span className="font-medium">+ Add Project</span>
                                </button>
                            </div>
                            <ul className="mt-6 space-y-2 tracking-wide">
                                {projectDetails.map((project) => {
                                    return (
                                        <ProjectComponent onClick={openProjectDetails} title={project.title} description={project.description} dueDate={project.dueDate} />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-grow mr-auto w-full p-20">
                    {isProjectDetailsOpen ? (
                        <ProjectDetails />
                    ) : (  
                    isProjectOpen ? (
                        <NewProjectDetails
                            saveProjectDetails={saveProjectDetails}
                            onClose={closeProjectDetails}
                            setProjectDetails={setProjectDetails}
                            projectDetails={projectDetails}
                        />
                    ) : (
                        <NoneProject onAddProject={addProjectHandler} />
                    ))
                }
                </div>

            </div>
        </div>
    );
}
