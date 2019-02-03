let hexagram = [];
let changesdHexagram = [];
let changedHexagram = [];
let noChange = true

$('.hexagrams').hide()

$('.cast-btn').on('click', (e) => {
  $('.cast-btn').attr('disabled', 'disabled')
  $('.hexagrams').show()
  for (let i = 0; i < 6; i++) {
    lineCast();
    hexagram.push(hexagramLine)
  }
  changeHexagram(hexagram)

});

changeHexagram = (hexagram) => {
  hexagram.forEach((line, i) => {
    let changedLine = line.replace(/old-yin/gi, 'young-yang').replace(/old-yang/gi, 'young-yin')
    changedHexagram.push(changedLine)

    // DETECT CHANGE IN HEXAGRAM
    if (hexagram[i] != changedHexagram[i]) {
      noChange = false
    }
  })

  // DISPLAY HEXAGRAM OR HEXAGRAMS
  if (!noChange) {
    displayHexagrams(hexagram, changedHexagram)
  } else {
    displayHexagrams(hexagram)
  }
}

displayHexagrams = (hexagram, changedHexagram) => {
  hexagram.forEach((line, i) => {
    $(line).addClass("pos" + (i + 1)).hide().prependTo('.hexagram').fadeIn(3000);
  })

  if (changedHexagram) {
    $('.changedHexagram').toggle()
    $('.arrows').hide().fadeIn(3000)
    changedHexagram.forEach((line, i) => {
      $(line).addClass("pos" + (i + 1)).hide().prependTo('.changedHexagram').fadeIn(3000);
    })
  }
}

