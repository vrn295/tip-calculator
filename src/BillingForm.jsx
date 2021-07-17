import React, { useState } from 'react'
import TotalAmount from './TotalAmount'
// import './BillingForm.css';

export default function BillingForm() {
	const [billAmount, setBillAmount] = useState()
	const [tipPerc, setTipPerc] = useState(5)
	const [peopleNum, setPeopleNum] = useState()

	const handlleBill = (item, event) => {
		if(event.target.value >= 0){
			const value = event.target.value ? parseInt(event.target.value) : ""
			item === "bill" ? setBillAmount(value)
			: item === "tip" ? setTipPerc(value)
			: setPeopleNum(value)
		}
	}
	const handleTip = (value) => {
		document.getElementById("billing-form-custom-input").value = ""
		setTipPerc(parseInt(value))
	}
	
	const handleReset = () => {
		setBillAmount(0)
		setTipPerc(5)
		setPeopleNum(0)
		document.getElementById("billing-form-custom-input").value = ""
	}
	
	return (
		<div className="billing-form-container">
			<form className="billing-form" >
				<div className="input-container">
					<label>
						Bill:
					</label>
					<input 
						type="number" 
						value={billAmount}
						onChange={(e) =>handlleBill("bill", e)} 
						id="billing-form-bill"
					/>
				</div>
				<div className="input-container">
					<label>
						Select Tip %:
					</label>
					<div
						className="billing-form-tip"
						value={tipPerc}
					>
						<div className={`tip-container${tipPerc === 5 ? " selected-tip": ""}`} onClick={() => handleTip("5")}>
							5%
						</div>
						<div className={`tip-container${tipPerc === 10 ? " selected-tip": ""}`} onClick={() => handleTip("10")}>
							10%
						</div>
						<div className={`tip-container${tipPerc === 15 ? " selected-tip": ""}`} onClick={() => handleTip("15")}>
							15%
						</div>
						<div className={`tip-container${tipPerc === 25 ? " selected-tip": ""}`} onClick={() => handleTip("25")}>
							25%
						</div>
						<div className={`tip-container${tipPerc === 50 ? " selected-tip": ""}`} onClick={() => handleTip("50")}>
							50%
						</div>
						<input 
							type="number" 
							id="billing-form-custom-input"
							placeholder="Custom"
							onChange={(e) =>handlleBill("tip", e)} 
						/>
					</div>
				</div>
				<div className="input-container">
					<label>
						No. of People:
					</label>	
					<input 
						type="number" 
						value={peopleNum}
						onChange={(e) =>handlleBill("people", e)} 
						id="billing-form-bill" 
					/>
				</div>
			</form>
			<TotalAmount 
				billAmount={billAmount}
				tipPerc={tipPerc}
				handleReset={handleReset}
				peopleNum={peopleNum}
			/>
		</div>
	)
}
