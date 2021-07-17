import React, { useEffect, useState } from 'react'

export default function TotalAmount(props) {
	const [totalAmount, setTotalAmount] = useState(0)
	const [totalTip, setTotalTip] = useState(0.00)
	var amount, tip
	useEffect(() => {
		console.log(props)
		if(!isNaN(props.billAmount) && !isNaN(props.peopleNum) && 
		props.billAmount !== 0 && props.peopleNum !== 0 &&
		props.billAmount !== "" && props.peopleNum !== ""){
			amount = (props.billAmount + ((props.tipPerc * props.billAmount)/100))/props.peopleNum
			tip = ((props.billAmount + ((props.tipPerc * props.billAmount)/100)) - props.billAmount)/props.peopleNum
		}
		setTotalAmount(parseFloat(amount).toFixed(2))
		setTotalTip(parseFloat(tip).toFixed(2))

	}, [props])
	return (
		<div className="total-amount-container">
			<div className="amount-container">
				<div className= "amount-desc">
					<h3>Tip Amount</h3>
					<p>/ person</p>
				</div>
				<h1>${!isNaN(totalTip) ? totalTip : "0.00"}</h1>	
			</div>
			<div className="amount-container">
				<div className= "amount-desc">
					<h3>Total</h3>
					<p>/ person</p>
				</div>
				<h1>${!isNaN(totalAmount) ? totalAmount : "0.00"}</h1>	
			</div>
			<button 
				className="reset-btn"
				onClick={props.handleReset}
			>RESET</button>
		</div>
	)
}
