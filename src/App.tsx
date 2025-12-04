import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.tsx";
import DesktopViewNavbar from "./components/DesktopViewNavbar.tsx";
import MobileViewNavbar from "./components/MobileViewNavbar.tsx";
import { useEffect, useState } from "react";

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
		
			<div className="pt-16 px-14"> 
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
  	);
}

export default App;
