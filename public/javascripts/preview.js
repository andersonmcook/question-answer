;(function () {
  $(document).ready(function() {
    console.log('in preview.js')

// get question
    $('#question').keyup(function () {
      const question = $('#question').val()
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

// get question font
    $('#questionfont').change(function () {
      previewer('#questionfont', 'h2', 'font-family')
    })

// get answer font
    $('#answerfont').change(function () {
      previewer('#answerfont', 'h1', 'font-family')
    })

// get question color
    $('#questioncolor').change(function () {
      previewer('#questioncolor', 'h2', 'color')
    })

// get answer color
    $('#answercolor').change(function () {
      previewer('#answercolor', 'h1', 'color')
    })

// repeatable function to get color and font-family
    function previewer (element, preview, style) {
      const value = $(element).val()
      $(preview).css(style, value)
    }

  })
})();

