import { isEmpty, includes, without } from 'lodash';

class FieldsValidator {
	selectors: string[];
	errorClass: string;
	els: any[];

	constructor(selectors) {
		this.selectors = selectors;
		this.errorClass = 'has-warning';
	}

	initNodes = () => {
		this.els = this.selectors.map(selector => {
			return document.getElementById(selector);
		})
	}

	checkFields = () => {
		let result = false;
		this.initNodes();

		if (!(isEmpty(this.els))) {
			result = this.validateFields();
		}

		return result;
	}

	validateFields = () => {
		let result = true;

		this.els.forEach(el => {
			if (!isEmpty(el.value)) {
				result = result && true;
				this.unhighlighElement(el);
			} else {
				result = result && false;
				this.highlightElement(el);
			}
		})

		return result;
	}

	unhighlighElement = (el) => {
		let parent = el.parentElement;
		let classList = parent.classList;
		let newClassList;

		if (includes(classList, this.errorClass)) {
			newClassList = without(classList, this.errorClass);
			parent.classList = newClassList;
		}
	}

	highlightElement = (el) => {
		let parent = el.parentElement;
		let classList = parent.classList;
		let newClassList;

		if (!includes(classList, this.errorClass)) {
			classList.add(this.errorClass);
			parent.classList = classList;
		}
	}


}

export default FieldsValidator;