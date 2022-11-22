require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driver = ENV["CI"] ? :headless_chrome : :chrome
  driven_by :selenium, using: driver, screen_size: [1400, 1400]
end
