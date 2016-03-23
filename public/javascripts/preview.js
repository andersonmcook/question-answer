;(function () {
  $(document).ready(function() {
    console.log('in preview.js')

// get question
    $('#question').keyup(function () {
      const question = $('#question').val()
      // const testColor = $('#top').val()
      $('h2').text(question + '?')
    })

// get answer
  $('#answer').keyup(function () {
    const answer = $('#answer').val()
    $('h1').text(answer + '!')
  })

// get top color
    $('#top').change(function () {
      const top = $('#top').val()
      const bottom = $('#bottom').val()
      $('#preview').css('background', `linear-gradient(${top}, ${bottom})`)
    })

// get bottom color
    $('#bottom').change(function () {
      const top = $('#top').val()
      const bottom = $('#bottom').val()
      $('#preview').css('background', `linear-gradient(${top}, ${bottom})`)
    })

  })
})();

