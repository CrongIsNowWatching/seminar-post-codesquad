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
	render() {
		this.$target.insertAdjacentHTML("beforeend", this.template());
	}
	template() {
		const { title, imageUrl, lecturer } = this.state;
		return `
				<li><img src = ${imageUrl} /><div>${title}</div>
          <div>강사: ${lecturer}
          </div></li>`;
	}
}
