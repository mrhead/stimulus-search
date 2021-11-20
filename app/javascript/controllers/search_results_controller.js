import { Controller } from "@hotwired/stimulus"

const upKey = 38
const downKey = 40
const enterKey = 13
const navigationKeys = [upKey, downKey, enterKey]

export default class extends Controller {
  static classes = [ "current" ]
  static targets = [ "result" ]

  connect() {
    this.currentResultIndex = 0
    this.selectCurrentResult()
  }

  navigateResults(event) {
    if(!navigationKeys.includes(event.keyCode)) {
      return
    }

    event.preventDefault()

    switch(event.keyCode) {
      case downKey:
        this.selectNextResult()
        break;
      case upKey:
        this.selectPreviousResult()
        break;
      case enterKey:
        this.goToSelectedResult()
        break;
    }
  }

  // private

  selectCurrentResult() {
    this.resultTargets.forEach((element, index) => {
      element.classList.toggle(this.currentClass, index == this.currentResultIndex)
    })
  }

  selectNextResult() {
    if(this.currentResultIndex < this.resultTargets.length - 1) {
      this.currentResultIndex++
      this.selectCurrentResult()
    }
  }

  selectPreviousResult() {
    if(this.currentResultIndex > 0) {
      this.currentResultIndex--
      this.selectCurrentResult()
    }
  }

  goToSelectedResult() {
    this.resultTargets[this.currentResultIndex].firstElementChild.click()
  }
}
