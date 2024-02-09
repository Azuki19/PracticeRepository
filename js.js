studentGrades: [100, 50, 65, 70, 85, 96];

const objectGrades = (studentGrades) => {
	for (let index = 0; index < studentGrades.length; index++) {
		const element = studentGrades[index];
		const algoritmGrades = [];

		if (studentGrades[index] > 90) {
			const A = studentGrades[index];
			return;
			console.log(A);
		}

		algoritmGrades.push(A, B, C, D, F);
	}
	return (algoritmGrades = studentGrades[index]);
};

const result = algoritmGrades(studentGrades);
console.log(result);
