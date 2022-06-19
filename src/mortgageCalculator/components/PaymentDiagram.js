import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// chart.js
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
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
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};
export const options2 = {
	plugins: {
		title: {
			display: true,
			text: 'Chart.js Bar Chart - Stacked',
		},
	},
	responsive: true,
	scales: {
		x: {
			stacked: true,
		},
		y: {
			stacked: true,
		},
	},
};

export const PaymentDiagram = () => {
	const data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{
				label: 'First dataset',
				data: [33, 53, 85, 41, 44, 65],
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
		],
	};
	const data2 = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{
				label: 'First dataset',
				data: ['100', '200'],
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
		],
	};
	return (
		<Grid container direction='row' alignItems='center' justify='center'>
			<Grid item xs={12} md={6}>
				<Line options={options} data={data} />
			</Grid>
			<Grid item xs={12} md={6}>
				<Bar options={options2} data={data2} />
			</Grid>
		</Grid>
	);
};
