import Component from "../core/Component.js";
import CardList from "../components/CardList.js";
import data from "../data.js";
export default class MainPage extends Component {
	init() {
		const { lectures } = data;

		this.state = {
			data: lectures,
		};
	}
	template() {
		return `
		<div class = "title">인프런 - 기술을 나누고 배워요</div>
		<div class="main-container">
    <ul class="card-container"></ul>
    </div>`;
	}

	didMount() {
		const $listContainer = this.$target.querySelector(".card-container");
		new CardList($listContainer, this.state);
	}

	introduceLecture(lecturer) {
		alert(`안녕하세요 저는 ${lecturer}입니다~~~`);
	}
}
