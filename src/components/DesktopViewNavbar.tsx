import { Link, useLocation, useNavigate } from 'react-router';

const DesktopViewNavbar = () => {

    const items : Array<string> = ['Home', 'Projects', 'Research', 'Technovation', 'Achievements', 'About Us']

    const navigate = useNavigate()
    const location = useLocation()

    const getPath =  (item : string) : string => {
        if(item === 'home') return '/'
        return '/' + item.replace(' ', '-')
    }
    
    return (
        <div className='w-[95%] h-14 bg-black/20 border border-white/20
                        backdrop-blur-xl fixed top-2 left-1/2 
                        -translate-x-1/2 shadow-2xl rounded-2xl 
                        flex justify-center items-center
                        gap-5 z-50'
        >
            <div className='w-[30%] flex justify-center items-center'>
                <img 
                    src="/images/ctf.png" 
                    className='h-28 cursor-pointer'
                    onClick={() => navigate('https://www.cegtechforum.in/')} 
                    alt="ctf-image" />
            </div>
            <div className='w-[70%] flex gap-6 justify-center text-md'>
                {items.map((item, idx) => (
                    <Link 
                        key={idx}
                        to={item === 'Home' ? '/' : item.toLowerCase().replace(' ', '-')}
                        className={location.pathname === getPath(item.toLowerCase()) ? 'text-[#28282b] underline font-extrabold' : 'text-white'}
                    >{item}</Link>
                ))}
            </div>
        </div>
    );
}

export default DesktopViewNavbar;
