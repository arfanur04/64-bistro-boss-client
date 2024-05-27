import { Link } from "react-router-dom";

const PrimaryButton = ({ text, route }) => {
	return (
		<div className="my-4 text-center">
			<Link to={route ? route : ""}>
				<button className="mt-4 text-center border-0 border-b-4 btn btn-outline">
					{text}
				</button>
			</Link>
		</div>
	);
};

export default PrimaryButton;
