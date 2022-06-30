import React, { useState, useEffect } from 'react';
// Components
import { NFTAsset } from './components/NFTAsset';
// Backend
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

export const NFTsGalery = () => {
	const classes = {
		container: {
			overflowY: 'auto',
			border: '1px solid #DDD',
			borderRadius: '1rem',
			backdropFilter: 'blur(20px)',
			boxShadow: '1px 2px 3px rgb(0 0 0 / 50%)',
		},
		white: {
			color: 'white',
		},
	};
	////////////// state/control //////////////
	const [nftCollection, setNftCollection] = useState([]);
	// Wallet
	const [openSeaWallet] = useState(
		'0xbacce03bccd32159cf91cc29a05468265bf7e015'
	);

	useEffect(() => {
		loadWalletAssets();
		// eslint-disable-next-line
	}, []);

	////////////////////////////////////
	const loadWalletAssets = async () => {
		await fetch(
			`https://api.opensea.io/api/v1/assets?owner=${openSeaWallet}&order_direction=desc&offset=0&limit=50`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'X-API-KEY': '',
				},
			}
		)
			.then((response) => response.json())
			.then((response) => {
				if (response.assets) {
					let assets = response.assets;
					setNftCollection([...nftCollection, ...assets]);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<Container
			style={{
				minHeight: 'calc(100vh - 60px)',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
			>
				<Grid item xs={12} md={10}>
					<Grid
						container
						direction='row'
						alignItems='center'
						justifyContent='center'
						sx={classes.container}
					>
						<Grid item xs={12} className={'p-6 pt-8'}>
							<Typography
								align='center'
								className={'font-bold text-24'}
								sx={{ color: 'white' }}
							>
								NFT gallery
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Divider sx={{ background: 'white' }} />
						</Grid>
						<Grid item xs={12} className='pb-2' />
						{nftCollection.map((nft, index) => (
							<Grid
								key={index}
								item
								xs={6}
								md={3}
								className={'p-2 md:p-4 flex items-center justify-center'}
							>
								<NFTAsset asset={nft} />
							</Grid>
						))}
						{/* {selectedNft ? (
					<NftInfoDialog
						nftInfo={selectedNft.PK + '/' + selectedNft.SK + '#'}
						open={selectedNft}
						onClose={() => setSelectedNft(null)}
						picture={selectedNft.image}
						// personalization={profile.format}
						tabs={profile.tabs}
					/>
				) : null} */}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};
