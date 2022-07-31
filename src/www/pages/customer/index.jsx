import React, { useEffect, useState } from 'react';
import './customer.css';
import { customAxios } from '../../utils/custom-axios';
import { useCanister, useConnect } from '@connect2ic/react';
import { Principal } from '@dfinity/principal';
import { Link } from 'react-router-dom';

function Customer() {
	const { principal } = useConnect();
	const [listCustomer, setListCustomer] = useState([]);

	return (
		<div style={{ flex: 1 }}>
			<div
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					justifySelf: 'center',
					flexDirection: 'column',
					flex: 1,
				}}>
				<button
					style={{
						width: 170,
						height: 50,
						margin: 20,
						backgroundColor: 'white',
						borderRadius: 10,
					}}>
					Expand customer
				</button>

				<div
					style={{
						backgroundColor: 'white',
						borderRadius: 10,
						display: 'flex',
						padding: 10,
						marginBottom: 20,
					}}>
					<table
						style={{
							fontFamily: 'Arial, Helvetica, sans-serif',
							borderCollapse: 'collapse',
							width: '100%',
						}}
						border='1'
						id='customers'>
						<thead>
							<th width='5%'>ID</th>
							<th width='30%'>Name</th>
							<th width='15%'>Birthday</th>
							<th width='15%'>Phone</th>
							<th width='15%'>Sex</th>
							<th width='20%'></th>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>ThangNNC</td>
								<td>12-02-2000</td>
								<td>0123456789</td>
								<td>Nam</td>
								<td>
									<button className='btn-update'>Update</button>
									<button className='btn-delete'>Delete</button>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>ThangNNC</td>
								<td>12-02-2000</td>
								<td>0123456789</td>
								<td>Nam</td>
								<td>
									<button className='btn-update'>Update</button>
									<button className='btn-delete'>Delete</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class='div-center register'>
					<Link to='register' style={{ color: 'black' }}>
						<button class='btn-submit'>Register</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Customer;
