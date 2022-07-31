import React from 'react';
import {
	FilterImage,
	Mask,
	Price,
	ProductItem,
	ProductItemBottom,
	ProductItemBottomTop,
	ProductItemCategory,
	ProductItemFooter,
	ProductItemImage,
	ProductItemName,
	ProductItemTop,
	ViewProductBtn,
	PriceLogo,
	PriceWrapper,
	BuyBtn,
	NameWrapper,
	ProductItemDescription,
} from './nft-item.elements';
import { FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NftItem(props) {
	const { item, index } = props;
	return (
		<ProductItem>
			<ProductItemTop>
				<ProductItemImage src={item?.image} alt='' />
				<FilterImage>
					<Mask></Mask>
					<ViewProductBtn>
						<Link
							to={`/nft/${Number(index)}`}
							style={{ textDecoration: 'none', color: 'white' }}>
							View NFT
						</Link>
					</ViewProductBtn>
				</FilterImage>
			</ProductItemTop>

			<ProductItemBottom>
				<ProductItemBottomTop>
					<NameWrapper>
						<ProductItemName>{item?.name}</ProductItemName>
					</NameWrapper>
					<ProductItemDescription>{item?.description}</ProductItemDescription>
				</ProductItemBottomTop>

				<ProductItemFooter>
					<PriceWrapper>
						<PriceLogo
							src='https://cryptologos.cc/logos/internet-computer-icp-logo.png'
							alt=''
						/>
						<Price>Price 0.5</Price>
					</PriceWrapper>
				</ProductItemFooter>
			</ProductItemBottom>
		</ProductItem>
	);
}

export default NftItem;
