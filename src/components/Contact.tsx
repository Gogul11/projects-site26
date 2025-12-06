import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

interface ContactProps {
    name: string;
    number: string;
    url: string;
}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div className='w-full bg-black/20 h-20 rounded-2xl p-1 flex items-center md:w-[90%]'>

            <div className='w-[70%] h-full px-2 flex flex-col justify-center'>
                <p>{props.name}</p>
                <p>{props.number}</p>
            </div>

            <div className='w-[30%] h-full flex justify-center gap-5 items-center'>
                
                <a href={`tel:${props.number}`}>
                    <IoCallOutline size={26} />
                </a>

                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={26} />
                </a>

            </div>

        </div>
    );
};

export default Contact;
