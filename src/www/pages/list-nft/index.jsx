import React, { useEffect, useState } from 'react';
import NftItem from '../../components/nft-item';
import {
	Container,
	ListNftWrapper,
	Title,
	TopWrapper,
} from './list-nft.elements';
import { customAxios } from '../../utils/custom-axios';
import { useCanister, useConnect } from '@connect2ic/react';
import { Principal } from '@dfinity/principal';

function ListNft() {
	const { principal } = useConnect();
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);

	return (
		<Container>
			<TopWrapper>
				<Title>Explore No 1</Title>
			</TopWrapper>

			<ListNftWrapper>
				{listAllNFt.map((item, index) => (
					<NftItem item={item} key={index} index={index} />
				))}
			</ListNftWrapper>
		</Container>
	);
}

export default ListNft;
