let hexagram = [];
let changedHexagram = [];

let noChange = true;

$('.hexagrams').hide();

$('.cast-btn').on('click', async e => {
  $('.cast-btn')
    .hide()
    .fadeOut(3000);
  $('.hexagrams').show();
  for (let i = 0; i < 6; i++) {
    lineCast();
    hexagram.push(hexagramLine);
  }
  // GET HEXAGRAM NAME
  let hexagramName = await determineHexagram(hexagram);

  // ADD HEXAGRAM NAME TO ARRAY
  hexagram.push(hexagramName);
  changeHexagram(hexagram);
});

changeHexagram = async hexagram => {
  hexagram.forEach((line, i) => {
    if (i < 6) {
      let changedLine = line
        .replace(/old-yin/gi, 'young-yang')
        .replace(/old-yang/gi, 'young-yin');
      changedHexagram.push(changedLine);

      // CHECK FOR CHANGES IN HEXAGRAMS
      if (hexagram[i] != changedHexagram[i]) {
        noChange = false;
      }
    }
  });

  // DISPLAY HEXAGRAM OR HEXAGRAMS
  if (!noChange) {
    let hexagramName = await determineHexagram(changedHexagram);
    changedHexagram.push(hexagramName);
    displayHexagrams(hexagram, changedHexagram);
    displayReading(hexagram, changedHexagram);
  } else {
    displayHexagrams(hexagram);
    displayReading(hexagram);
  }
};

displayHexagrams = (hexagram, changedHexagram) => {
  hexagram.forEach((line, i) => {
    if (i < 6) {
      $(line)
        .addClass('pos' + (i + 1))
        .hide()
        .prependTo('.hexagram')
        .fadeIn(3000);
    }
    if (i === 6) {
      $(`<div>${line.hexagramName}</div><div>${line.hexagramDescription}</div>`)
        .addClass('hexName')
        .hide()
        .prependTo('.hexagram')
        .fadeIn(3000);
      $(`<div>${line.hexagramNumber}</div>`)
        .addClass('hexNum')
        .hide()
        .prependTo('.hexagram')
        .fadeIn(3000);
    }
  });
  if (changedHexagram) {
    $('.changedHexagram').toggle();
    $('.arrows')
      .hide()
      .fadeIn(3000);
    changedHexagram.forEach((line, i) => {
      if (i < 6) {
        $(line)
          .addClass('pos' + (i + 1))
          .hide()
          .prependTo('.changedHexagram')
          .fadeIn(4000);
      }
      if (i === 6) {
        $(
          `<div>${line.hexagramName}</div><div>${
            line.hexagramDescription
          }</div>`
        )
          .addClass('hexName')
          .hide()
          .prependTo('.changedHexagram')
          .fadeIn(4000);
        $(`<div>${line.hexagramNumber}</div>`)
          .addClass('hexNum')
          .hide()
          .prependTo('.changedHexagram')
          .fadeIn(4000);
      }
    });
  }
};

determineHexagram = async hexagram => {
  let hexagramNumber;
  let trigrams = determineTrigrams(hexagram);
  switch (trigrams.lowerTrigramName) {
    case "Ch'ien":
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 1;
          break;
        case 'Chen':
          hexagramNumber = 34;
          break;
        case "K'an":
          hexagramNumber = 5;
          break;
        case 'Ken':
          hexagramNumber = 26;
          break;
        case "K'un":
          hexagramNumber = 11;
          break;
        case 'Sun':
          hexagramNumber = 9;
          break;
        case 'Li':
          hexagramNumber = 14;
          break;
        case 'Tui':
          hexagramNumber = 43;
          break;
      }
      break;
    case 'Chen':
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 25;
          break;
        case 'Chen':
          hexagramNumber = 51;
          break;
        case "K'an":
          hexagramNumber = 3;
          break;
        case 'Ken':
          hexagramNumber = 27;
          break;
        case "K'un":
          hexagramNumber = 24;
          break;
        case 'Sun':
          hexagramNumber = 42;
          break;
        case 'Li':
          hexagramNumber = 21;
          break;
        case 'Tui':
          hexagramNumber = 17;
          break;
      }
      break;
    case "K'an":
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 6;
          break;
        case 'Chen':
          hexagramNumber = 40;
          break;
        case "K'an":
          hexagramNumber = 29;
          break;
        case 'Ken':
          hexagramNumber = 4;
          break;
        case "K'un":
          hexagramNumber = 7;
          break;
        case 'Sun':
          hexagramNumber = 59;
          break;
        case 'Li':
          hexagramNumber = 64;
          break;
        case 'Tui':
          hexagramNumber = 47;
          break;
      }
      break;
    case 'Ken':
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 33;
          break;
        case 'Chen':
          hexagramNumber = 62;
          break;
        case "K'an":
          hexagramNumber = 39;
          break;
        case 'Ken':
          hexagramNumber = 52;
          break;
        case "K'un":
          hexagramNumber = 15;
          break;
        case 'Sun':
          hexagramNumber = 53;
          break;
        case 'Li':
          hexagramNumber = 56;
          break;
        case 'Tui':
          hexagramNumber = 31;
          break;
      }
      break;
    case "K'un":
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 12;
          break;
        case 'Chen':
          hexagramNumber = 16;
          break;
        case "K'an":
          hexagramNumber = 8;
          break;
        case 'Ken':
          hexagramNumber = 23;
          break;
        case "K'un":
          hexagramNumber = 2;
          break;
        case 'Sun':
          hexagramNumber = 20;
          break;
        case 'Li':
          hexagramNumber = 35;
          break;
        case 'Tui':
          hexagramNumber = 45;
          break;
      }
      break;

    case 'Sun':
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 44;
          break;
        case 'Chen':
          hexagramNumber = 32;
          break;
        case "K'an":
          hexagramNumber = 48;
          break;
        case 'Ken':
          hexagramNumber = 18;
          break;
        case "K'un":
          hexagramNumber = 46;
          break;
        case 'Sun':
          hexagramNumber = 57;
          break;
        case 'Li':
          hexagramNumber = 50;
          break;
        case 'Tui':
          hexagramNumber = 28;
          break;
      }
      break;

    case 'Li':
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 13;
          break;
        case 'Chen':
          hexagramNumber = 55;
          break;
        case "K'an":
          hexagramNumber = 63;
          break;
        case 'Ken':
          hexagramNumber = 22;
          break;
        case "K'un":
          hexagramNumber = 36;
          break;
        case 'Sun':
          hexagramNumber = 37;
          break;
        case 'Li':
          hexagramNumber = 30;
          break;
        case 'Tui':
          hexagramNumber = 49;
          break;
      }
      break;
    case 'Tui':
      switch (trigrams.upperTrigramName) {
        case "Ch'ien":
          hexagramNumber = 10;
          break;
        case 'Chen':
          hexagramNumber = 54;
          break;
        case "K'an":
          hexagramNumber = 60;
          break;
        case 'Ken':
          hexagramNumber = 41;
          break;
        case "K'un":
          hexagramNumber = 19;
          break;
        case 'Sun':
          hexagramNumber = 61;
          break;
        case 'Li':
          hexagramNumber = 38;
          break;
        case 'Tui':
          hexagramNumber = 58;
          break;
      }
      break;
  }

  let hexagramName;
  let hexagramDescription;
  let hexagramInterpretation;
  await $.getJSON('../assets/hexagrams.json', hexagramText => {
    hexagramText.forEach(hexagram => {
      if (hexagram.number === hexagramNumber) {
        hexagramName = hexagram.name;
        hexagramDescription = hexagram.description;
        hexagramInterpretation = hexagram.interpretation;
      }
    });
  }).then(
    (hexagramName = hexagramName),
    (hexagramDescription = hexagramDescription),
    (hexagramInterpretation = hexagramInterpretation)
  );
  return {
    hexagramNumber,
    hexagramName,
    hexagramDescription,
    hexagramInterpretation
  };
};

determineTrigrams = hexagram => {
  const trigrams = [
    { name: "Ch'ien", lines: ['yang', 'yang', 'yang'] },
    { name: 'Chen', lines: ['yang', 'yin', 'yin'] },
    { name: "K'an", lines: ['yin', 'yang', 'yin'] },
    { name: 'Ken', lines: ['yin', 'yin', 'yang'] },
    { name: "K'un", lines: ['yin', 'yin', 'yin'] },
    { name: 'Sun', lines: ['yin', 'yang', 'yang'] },
    { name: 'Li', lines: ['yang', 'yin', 'yang'] },
    { name: 'Tui', lines: ['yang', 'yang', 'yin'] }
  ];

  let lowerTrigramLines = [];
  let upperTrigramLines = [];
  let lowerTrigramName = '';
  let upperTrigramName = '';

  hexagram.forEach((line, i) => {
    if (lowerTrigramLines.length < 3) {
      if (line.match(/yang/gi)) {
        lowerTrigramLines.push('yang');
      } else if (line.match(/yin/gi)) {
        lowerTrigramLines.push('yin');
      }
    } else {
      if (line.match(/yang/gi)) {
        upperTrigramLines.push('yang');
      } else if (line.match(/yin/gi)) {
        upperTrigramLines.push('yin');
      }
    }
  });

  switch (JSON.stringify(lowerTrigramLines)) {
    case JSON.stringify(trigrams[0].lines):
      lowerTrigramName = trigrams[0].name;
      break;
    case JSON.stringify(trigrams[1].lines):
      lowerTrigramName = trigrams[1].name;
      break;
    case JSON.stringify(trigrams[2].lines):
      lowerTrigramName = trigrams[2].name;
      break;
    case JSON.stringify(trigrams[3].lines):
      lowerTrigramName = trigrams[3].name;
      break;
    case JSON.stringify(trigrams[4].lines):
      lowerTrigramName = trigrams[4].name;
      break;
    case JSON.stringify(trigrams[5].lines):
      lowerTrigramName = trigrams[5].name;
      break;
    case JSON.stringify(trigrams[6].lines):
      lowerTrigramName = trigrams[6].name;
      break;
    case JSON.stringify(trigrams[7].lines):
      lowerTrigramName = trigrams[7].name;
      break;
    default:
      console.log('error!');
  }

  switch (JSON.stringify(upperTrigramLines)) {
    case JSON.stringify(trigrams[0].lines):
      upperTrigramName = trigrams[0].name;
      break;
    case JSON.stringify(trigrams[1].lines):
      upperTrigramName = trigrams[1].name;
      break;
    case JSON.stringify(trigrams[2].lines):
      upperTrigramName = trigrams[2].name;
      break;
    case JSON.stringify(trigrams[3].lines):
      upperTrigramName = trigrams[3].name;
      break;
    case JSON.stringify(trigrams[4].lines):
      upperTrigramName = trigrams[4].name;
      break;
    case JSON.stringify(trigrams[5].lines):
      upperTrigramName = trigrams[5].name;
      break;
    case JSON.stringify(trigrams[6].lines):
      upperTrigramName = trigrams[6].name;
      break;
    case JSON.stringify(trigrams[7].lines):
      upperTrigramName = trigrams[7].name;
      break;
    default:
      console.log('error!');
  }
  return { upperTrigramName, lowerTrigramName };
};
