import React, { useRef, useState } from 'react';
// Components
import { PaymentPlan } from './components/PaymentPlan';
import { PrepaymentPlan } from './components/PrepaymentPlan';
import { CalculationTable } from './components/CalculationTable';
import { PaymentDiagram } from './components/PaymentDiagram';
import { MortgageSummary } from './components/MortgageSummary';
import { Hero } from './components/Hero';
// Material UI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const MortgageCalculator = () => {
	const paymentPlanRef = useRef(null);
	////////////////// State/Control ////////////////////
	// Payment plan data
	const [amout, setAmout] = useState(100000);
	const [interest, setInterest] = useState(5);
	const [amortization, setAmortization] = useState({
		years: '25 Years',
		months: '',
	});
	const [paymentFrequency, setPaymentFrequency] = useState(
		'Monthly (12x per year)'
	);
	const [term, setTerm] = useState('5 Years');
	// Prepayment plan data
	const [prepaymentAmount, setPrepaymentAmount] = useState(0);
	const [prepaymentFrequency, setPrepaymentFrequency] = useState('One time');
	const [startWithPayment, setStartWithPayment] = useState(1);
	/////////////////////////////////////////////////////

	return (
		<Container>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justify='center'
				className='pt-16 pb-16'
			>
				{/**
				 * Hero
				 */}
				<Grid item xs={12}>
					<Hero paymentPlanRef={paymentPlanRef} />
				</Grid>
				{/**
				 * Calculation
				 */}
				<Grid item xs={12} className='pt-16'>
					<Typography className='font-semibold text-16 semiWhite'>
						<span key='info'>
							<i className='fas fa-info-circle mr-2' />
						</span>
						This is a simplified mortgage calculator version.{' '}
						<Link
							href='https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MCCalc-CHCalc-eng.aspx'
							target='_blank'
						>
							Click here to use the full version.
						</Link>
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					className='pt-16 pb-4 md:pr-4'
					ref={paymentPlanRef}
				>
					<PaymentPlan
						amout={amout}
						setAmout={setAmout}
						interest={interest}
						setInterest={setInterest}
						amortization={amortization}
						setAmortization={setAmortization}
						paymentFrequency={paymentFrequency}
						setPaymentFrequency={setPaymentFrequency}
						term={term}
						setTerm={setTerm}
					/>
				</Grid>
				<Grid item xs={12} md={6} className='pt-16 pb-4 md:pl-4'>
					<PrepaymentPlan
						prepaymentAmount={prepaymentAmount}
						setPrepaymentAmount={setPrepaymentAmount}
						prepaymentFrequency={prepaymentFrequency}
						setPrepaymentFrequency={setPrepaymentFrequency}
						startWithPayment={startWithPayment}
						setStartWithPayment={setStartWithPayment}
					/>
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography className='white font-semibold text-20 pb-4'>
						Calculation Summary
					</Typography>
					<CalculationTable
						paymentFrequency={paymentFrequency}
						term={term}
						amortization={amortization}
						amout={amout}
						interest={interest}
						prepaymentAmount={prepaymentAmount}
						prepaymentFrequency={prepaymentFrequency}
						startWithPayment={startWithPayment}
					/>
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography className='white font-semibold text-20 pb-4'>
						Mortgage Summary
					</Typography>
					<MortgageSummary amortization={amortization} term={term} />
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography className='white font-semibold text-20 pb-4'>
						Payment Diagram
					</Typography>
					<PaymentDiagram />
				</Grid>
			</Grid>
		</Container>
	);
};
