import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import { Landing } from './landingPage/Landing';
import { NavBar } from './navbar/NavBar';
import { CreativeCard } from './creativeCard/CreativeCard';
import { PaymentPage } from './paymentPage/PaymentPage';
import { MortgageCalculator } from './mortgageCalculator/MortgageCalculator';
import { NFTsGalery } from './nftsGalery/NFTsGalery';
import { RafaArts } from './rafaArts/RafaArts';
import { LHDesigns } from './lhDesigns/LHDesigns';
import { OldBankLanding } from './oldBank/components/Landing/OldBankLanding';
import { About } from './oldBank/components/About/About';
import { Menu } from './oldBank/components/Menu/Menu';
import { MenuCategory } from './oldBank/components/Menu/MenuCategory';
import { Contact } from './oldBank/components/Contact/Contact';
import { FishingLine } from './lhDesigns/graphicDesignRoutes/FishingLine/FishingLine';
import { WhinePage } from './lhDesigns/graphicDesignRoutes/Whine/WhinePage';
import { TruckPage } from './lhDesigns/graphicDesignRoutes/Truck/TruckPage';

// Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DukDukPage } from './lhDesigns/graphicDesignRoutes/DukDuk/DukDukPage';

export const App = () => {
	return (
		<Router>
			<div
				style={{
					minHeight: '100vh',
					maxWidth: '100vw',
					overflowX: 'hidden',
					background: 'linear-gradient(150deg, #0A0A27, #31314D)',
				}}
			>
				<NavBar />
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/creative-card' element={<CreativeCard />} />
					<Route path='/payment-page' element={<PaymentPage />} />
					<Route path='/mortgage-calculator' element={<MortgageCalculator />} />
					<Route path='/nfts-galery' element={<NFTsGalery />} />
					{/**
					 * LH designs Routes
					 */}
					<Route path='/luhoca-designs' element={<LHDesigns />} />
					<Route
						path='/luhoca-designs/graphic-design/fishing'
						element={<FishingLine />}
					/>
					<Route
						path='/luhoca-designs/graphic-design/whine'
						element={<WhinePage />}
					/>
					<Route
						path='/luhoca-designs/graphic-design/tak-yo'
						element={<TruckPage />}
					/>
					<Route
						path='/luhoca-designs/graphic-design/dukduk'
						element={<DukDukPage />}
					/>
					{/**
					 * Rafa arts Routes
					 */}
					<Route path='/rafa-arts' element={<RafaArts />} />
					<Route path='/store' element={<div>rafa store</div>} />
					{/**
					 * Old Bank Routes
					 */}
					<Route path='/old-bank' element={<OldBankLanding />} />
					<Route path='/about-us' element={<About />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/contact-us' element={<Contact />} />
					<Route path='/menu/:category' element={<MenuCategory />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
