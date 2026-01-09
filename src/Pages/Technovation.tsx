import {useState, useEffect} from 'react';
import Countdown from '../components/CountDown';

const Technovation = () => {
    const images = [
        '/technovation-images/1.png',
        '/technovation-images/2.jpg',
        '/technovation-images/3.jpg',
        '/technovation-images/4.jpg',
        '/technovation-images/5.jpg',
        '/technovation-images/6.jpg',
        '/technovation-images/7.jpg',
        '/technovation-images/8.jpg',
        '/technovation-images/9.jpg',
        '/technovation-images/10.jpg',
        '/technovation-images/11.jpg',
        '/technovation-images/12.jpg',
        '/technovation-images/13.jpg',
        '/technovation-images/14.jpg',
    ]

    const [currentImage, setCurrentImage] = useState<number>(0)

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length)
        }, 2000);

        return () => clearInterval(imageInterval)
    }, [])

    return (
        <div className='flex flex-col h-full w-full gap-10
                        pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12'>

            <div className='w-full flex flex-col 
                            justify-center items-center pt-10 '>
                    
                <p className='text-xl font-bold day-one lg:text-3xl mb-10'>Registration Opens in</p>
                <Countdown targetDate="2026-02-10T18:00:00" />

                <p className='text-md font-bold day-one lg:text-lg mt-4'>Get your ideas ready to light up!</p>
            </div>

            <div className='flex flex-col py-4 md:flex-row w-full md:justify-center gap-4 mt-4'>
                <div className='md:w-[50%] flex justify-center items-center w-full'>
                    <img
                        src={images[currentImage]}
                        alt="Technovation Images"
                        className='rounded-2xl w-[400px] h-[400px]
                                    md:w-[500px] md:h-[300px]
                                    lg:w-[600px] lg:h-[400px]'
                    />
                </div>

                <div className='flex flex-col items-center py-2 gap-4 md:w-[50%]'>
                    <p className='text-[#1b1212] text-2xl font-bold day-one lg:text-3xl underline'>Techonovation</p>
                    <p
                        className='text-md md:text-lg lg:text-xl'
                    >
                        Technovation is an inter-college project display competition with theme that varies yearly. 
                        Transform your imaginative and practical ideas into tangible products to present at the Technovation. 
                        The competition is open to individuals and teams, and the entries will be judged on their originality, 
                        feasibility, completeness, and potential impact on addressing real-world challenges. 
                        The main goal of this competition is to encourage the development of innovative ideas 
                        that have the potential to improve our lives.
                    </p>
                </div>
            </div>
            
            
        </div>
    );
}

export default Technovation;
