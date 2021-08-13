import "./Todo.scss";

class TodoPresenter {
  constructor(props) {
    this.$target = props.$target
    this.render(props);
  }

  addEvent(queryTarget, event, func) {
    
    this.$target.querySelector(queryTarget).addEventListener(event, func);
  }

  calculateRemainDate(date) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth()+1;
    const dd = today.getDate();
    
    const parsedToday = Date.parse(`${yyyy}-${mm}-${dd}`);
    const parsedTarget = Date.parse(date);

    return Math.floor((parsedTarget - parsedToday)/1000/60/60/24);
  }
  doneRender({todo, handleModify }){
    const $DoneTodo = /* html */`
      <div class="check-area">
        <input type="checkbox" id="checkbox" checked="${todo.isDone}"/>
      </div>
      <div class="contet-area is-done">
        <span class="description"> ${todo.description} </span>
      </div>
      ${
        todo.date &&
        `
          <div class="date-area is-done">
            <span class="date"> ${this.calculateRemainDate(todo.date)}일 남음 </span>
          </div>
        ` || ""
      }
    `;
    
    this.$target.insertAdjacentHTML("beforeend", $DoneTodo);
    this.addEvent("input#checkbox", "click", (e) => handleModify("is-done", e))
  }
  modifierRender({todo, handleModify, handleChange }) {
    const $ModifyTodo = /* html */ `
      <div class="contet-area">
        <input type="text" id="description" value="${todo.description}" />
      </div>
      ${
        todo.date 
        &&`
          <div class="date-area">
            <input type="date" id="date" value="${todo.date}" />
          </div>
        ` 
        ||`
          <div class="date-area">
            <input type="date" id="date" />
          </div>
        `
      }
      <div class="button-area">
        <button id="modify-end-btn">확인</button>
      </div>
    `;
    
    this.$target.insertAdjacentHTML("beforeend", $ModifyTodo);
    
    this.addEvent("input#description", "change", (e) => handleChange(e))
    this.addEvent("input#date", "change", handleChange)
    this.addEvent("button#modify-end-btn", "click", () => handleModify("modify-end"))
  }
  
  render({ todo, handleModify }){
    if (todo.isDone) {
      this.doneRender({ todo, handleModify });
      return;
    }
    const $Todo = /* html */ `
      <div class="check-area">
        <input type="checkbox" id="checkbox" />
      </div>
      <div class="contet-area">
        <span class="description"> ${todo.description} </span>
      </div>
      ${
        todo.date &&
        `
          <div class="date-area">
            <span class="date"> ${this.calculateRemainDate(todo.date)}일 남음 </span>
          </div>
        ` || ""
      }
      <div class="button-area">
        <button id="modify-start-btn">수정</button>
        <button id="delete-btn">삭제</button>
      </div>
    `;
    
    
    if (!todo.isModifing) {
      this.$target.insertAdjacentHTML("beforeend", $Todo); 
    }
    
    this.addEvent("button#modify-start-btn", "click", () => handleModify("modify-start"))
    this.addEvent("button#delete-btn", "click", () => handleModify("delete"));
    this.addEvent("input#checkbox", "click", (e) => handleModify("is-done", e))
    
  }

}

export default TodoPresenter;