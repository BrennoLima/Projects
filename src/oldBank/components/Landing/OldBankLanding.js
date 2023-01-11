import React from 'react';
// Components
import { OldBankNavBar } from '../OldBankNavBar';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section6 } from './Section6';
//Material UI
import Grid from '@mui/material/Grid';
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/////
export const OldBankLanding = () => {
	return (
		<Grid container direction='row' alignItems='center' justify='center'>
			{/**
			 * Navbar
			 */}
			<OldBankNavBar />
			{/**
			 * Section 1
			 */}
			<Section1 />
			{/**
			 * Section 2
			 */}
			<Section2 />
			{/**
			 * Section 3
			 */}
			<Section3 />
			{/**
			 * Section 4
			 */}
			<Section4 />
			{/**
			 * Section 6
			 */}
			<Section6 />
			{/**
			 * Section 5
			 */}
			<Section5 />
		</Grid>
	);
};
