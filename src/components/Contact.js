const Contact = () => {
	return (
		<div className="m-4 p-4">
			<h1 className="text-center font-bold text-3xl">Contact Us!!</h1>
			<div className="m-4 p-4 justify-center text-center">
				<input
					type="text"
					placeholder="Name"
					className="border border-black p-2 m-2 rounded-sm"
				/>
				<input
					type="text"
					placeholder="Message"
					className="border border-black p-2 m-2 rounded-sm"
				/>
				<button className="p-2 m-2 border border-black rounded-lg">
					Submit
				</button>
			</div>
		</div>
	);
};

export default Contact;
