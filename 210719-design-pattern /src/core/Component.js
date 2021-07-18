export default class Component {
	constructor($target, props) {
		this.$target = $target;
		this.props = props;
		this.state;
		this.init();
		this.setEvent();
		this.render();
	}
	init() {}

	didMount() {}

	template() {
		return ``;
	}

	render() {
		this.$target.innerHTML = this.template();
		this.didMount();
	}

	setEvent() {}

	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	addEvent(type, selector, callback) {
		const children = [...this.$target.querySelectorAll(selector)];
		const isTarget = target =>
			children.includes(target) || target.closest(selector);

		this.$target.addEventListener(type, e => {
			if (!isTarget(e.target)) return false;
			callback();
		});
	}
}
