const grandParent = () => {
	let num1 = 10;
	parent(num1);
	siblingToParent();
};

const parent = (num1) => {
	let num2 = 20;
	child(num1, num2);
};

const siblingToParent = () => {};

const child = (num1, num2) => {
	let num3 = 30;
	return num1 + num2 + num3;
};

grandParent(); // 60

// child -> parent
// child -> grandParent
// parentFunction -> Directchild

// parent component -> direct child component
