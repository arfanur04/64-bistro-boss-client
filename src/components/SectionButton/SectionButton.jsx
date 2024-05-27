const SectionButton = ({ text }) => {
	return (
		<div className="my-4 text-center">
			<button className="mt-4 text-center border-0 border-b-4 btn btn-outline">
				{text}
			</button>
		</div>
	);
};

export default SectionButton;
