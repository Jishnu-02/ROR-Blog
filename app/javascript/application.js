// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


$(document).on('turbolinks:load', function() {
    setTimeout(function() {
      $('.alert').fadeOut();
    }, 3000);
  })