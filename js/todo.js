$(document).ready(function(){
  // call functions here
  addItem()
})

// define functions here
function addItem () {
  $('form').submit(function (e) {
    var $list = $('#list ol'),
    $todo = $('#item').val()

    $list.append(`<li>${$todo}</li>`)
    $('form').trigger('reset')
    e.preventDefault()
  })
}
