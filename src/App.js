import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import { Landing } from './landingPage/Landing';
import { NavBar } from './navbar/NavBar';
import { CreativeCard } from './creativeCard/CreativeCard';
import { PaymentPage } from './paymentPage/PaymentPage';
import { MortgageCalculator } from './mortgageCalculator/MortgageCalculator';
import { NFTsGalery } from './nftsGalery/NFTsGalery';
import { OldBankLanding } from './oldBank/components/Landing/OldBankLanding';
import { About } from './oldBank/components/About/About';
import { Menu } from './oldBank/components/Menu/Menu';
import { MenuCategory } from './oldBank/components/Menu/MenuCategory';
import { Contact } from './oldBank/components/Contact/Contact';
// Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
