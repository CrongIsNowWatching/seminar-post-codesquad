import Component from "../core/Component.js";
import Card from "./Card.js";
export default class CardList extends Component {
	init() {
		const { data } = this.props;
		this.state = { data };
	}

	didMount() {
		const { data } = this.state;
		data.forEach(
			x =>
				new Card(this.$target, {
					title: x.title,
					imageUrl: x.imageUrl,
					lecturer: x.lecturer,
				})
		);
	}

	introduceLecture(lecturer) {
		alert(`안녕하세요 저는 ${lecturer}입니다~~~`);
	}
}
