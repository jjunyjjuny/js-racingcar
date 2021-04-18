import Component from "../../core/Component.js";
export default class AttemptCount extends Component {
  selectPropsToUse() {
    this.selfProps = {};
  }
  getTemplate() {
    return `
    <p>시도할 횟수를 입력해주세요.</p>
    <div class="d-flex">
      <input type="number" class="w-100 mr-2" placeholder="시도 횟수" />
      <button type="button" class="btn btn-cyan">확인</button>
    </div>
   `;
  }
}
