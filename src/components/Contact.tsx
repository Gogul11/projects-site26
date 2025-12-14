import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

interface ContactProps {
    name: string;
    number?: string;
    url?: string;
    role?: string;
    extraClass?: string
}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div className={props.extraClass ?? 'w-full bg-white/10 backdrop-blur-md shadow-2xl h-20 rounded-2xl p-1 flex items-center md:w-[90%]'}>

            <div className='w-[70%] h-full px-2 flex flex-col justify-center'>
                <p className="font-bold">{props.name}</p>
                {props.number && <p>{props.number}</p> }
                {props.role && <p>{props.role}</p> }
            </div>

            <div className='w-[30%] h-full flex justify-center gap-5 items-center'>
                
                {props.number && 
                    <a href={`tel:${props.number}`}>
                        <IoCallOutline size={26} color="#8aeaa2"/>
                    </a>
                }

                {props.url && 
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={26} color="#87ceeb" />
                    </a>
                }

            </div>

        </div>
    );
};

export default Contact;
