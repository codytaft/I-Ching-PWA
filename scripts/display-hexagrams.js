$('.hexagrams').hide()
$('.cast-btn').on('click', (e) => {
  $('.hexagrams').hide().show()
  let hexagram = [];
  for (let i = 0; i < 6; i++) {
    lineCast();
    $(hexagramLine).addClass("pos" + (i + 1)).hide().prependTo('.hexagram').fadeIn(3000);
    hexagram.push(hexagramLine)
  }
  changeHexagram(hexagram)
});

changeHexagram = (hexagram) => {
  let changedHexagram = [];
  let noChange = true
  hexagram.forEach((line, i) => {
    let changedLine = line.replace(/old-yin/gi, 'young-yang').replace(/old-yang/gi, 'young-yin')
    changedHexagram.push(changedLine)
    if (hexagram[i] != changedHexagram[i]) {
      noChange = false
    }
  })

  if (!noChange) {
    addChangedHexagram(changedHexagram)
  }
}

addChangedHexagram = (changedHexagram) => {
  $('.arrows').hide().fadeIn(3000)
  $('.changedHexagram').toggle()
  changedHexagram.forEach((line, i) => {
    $(line).addClass("pos" + (i + 1)).hide().prependTo('.changedHexagram').fadeIn(3000);
  })
}
