import React from 'react';
import clsx from 'clsx';
import './stepper.css';
// Material UI
import Hidden from '@mui/material/Hidden';

export const CheckoutStepper = ({ steps, activeStep, setActiveStep }) => {
	return (
		<div className='stepper-container relative'>
			{steps.map((step, index) => (
				<div className='w-full' key={index}>
					<div onClick={() => setActiveStep(index)}>
						<span
							className={clsx(
								'stepper-number',
								activeStep > index
									? 'complete-stepper-number'
									: activeStep === index
									? 'active-step'
									: 'upcoming-step'
							)}
						>
							{index + 1}
						</span>
						<Hidden mdDown>
							<p className='stepper-label text-center'>{step}</p>
						</Hidden>
					</div>
				</div>
			))}
		</div>
	);
};
