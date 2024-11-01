interface CustomBackgroundProps {
	backgroundType: string; // Add backgroundType prop
}

const CustomBackground = ({ backgroundType }: CustomBackgroundProps) => {
	let backgroundStyle = {};

	// Set the background style based on the selected background type
	switch (backgroundType) {
		case "fullcourt":
			backgroundStyle = {
				backgroundImage: "url('/images/bigfullcourt.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			};
			break;
		case "combo":
			backgroundStyle = {
				backgroundImage: "url('/images/doublecourt.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			};
			break;

		default:
			backgroundStyle = {
				backgroundImage: "url('/images/bighalfcourt.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			};
	}

	return <div style={{ width: "100%", height: "100%", ...backgroundStyle }} />;
};

export default CustomBackground;
