import request from "/util/commons.js";
import eventController from "/util/eventController.js";

class Image {
  constructor({ $ul }) {
    this.$ul = $ul;
    this.setState();
  }

  async setState() {
    if (!localStorage.getItem("imageData")) {
      await this.setImages();
    }

    const throttle = eventController(this.setImages.bind(this));
    throttle();
  }

  async setImages() {
    const imageData = await request();
    // caching
    localStorage.setItem("imageData", JSON.stringify(imageData));
    this.render();
  }

  render() {
    this.$ul.innerHTML = "";
    // 캐싱한 걸 렌더해 줄거니까

    // 리액트의 경우 이벤트를 자식에 거니까
    // li에 이벤트 핸들러 거는 것이 좀 더 가깝 <- 이것도 좋은 듯... 야스..

    const $imageData = JSON.parse(localStorage.getItem("imageData"));
    $imageData.forEach((image) => {
      const { id, url } = image;

      const $li = `
            <li class="imageData" data-id=${id} data-url=${url}>
                <p>${id}</p>
                <img src=${url} />
            </li>
        `;

      this.$ul.insertAdjacentHTML("beforeend", $li);
    });
  }
}

export default Image;
