import { useState } from "react";
import { NavLink } from "react-router-dom";
import workoutIllustration from '../../assets/workout-ill.png';

export default function Faq() {
    return(
        <>
            <h2 className="text-[40px] pt-10 font-bold">FAQ</h2>
            <div className="grid grid-cols-2 gap-52 items-start">
                <div className="pt-5 flex flex-col gap-5">
               <FaqItem 
                    title="How does gymskii work?" 
                    p={`The gymskii dashboard works by taking your logged data (PRs on each exercise) and transforming it into detailed visuals and graphs.You can then analyze and make sure your lifts are increasing every week.\nThis is a concept known as progressive overloading.You can also take notes to track how you feel on each workout and exercise.`}
               />
               <FaqItem 
                    title="Can I track custom workouts?" 
                    p = {`Yes! You can create templates from our database of exercises and even create your own. We do our best to be as flexible as possible`}
               />
               <FaqItem 
                    title="Is gymskii for everyone?" 
                    p = {`gymskii was created with everyone in mind. Whether you are just starting or a fitness guru, anyone can track their workouts and make real progress.`}
               />
               <FaqItem 
                    title="Are there any resources or articles for fitness tips?" 
                    p = {
                        <>
                            Yes! Visit our <NavLink to = "blog" className= "text-brand underline"> blog </NavLink> to see the latest ways to improve your workouts.
                        </>
                    }
               />
                </div>
                <img src={workoutIllustration} alt="" className="w-[384px] h-[384px]" />
            </div>
            
            
        </>
    );
}

function FaqItem({title, p}) {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev);

    return (
        <div className="max-w-xl bg-gray-100 p-5 rounded-lg">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <span 
                    className="material-icons cursor-pointer"
                    onClick={toggleMenu}
                >
                    add_circle
                </span>
            </div>
            <p className={`${isOpen ? 'text-sm pt-2' : 'text-sm pt-2 hidden'}`} style={{ whiteSpace: "pre-line" }}>
                {p}
            </p>
        </div>
    );
}
