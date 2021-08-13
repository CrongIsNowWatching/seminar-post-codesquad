class TodoCreatorPresenter {
  constructor(props) {
    this.$target = props.$target
    
    this.render(props);
  }
  
  addEvent(queryTarget, event, func) {
    this.$target.querySelector(queryTarget).addEventListener(event, func);    
  }

  render({ $target, handleSubmit, handleChange }) {
    
    const $TodoCreator = /* html */ `
      <div class="description">
        할일을 입력하세요 <input type="text" id="description" />
      </div>
      <div class="date">
        날짜를 입력하세요 <input type="date" id="date" />
      </div>
      <div class="button-area">
        <button id="submit-btn"> 등록하기 </button>
      </div>
    `;    
    
    $target.insertAdjacentHTML("beforeend", $TodoCreator);
    this.addEvent("input#description", "change", handleChange)
    this.addEvent("input#date", "change", handleChange)
    this.addEvent("button#submit-btn", "click", handleSubmit)
  }

}

export default TodoCreatorPresenter;

