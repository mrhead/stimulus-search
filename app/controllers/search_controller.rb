class SearchController < ApplicationController
  def index
    @people = Person.search(params[:query]).limit(10)
    render layout: false
  end
end
