import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "query", "results" ]

  disconnect() {
    this.reset()
  }

  fetchResults() {
    if(this.query == "") {
      this.reset()
      return
    }

    if(this.query == this.previousQuery) {
      return
    }
    this.previousQuery = this.query

    const url = new URL(this.data.get("url"))
    url.searchParams.append("query", this.query)

    fetch(url)
      .then(response => response.text())
      .then(html => {
        this.resultsTarget.innerHTML = html
      })
  }

  reset() {
    this.resultsTarget.innerHTML = ""
    this.queryTarget.value = ""
    this.previousQuery = null
  }

  navigateResults(event) {
    if(this.searchResultsController) {
      this.searchResultsController.navigateResults(event)
    }
  }

  get query() {
    return this.queryTarget.value
  }

  get searchResultsController() {
    return this.application.getControllerForElementAndIdentifier(this.resultsTarget.firstElementChild, "search-results")
  }
}
