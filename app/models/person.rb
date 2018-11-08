class Person < ApplicationRecord
  scope :search, -> (name) { where("name ILIKE ?", "%#{name}%") }
end
