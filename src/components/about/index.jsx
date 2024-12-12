import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
    return(
        <section className="py-10 w-full">
            <div className="grid grid-cols-12 gap-8 w-full">
                <ItemLayout className={'col-span-8 row-span-2'}>
                <div className = "">
                <h2 className="font-bold text-2xl text-accent">Artisan of Code and Creation</h2><br/>
                <p className="font-light text-1xl"> I am a passionate second-year B.Tech Information Technology student with a strong focus on coding, software development, and problem-solving. Proficient in web development, I am now exploring the exciting field of Artificial Intelligence and App Development.

Driven by continuous learning, I stay updated with the latest advancements to refine my skills and tackle new challenges. I thrive in collaborative environments, contributing to innovative solutions through curiosity and dedication.

Beyond academics, my love for reading and dancing keeps me creative and grounded, helping me approach projects with fresh perspectives and dynamic energy.</p>
                </div>
                </ItemLayout>

                <ItemLayout className={'col-span-4 row-span-2'}>
                <div className="">
                    <h2 className="font-bold text-2xl text-accent">Education</h2><br/>
                <p>SSN COLLEGE OF ENGINEERING </p>
                  <p>B.Tech Information Technology</p>
                <p>Grade : 8.886</p><br/>
                <p>D.A.V School , Adambakkam </p>
                  <p>Computer Science Stream</p>
                <p>Grade : 97%</p>

                </div>
                </ItemLayout>
                <ItemLayout className={"col-span-full"}>
                    <br/><br/>
                <img
                    className="w-full h-auto"
                    src={`https://skillicons.dev/icons?i=js,html,css,java,flutter,mysql,react,nodejs,postman,mongodb,python,bootstrap,django,flask,opencv,firebase,c`}
                    alt="CodeBucks"
                    loading="lazy"
                />
                <br/>
                </ItemLayout>
    
                
            </div>
            <br/><br/>
            

        </section>
    )
}

export default AboutDetails;