import Component from "../core/Component.js";
import data from "../data.js";
import Card from "./Card.js";
export default class CardList extends Component {
	init() {
		const { lectures } = data;

		this.state = {
			data: lectures,
		};
	}

	didMount() {
		const { data } = this.state;
		data.forEach(
			x =>
				new Card(this.$target, {
					title: x.title,
					imageUrl: x.imageUrl,
					lecturer: x.lecturer,
					eventHandler: this.introduce.bind(this),
				})
		);
	}

	introduce(name) {
		alert(`🎤안녕하세요 저는 ${name}입니다~~⭐️🌈`);
	}
}
