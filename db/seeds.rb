1000.times do
  Person.create(name: Faker::Name.name)
end
