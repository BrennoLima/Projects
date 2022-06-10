import React, { useState } from 'react';
// Components
import { NavBar } from './components/navbar/NavBar';
import { CheckoutStepper } from './components/stepper/CheckoutStepper';
import { CheckoutSteps } from './components/steps/CheckoutSteps';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const App = () => {
	const [activeStep, setActiveStep] = useState(3);
	const [steps] = useState([
		'Account',
		'Address',
		'Delivery',
		'Payment',
		'Review & Pay',
	]);

	return (
		<div style={{ minHeight: '100vh', maxWidth: '100vw', overflowX: 'hidden' }}>
			<NavBar />
			<Container style={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
				>
					<Grid item xs={12} md={7} className='py-10 pb-4'>
						<CheckoutStepper
							activeStep={activeStep}
							setActiveStep={setActiveStep}
							steps={steps}
						/>
					</Grid>
					<Grid item xs={12} md={7}>
						<CheckoutSteps activeStep={activeStep} steps={steps} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default App;
