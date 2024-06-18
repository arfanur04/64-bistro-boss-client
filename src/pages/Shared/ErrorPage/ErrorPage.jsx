import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "grid",
				placeContent: "center",
				height: "60vh",
				textAlign: "center",
			}}
		>
			<h1>Oh no! An Error Found</h1>
			<br />
			{error && (
				<div>
					<p style={{ color: "red" }}>{error.statusText || error.message}</p>
					<p style={{ color: "red", fontSize: "50px" }}>{error.status}</p>
				</div>
			)}
			<div>
				<button
					onClick={() => navigate(-1)}
					style={{ textDecoration: "underline", marginRight: "16px" }}
				>
					Go Back
				</button>
				<Link to={"/"}>
					<button style={{ textDecoration: "underline" }}>Home</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
