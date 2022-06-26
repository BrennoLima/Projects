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
import { useEffect } from 'react';

export const MortgageCalculator = () => {
	const paymentPlanRef = useRef(null);
	////////////////// State/Control ////////////////////
	// Payment plan data
	const [amount, setAmount] = useState(100000);
	const [interest, setInterest] = useState(5);
	const [amortization, setAmortization] = useState({
		years: 25,
		months: 0,
	});
	const [paymentFrequency, setPaymentFrequency] = useState(
		'Monthly (12x per year)'
	);
	const [term, setTerm] = useState(5);
	// Prepayment plan data
	const [prepaymentAmount, setPrepaymentAmount] = useState(0);
	const [prepaymentFrequency, setPrepaymentFrequency] = useState('One time');
	const [startWithPayment, setStartWithPayment] = useState(1);
	const [monthlyPayment, setMonthlyPayment] = useState(0);
	const [totalNumberOfPayments, setTotalNumberOfPayments] = useState(0);
	const [totalMortageCost, setTotalMortageCost] = useState(0);
	const [totalInterest, setTotalInterest] = useState(0);
	const [paymentsPerTerm, setPaymentsPerTerm] = useState(0);
	const [termMortgageCost, setTermMortgageCost] = useState(0);
	const [termInterest, setTermInterest] = useState(0);
	// Principal and interest payments by term
	const [totalPaidPrincipalByTerm, setTotalPaidPrincipalByTerm] = useState(0);
	const [totalPaidInterestByTerm, setTotalPaidInterestByTerm] = useState(0);
	const [outstandingPrincipal, setOutstandingPrincipal] = useState(0);

	useEffect(() => {
		// monthly intereset rate =  interest% / 12
		let monthlyInterestRate = interest / (12 * 100);
		// total number of payment in months = paymentFrequency (12x/year) * amortization (years/months)
		let totalNumberOfPayments = 12 * amortization.years + amortization.months;
		// payments per term = paymentFrequency (12x/year) * term (5 years)
		let paymentsPerTerm = 12 * term;
		// principal = amount - down payment
		let principal = amount;
		// M = P R(1 + R)^N / (1 + R)^N - 1
		let monthlyPayment =
			(principal *
				(monthlyInterestRate *
					Math.pow(1 + monthlyInterestRate, totalNumberOfPayments))) /
			(Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1);
		// total mortgage cost = monthlyPayment * totalNumberOfPayments
		let totalMortageCost = monthlyPayment * totalNumberOfPayments;
		// total interest = totalMortageCost - amount
		let totalInterest = totalMortageCost - amount;
		// term mortgage cost = monthlyPayment * paymentsPerTerm
		let termInterest =
			(totalInterest / totalNumberOfPayments) * paymentsPerTerm;
		// term mortgage cost = monthlyPayment * paymentsPerTerm
		let termMortgageCost = monthlyPayment * paymentsPerTerm;
		// Principal and interest payments by term
		let outstandingPrincipal = amount;
		let paidPrincipal = 0;
		let paidInterest = 0;
		let totalPaidInterest = 0;
		let totalPaidPrincipal = 0;
		for (let count = 1; count <= paymentsPerTerm; count++) {
			paidInterest = monthlyInterestRate * outstandingPrincipal;
			paidPrincipal = monthlyPayment - paidInterest;
			outstandingPrincipal = outstandingPrincipal - paidPrincipal;
			totalPaidInterest = totalPaidInterest + paidInterest;
			totalPaidPrincipal = totalPaidPrincipal + paidPrincipal;
		}
		// set state
		setTotalNumberOfPayments(totalNumberOfPayments);
		setOutstandingPrincipal(outstandingPrincipal);
		setPaymentsPerTerm(paymentsPerTerm);
		setTotalPaidInterestByTerm(totalPaidInterest);
		setTotalPaidPrincipalByTerm(totalPaidPrincipal);
		setMonthlyPayment(monthlyPayment);
		setTermMortgageCost(termMortgageCost);
		setTotalMortageCost(totalMortageCost);
		setTermInterest(termInterest);
		setTotalInterest(totalInterest);
	}, [interest, amount, term, amortization]);

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
						amount={amount}
						setAmount={setAmount}
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
						amount={amount}
						interest={interest}
						prepaymentAmount={prepaymentAmount}
						prepaymentFrequency={prepaymentFrequency}
						startWithPayment={startWithPayment}
						monthlyPayment={monthlyPayment}
						totalNumberOfPayments={totalNumberOfPayments}
						paymentsPerTerm={paymentsPerTerm}
						totalMortageCost={totalMortageCost}
						totalInterest={totalInterest}
						termMortgageCost={termMortgageCost}
						termInterest={termInterest}
						totalPaidPrincipalByTerm={totalPaidPrincipalByTerm}
						totalPaidInterestByTerm={totalPaidInterestByTerm}
					/>
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography className='white font-semibold text-20 pb-4'>
						Mortgage Summary
					</Typography>
					<MortgageSummary
						amortization={amortization}
						term={term}
						totalNumberOfPayments={totalNumberOfPayments}
						monthlyPayment={monthlyPayment}
						totalPaidPrincipalByTerm={totalPaidPrincipalByTerm}
						totalPaidInterestByTerm={totalPaidInterestByTerm}
						paymentsPerTerm={paymentsPerTerm}
						totalMortageCost={totalMortageCost}
						totalInterest={totalInterest}
						outstandingPrincipal={outstandingPrincipal}
					/>
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography className='white font-semibold text-20 pb-4'>
						Payment Diagram
					</Typography>
					<PaymentDiagram totalMortageCost={totalMortageCost} amount={amount} />
				</Grid>
			</Grid>
		</Container>
	);
};
