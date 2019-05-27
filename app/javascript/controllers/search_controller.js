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

    this.abortPreviousFetchRequest()

    this.abortController = new AbortController()
    fetch(url, { signal: this.abortController.signal })
      .then(response => response.text())
      .then(html => {
        this.resultsTarget.innerHTML = html
      })
      .catch(() => {})
  }

  navigateResults(event) {
    if(this.searchResultsController) {
      this.searchResultsController.navigateResults(event)
    }
  }

  // private

  reset() {
    this.resultsTarget.innerHTML = ""
    this.queryTarget.value = ""
    this.previousQuery = null
  }

  abortPreviousFetchRequest() {
    if(this.abortController) {
      this.abortController.abort()
    }
  }

  get query() {
    return this.queryTarget.value
  }

  get searchResultsController() {
    return this.application.getControllerForElementAndIdentifier(this.resultsTarget.firstElementChild, "search-results")
  }
}
