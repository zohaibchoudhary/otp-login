import React, { useState } from "react";
import Otp from "./otp";

function Phone() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [showOtp, setShowOtp] = useState(false);

	const handlePhoneNumberSubmit = (e) => {
		e.preventDefault();
		const regex = /^\d{5}$/;
		if (phoneNumber.length === 5 && regex.test(phoneNumber)) {
			setShowOtp(true);
		}
	};

  const handleOtpSubmit = () => {
    console.log('Login successful');
  }

	return (
		<div>
			{!showOtp ? (
				<form onSubmit={handlePhoneNumberSubmit}>
					<input
						type="text"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</form>
			) : (
				<div>
					<p>Enter otp sent to {phoneNumber}</p>
          <Otp
          length={4}
          onOtpSubmit={handleOtpSubmit}
          />
				</div>
			)}
		</div>
	);
}

export default Phone;
