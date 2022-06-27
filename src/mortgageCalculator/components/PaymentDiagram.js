import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
// chart.js
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
			labels: {
				color: '#e7e7e7',
			},
		},
		title: {
			display: true,
			text: 'Payment History',
			color: '#e7e7e7',
		},
	},
	scales: {
		x: {
			grid: {
				color: '#e7e7e780',
			},
			ticks: {
				color: '#e7e7e7',
			},
		},
		y: {
			grid: {
				color: '#e7e7e780',
			},
			ticks: {
				color: '#e7e7e7',
			},
		},
	},
};
export const options2 = {
	plugins: {
		title: {
			display: true,
			text: 'Intereset Payment',
			color: '#e7e7e7',
		},
		legend: {
			labels: {
				color: '#e7e7e7',
			},
		},
	},
	responsive: true,
	scales: {
		x: {
			grid: {
				color: '#e7e7e780',
			},
			stacked: true,
			ticks: {
				color: '#e7e7e7',
			},
		},
		y: {
			grid: {
				color: '#e7e7e780',
			},
			stacked: true,
			ticks: {
				color: '#e7e7e7',
			},
		},
	},
};

export const PaymentDiagram = ({
	totalMortageCost,
	amount,
	paymentLabels,
	paymentData,
}) => {
	const data = {
		labels: paymentLabels,
		datasets: [
			{
				label: 'Regular Payments',
				data: paymentData,
				fill: true,
				backgroundColor: '#e7e7e780',
				borderColor: '#e7e7e7',
			},
		],
	};
	const data2 = {
		labels: ['Regular Payments'],
		datasets: [
			{
				stack: 'stack',
				label: 'Principal Payments',
				data: [amount],
				fill: true,
				backgroundColor: '#e7e7e7',
				borderColor: '#e7e7e7',
			},
			{
				stack: 'stack',
				label: 'Interest Payment',
				data: [totalMortageCost - amount],
				fill: true,
				backgroundColor: '#e7e7e780',
				borderColor: '#e7e7e780',
			},
		],
	};
	return (
		<Grid container direction='row' alignItems='stretch' justify='center'>
			<Grid item xs={12} md={6}>
				<Line options={options} data={data} />
			</Grid>
			<Grid item xs={12} md={6}>
				<Bar options={options2} data={data2} />
			</Grid>
		</Grid>
	);
};
