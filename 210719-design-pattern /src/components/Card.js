import Component from "../core/Component.js";
export default class Card extends Component {
	init() {
		const { title, imageUrl, lecturer } = this.props;
		this.state = {
			title,
			imageUrl,
			lecturer,
		};
	}

	template() {
		const { title, imageUrl, lecturer } = this.state;
		return `
				<li id=${lecturer}><img src = ${imageUrl} />
				<div>${title}</div>
          <div>강사: ${lecturer}
          </div></li>`;
	}

	render() {
		this.$target.insertAdjacentHTML("beforeend", this.template());
	}

	setEvent() {
		const { eventHandler } = this.props;
		const { lecturer } = this.state;

		this.addEvent("click", `#${lecturer}`, () => {
			eventHandler(lecturer);
		});
	}
	
}
