import React, { useEffect, useState } from 'react';
import './register.css';

import { Upload, message, Form, Input, Button, Skeleton, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { client } from '../../utilities/ipfs';
import { Principal } from '@dfinity/principal';
import { customAxios } from '../../utils/custom-axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { withContext } from '../../hooks';
import { Upload, message, Form, Input, Button, Skeleton, Select } from 'antd';

const { Dragger } = Upload;
const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';

const IPFS_LINK = 'https://dweb.link/ipfs/';

function Register() {
	const { principal } = useConnect();
	const [superheroes, { loading, error }] = useCanister('superheroes');

	const onFinish = async (values) => {
		console.log('====> ', values);
		toast('Create customer!!!');
		const nFile = new File(
			[
				JSON.stringify({
					fistName: values?.fistName,
					lastName: values?.lastName,
					sex: values?.sex,
					datOf: values?.datOf,
					phone: values?.phone,
					addres: values?.addres,
				}),
			],
			`${values?.phone}.json`,
			{ type: 'text/plain' }
		);
		const metadataCID = await client.put([nFile]);
		toast('IPFS success!!!');

		const res = await superheroes.addTodo(Principal.fromText(principal), [
			{ tokenUri: `${IPFS_LINK}${metadataCID}/${values?.phone}.json` },
		]);
		toast('Create customer success!!!');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className='register'>
			<h1 className='title'>Register</h1>

			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<div>
					<Form.Item
						name='fistName'
						rules={[{ required: true, message: 'First name' }]}>
						<Input size='large' placeholder='First name' />
					</Form.Item>

					<Form.Item name='lastName'>
						<Input size='large' placeholder='lastName' />
					</Form.Item>

					<Form.Item name='sex'>
						<Input size='large' placeholder='sex' />
					</Form.Item>
					<Form.Item name='datOf'>
						<Input size='large' placeholder='datOf' />
					</Form.Item>
					<Form.Item name='phone'>
						<Input size='large' placeholder='Your phone' />
					</Form.Item>
					<Form.Item name='addres'>
						<Input size='large' placeholder='Adress' />
					</Form.Item>
					<div>
						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
						</Form.Item>
					</div>
				</div>
			</Form>

			{/* <form onSubmit={onFinish}>
				<div className='form-control'>
					<label className='left-column label-control'>First Name </label>
					<input
						className='right-colum'
						type='text'
						name='fistName'
						id='firstname'
					/>
				</div>
				<div className='form-control'>
					<label className='left-column label-control'>Last Name </label>
					<input
						className='right-colum'
						type='text'
						name='lastname'
						id='lastname'
					/>
				</div>
				<div className='form-control'>
					<label className='left-column label-control'>Sex </label>
					<div className='form-check'>
						<input type='radio' name='sex' id='true' value='true' />
						<label className='label'>Male </label>
					</div>
					<div className='form-check'>
						<input type='radio' name='sex' id='false' value='false' />
						<label className='label'>Female </label>
					</div>
				</div>
				<div className='form-control'>
					<label className='left-column label-control'>Date of Birth </label>
					<input
						className='right-colum'
						type='date'
						name='datOf'
						id='birthday'
					/>
				</div>
				<div className='form-control'>
					<label className='left-column label-control'>Phone </label>
					<input className='right-colum' type='text' name='phone' id='phone' />
				</div>
				<div className='form-control'>
					<label className='left-column label-control'>Address</label>
					<input
						className='right-colum'
						type='text'
						name='addres'
						id='address'
					/>
				</div>
				<div className='form-button'>
					<button type='submit' className='button-save'>
						{' '}
						Save{' '}
					</button>
					<button type='submit' className='button-cancel'>
						{' '}
						Cancel{' '}
					</button>
				</div>
			</form> */}
		</div>
	);
}

export default Register;
