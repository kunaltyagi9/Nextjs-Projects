'use client'
import { headerItems, projects } from "@/constants/constant";
import Image from "next/image";

const Projects: React.FC = () => {

    return (
        <section 
            id={headerItems.projects.page} 
            className="flex flex-col text-center justify-center items-center my-40"
        >
            <h1 className={"text-6xl my-6"}>Projects</h1>
            <div className="flex break-words flex-wrap text-center justify-center items-center">
                {
                    Object.keys(projects).map(project => (
                        <Image 
                            src={projects[project as keyof Projects].image} 
                            alt=""  
                            width={300}
                            height={300}
                            className="mt-4 md:m-1 cursor-pointer"
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;