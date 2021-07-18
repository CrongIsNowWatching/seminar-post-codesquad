import Component from "../core/Component.js";
import CardList from "../components/CardList.js";

export default class MainPage extends Component {
	template() {
		return `
		<div class = "title">인프런 - 기술을 나누고 배워요</div>
		<div class="main-container">
    <ul class="card-container"></ul>
    </div>`;
	}

	didMount() {
		const $cardContainer = this.$target.querySelector(".card-container");
		new CardList($cardContainer);
	}
}
