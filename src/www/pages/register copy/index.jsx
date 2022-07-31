import React from 'react';
import './update.css';

function Update() {
	return (
		<div class='register'>
			<h1 class='title'>Update</h1>
			<form>
				<div class='form-control'>
					<label class='left-column label-control'>First Name </label>
					<input
						class='right-colum'
						type='text'
						name='firstname'
						id='firstname'
					/>
				</div>
				<div class='form-control'>
					<label class='left-column label-control'>Last Name </label>
					<input
						class='right-colum'
						type='text'
						name='lastname'
						id='lastname'
					/>
				</div>
				<div class='form-control'>
					<label class='left-column label-control'>Sex </label>
					<div class='form-check'>
						<input type='radio' name='sex' id='true' value='true' />
						<label class='label'>Male </label>
					</div>
					<div class='form-check'>
						<input type='radio' name='sex' id='false' value='false' />
						<label class='label'>Female </label>
					</div>
				</div>
				<div class='form-control'>
					<label class='left-column label-control'>Date of Birth </label>
					<input
						class='right-colum'
						type='date'
						name='birthday'
						id='birthday'
					/>
				</div>
				<div class='form-control'>
					<label class='left-column label-control'>Phone </label>
					<input class='right-colum' type='text' name='phone' id='phone' />
				</div>
				<div class='form-control'>
					<label class='left-column label-control'>Address</label>
					<input class='right-colum' type='text' name='address' id='address' />
				</div>
				<div class='form-button'>
					<button type='submit' class='button-save'>
						{' '}
						Save{' '}
					</button>
					<button type='submit' class='button-cancel'>
						{' '}
						Cancel{' '}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Update;
