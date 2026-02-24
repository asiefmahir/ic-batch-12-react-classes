/**
 *
 * props = {
 *      name: "Shamim Vai",
 *      phone: "34354235120"
 *      email: "shamim@gmail.com",
 *      skills: ["Js", "Wp", "Css"],
 *      interests: ["Chess", "Football"]
 * }
 */

const BioData = (props) => {
	// props ->
	console.log(props, "props");
	const { name, email, phone, address, skills, interests } = props;

	return (
		<div className="bio-data">
			<div className="personal-info">
				<h5>BioData of {name}</h5>
				<p>Phone: {phone}</p>
				<p>email: {email}</p>
				{address && <p>Address: {address}</p>}
			</div>
			<div className="skills">
				<h2>My skills</h2>
				<ul>
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interests</h2>
				<ul>
					{interests.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// function sum(a, b) {
// 	return a + b
// }

// sum(10, 20) -> 30
// sum(100, 200) -> 300

export default BioData;
