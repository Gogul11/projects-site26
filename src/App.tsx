import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.tsx";
import DesktopViewNavbar from "./components/DesktopViewNavbar.tsx";
import MobileViewNavbar from "./components/MobileViewNavbar.tsx";
import { useEffect, useState } from "react";
import AboutUs from "./Pages/AboutUs.tsx";
import Technovation from "./Pages/Technovation.tsx";
import Projects from "./Pages/Projects.tsx";

function App() {

	const [width, setWidth] = useState<number>(window.innerWidth)

	useEffect(() => {
		const handleChangeWidth = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleChangeWidth)

		return () => window.removeEventListener('resize', handleChangeWidth)
	}, [])

  	return (
		<BrowserRouter>
			{width < 950 ?
				<MobileViewNavbar/> : 
				<DesktopViewNavbar />  
			}
		
			<div className="p-0"> 
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/technovation" element={<Technovation />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</div>
		</BrowserRouter>
  	);
}

export default App;
