import "./App.css";
import BioData from "./components/BioData";

const bioDataInfos = [
	{
		name: "Mahir Asief",
		phone: "+4245435435",
		email: "asiefmahir1@gmail.com",
		skills: ["Js", "React"],
		interests: ["Football", "Chess", "System Design"],
		address: "Tejgaon, Dhaka",
	},
	{
		name: "Shamim Vai",
		phone: "+245412.2.",
		email: "shamim@gmail.com",
		skills: ["Js", "React", "CSS", "WP"],
		interests: ["Football", "CRICKET"],
	},
	{
		name: "Riad Vai",
		phone: "+245412.2.",
		email: "shamim@gmail.com",
		skills: ["Js", "React", "CSS", "WP"],
		interests: ["Football", "CRICKET"],
	},
];

function App() {
	return (
		<div className="app">
			<h2>BioData Demo App</h2>
			{bioDataInfos.map((bioData) => (
				<div>
					<BioData
						key={bioData.name}
						name={bioData.name}
						phone={bioData.phone}
						email={bioData.email}
						skills={bioData.skills}
						interests={bioData.interests}
					/>
					<hr />
				</div>
			))}
		</div>
	);
}

// BioData()

// react component
// 3 rule
// 1) A component must be a function
// 2) That function should return "something"
// 3) That "something" must be some html-ish code (jsx)
// react component
export default App;
