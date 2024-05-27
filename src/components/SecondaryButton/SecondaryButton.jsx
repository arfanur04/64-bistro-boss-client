import { Link } from "react-router-dom";

const SecondaryButton = ({ text, route }) => {
	return (
		<div className="my-4 text-center">
			<Link to={route ? route : ""}>
				<button className="mt-4 text-center border-0 border-b-4 btn btn-outline text-[#BB8506] bg-[#E8E8E8] text-xl font-medium hover:text-[#BB8506]">
					{text}
				</button>
			</Link>
		</div>
	);
};

export default SecondaryButton;
