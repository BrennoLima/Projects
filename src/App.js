import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import { Landing } from './landingPage/Landing';
import { NavBar } from './navbar/NavBar';
import { CreativeCard } from './creativeCard/CreativeCard';
import { PaymentPage } from './paymentPage/PaymentPage';
import { MortgageCalculator } from './mortgageCalculator/MortgageCalculator';
import { NFTsGalery } from './nftsGalery/NFTsGalery';
import { OldBankLanding } from './oldBank/OldBankLanding';
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
					<Route path='/old-bank' element={<OldBankLanding />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
