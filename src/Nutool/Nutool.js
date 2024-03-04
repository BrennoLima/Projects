import React, { useEffect } from 'react';
import { Meal } from './Meal';
import axios from 'axios';

export const Nutool = () => {
	const getFood = async () => {
		const url =
			'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese';
		axios.get(url).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<div>
			<Meal />
		</div>
	);
};
