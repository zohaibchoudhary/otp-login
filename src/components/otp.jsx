import React, { useEffect, useRef, useState } from "react";

function Otp({ length, onOtpSubmit }) {
	const [otp, setOtp] = useState(new Array(length).fill(""));

	const inputRef = useRef([]);

	useEffect(() => {
		if (inputRef.current[0]) {
			inputRef.current[0].focus();
		}
	}, []);

	const handleOtpChange = (index, e) => {
		const value = e.target.value;
		const newOtp = [...otp];

		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);

		if (value && index < length - 1 && inputRef.current[index + 1]) {
			inputRef.current[index + 1].focus();
		}

    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[otp.indexOf('')].focus();
    }

		const combinedotp = newOtp.join("");
		if (combinedotp.length === length) {
			onOtpSubmit();
		}
	};

	const handleOtpClick = (index) => {
		console.log("Index", index);
		inputRef.current[index].setSelectionRange(1, 1);

		if (index > 0 && !otp[index - 1]) {
			inputRef.current[otp.indexOf("")].focus();
		}
	};

	// backspace
	const handleKeyDown = (index, e) => {
		if (
			e.key === "Backspace" &&
			!otp[index] &&
			index > 0 &&
			inputRef.current[index - 1]
		) {
			inputRef.current[index - 1].focus();
		}
	};

	return (
		<div>
			{otp.map((value, index) => (
				<input
					key={index}
					type="text"
					className="otp"
					value={value}
					onChange={(e) => handleOtpChange(index, e)}
					onClick={() => handleOtpClick(index)}
					onKeyDown={(e) => handleKeyDown(index, e)}
					ref={(input) => (inputRef.current[index] = input)}
				/>
			))}
		</div>
	);
}

export default Otp;
