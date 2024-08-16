const data = {
	moscow: {
		workshops: {
			'workshop1': ['employee1', 'employee2'],
			'workshop2': ['employee1', 'employee3', 'employee4']
		}
	},
	kaluga: {
		workshops: {
			'workshop3': ['employee5', 'employee6'],
			'workshop4': ['employee7', 'employee8', 'employee9']
		}
	}
}

const workshopsName = {
	"workshop1": "Цех 1",
	"workshop2": "Цех 2",
	"workshop3": "Цех 3",
	"workshop4": "Цех 4"
}

const employeesFullName = {
	"employee1": "София Зубова",
	"employee2": "Анна Николаева",
	"employee3": "Артемий Сорокин",
	"employee4": "Валерия Александрова",
	"employee5": "Тимофей Шевцов",
	"employee6": "Полина Мещерякова",
	"employee7": "Ольга Андреева",
	"employee8": "Степан Давыдов",
	"employee9": "Кирилл Малышев"
}

function addListenerToElements() {

	const elementSelectCity = document.getElementById('city');
	elementSelectCity.addEventListener('change', (event) => {
		const city = event.target.value;

		if (city) {
			const workshopSelect = document.getElementById('workshop');

			let workshops = Object.keys(data[city].workshops);

			workshops.forEach((workshop) => {
				const option = document.createElement('option');
				option.value = workshop;
				option.textContent = workshopsName[workshop];
				workshopSelect.appendChild(option);
			})
		}
	})


	const elementSelectWorkshop = document.getElementById('workshop');
	elementSelectWorkshop.addEventListener('change', (event) => {
		const workshop = event.target.value;
		const city = document.getElementById('city').value;

		if (workshop && city) {
			const employeeSelect = document.getElementById('employee');

			let employees = data[city].workshops[workshop];

			employees.forEach((employee) => {
				const option = document.createElement('option');
				option.value = employee;
				option.textContent = employeesFullName[employee];
				employeeSelect.appendChild(option);
			})
		}
	})
}

function saveToCookie() {
	const form = document.getElementById('myForm');
	const city = form.city.value;
	const workshop = form.workshop.value;
	const employee = form.employee.value;
	const brigade = form.brigade.value;
	const shift = form.shift.value;

	const formData = {
		city,
		workshop,
		employee,
		brigade,
		shift
	};

	document.cookie = `formData=${JSON.stringify(formData)};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}