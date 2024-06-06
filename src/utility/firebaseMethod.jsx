import Swal from "sweetalert2";

export const logoutFn = (logOut) => {
	logOut()
		.then(() => {})
		.catch((error) => {
			console.error("error: ", error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.message}`,
			});
		});
};
