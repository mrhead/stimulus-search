class Person < ApplicationRecord
  scope :search, -> (name) { where("LOWER(name) LIKE ?", "%#{name.downcase}%") }
end
