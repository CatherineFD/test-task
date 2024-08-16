<template>
	<form id="myForm" class="form">
		<Select :title="'Выбирите город:'" :idSelect="'city'" :options="cities" @changeSelect="changeSelectCity"></Select>

		<Select :title="'Выбирите цех:'" :idSelect="'workshop'" :options="formattedWorkShops"
			@changeSelect="changeSelectWorkShop"></Select>

		<Select :title="'Выбирите сотрудников:'" :idSelect="'employee'" :options="formattedEmployees"
			@changeSelect="changeSelectEmployee"></Select>

		<Select :title="'Выбирите бригаду:'" :idSelect="'brigade'" :options="brigades"
			@changeSelect="changeSelectBrigade"></Select>

		<Select :title="'Выбирите смену:'" :idSelect="'shift'" :options="shifts" @changeSelect="changeSelectShift"></Select>

		<div>
			<Button :title="'Сохранить'" @click="saveToCookie"></Button>
		</div>
	</form>

</template>

<script>
import Select from './UI/Select.vue';
import Button from './UI/Button.vue'

export default {
	components: {
		Select,
		Button
	},
	data() {
		return {
			city: '',
			workshop: '',
			employee: '',
			brigade: '',
			shift: '',
			cities: [{ name: 'Москва', value: 'moscow' },
			{ name: 'Калуга', value: 'moscow' }
			],
			dataWork: {
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
			},
			workshopsName: {
				"workshop1": "Цех 1",
				"workshop2": "Цех 2",
				"workshop3": "Цех 3",
				"workshop4": "Цех 4"
			},
			employeesFullName: {
				"employee1": "София Зубова",
				"employee2": "Анна Николаева",
				"employee3": "Артемий Сорокин",
				"employee4": "Валерия Александрова",
				"employee5": "Тимофей Шевцов",
				"employee6": "Полина Мещерякова",
				"employee7": "Ольга Андреева",
				"employee8": "Степан Давыдов",
				"employee9": "Кирилл Малышев"
			},
			brigades: [
				{ value: 'firstBrigade', name: 'Первая' },
				{ value: 'secondBrigade', name: 'Вторая' },
				{ value: 'thirdBrigade', name: 'Третья' }
			],
			shifts: [
				{ value: 'Morning', name: 'Утреняя' },
				{ value: 'Afternoon', name: 'Дневная' },
				{ value: 'Night', name: 'Ночная' }
			]
		}
	},
	methods: {
		changeSelectCity(data) {
			this.city = data;
		},
		changeSelectWorkShop(data) {
			this.workshop = data;
		},
		changeSelectEmployee(data) {
			this.employee = data
		},
		changeSelectBrigade(data) {
			this.brigade = data;
		},
		changeSelectShift(data) {
			this.shift = data;
		},
		saveToCookie() {
			const formData = {
				city: this.city,
				workshop: this.workshop,
				employee: this.employee,
				brigade: this.brigade,
				shift: this.shift
			};

			document.cookie = `formData=${JSON.stringify(formData)};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
		}
	},
	watch: {

	},
	computed: {
		formattedWorkShops() {
			const workshops = this.dataWork[this.city]?.workshops || {};
			return Object.keys(workshops).map(key => ({
				value: key,
				name: this.workshopsName[key]
			}));
		},
		formattedEmployees() {
			const employees = this.dataWork[this.city]?.workshops[this.workshop] || []

			return employees.map(key => ({
				value: key,
				name: this.employeesFullName[key]
			}))
		}
	}

}
</script>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	width: 40%;
}
</style>