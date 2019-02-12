let pageNumber = 0;
let readingPages = [];

createCarouselPages = (hexagram, changedHexagram) => {
  let hexDetails = hexagram[6];
  let pages = [
    {
      pageName: 'The Judgment',
      hexNum: hexDetails.hexagramNumber,
      hexName: hexDetails.hexagramName,
      hexDescription: hexDetails.hexagramDescription,
      hexOracle: hexDetails.hexagramInterpretation.oracle
    },
    {
      pageName: 'The Image',
      hexNum: hexDetails.hexagramNumber,
      hexName: hexDetails.hexagramName,
      hexDescription: hexDetails.hexagramDescription,
      hexOracle: hexDetails.hexagramInterpretation.image.oracle
    },
    {
      pageName: 'The Hexagram',
      hexNum: hexDetails.hexagramNumber,
      hexName: hexDetails.hexagramName,
      hexDescription: hexDetails.hexagramDescription,
      hexOracle: hexDetails.hexagramInterpretation.resume
    }
  ];
  // If Hexagram 1 or 2 and all sixes or nines
  let lineChanges = 0;
  hexagram.slice(0, 6).forEach(line => {
    if (line.match(/old/gi)) {
      lineChanges++;
    }
    if (changedHexagram && lineChanges === 6) {
      pages.push({
        pageName: 'The Lines',
        hexNum: hexDetails.hexagramNumber,
        hexName: hexDetails.hexagramName,
        hexDescription: hexDetails.hexagramDescription,
        hexOracle: hexDetails.hexagramInterpretation.lines[6].poem
      });
    }
  });

  if (changedHexagram) {
    let changedHexDetails = changedHexagram[6];
    let changedHexPages = [
      {
        pageName: 'The Judgment',
        hexNum: changedHexDetails.hexagramNumber,
        hexName: changedHexDetails.hexagramName,
        hexDescription: changedHexDetails.hexagramDescription,
        hexOracle: changedHexDetails.hexagramInterpretation.oracle
      },
      {
        pageName: 'The Image',
        hexNum: changedHexDetails.hexagramNumber,
        hexName: changedHexDetails.hexagramName,
        hexDescription: changedHexDetails.hexagramDescription,
        hexOracle: changedHexDetails.hexagramInterpretation.image.oracle
      }
    ];
    hexagram.slice(0, 6).forEach((line, i) => {
      if (line.includes('old')) {
        pages.push({
          pageName: 'The Lines',
          hexNum: hexDetails.hexagramNumber,
          hexName: hexDetails.hexagramName,
          hexDescription: hexDetails.hexagramDescription,
          hexOracle: hexDetails.hexagramInterpretation.lines[i].poem
        });
      }
    });
    // Add changed hex judgment and Image
    changedHexPages.forEach(page => {
      pages.push(page);
    });
  }

  // Add pages to readingPages array
  pages.forEach(page => {
    readingPages.push(page);
  });

  displayReading(readingPages[0]);
};

displayReading = ({ pageName, hexNum, hexName, hexDescription, hexOracle }) => {
  // let hexDetails = hexagram[6];
  // let hexInterpretation = hexagram[6].hexagramInterpretation;
  $('.nav-arrow')
    .fadeIn(4000)
    .attr('id', 'nav-arrow');

  $('.reading-text')
    .fadeIn(4000)
    .attr('id', 'reading-text')
    .html(`<h2><i>${hexName} / ${hexDescription}</i></h2>
          <h3>${pageName}</h3>
          <p>${hexOracle}</p>`);
  renderDots();
};

renderDots = () => {
  const dotString = readingPages
    .map((page, i) => {
      return i === pageNumber
        ? `<i class="fas fa-circle"></i>`
        : `<i class="far fa-circle"></i>`;
    })
    .join('');
  $('.dots').html(dotString);
};

$('.nav-left').on('click', slideBack);
function slideBack() {
  if (pageNumber > 0) {
    pageNumber--;
    displayReading(readingPages[pageNumber]);
  } else if (pageNumber === 0) {
    pageNumber = readingPages.length - 1;
    displayReading(readingPages[pageNumber]);
  }
}

$('.nav-right').on('click', slideForward);
function slideForward() {
  if (pageNumber < readingPages.length - 1) {
    pageNumber++;
    displayReading(readingPages[pageNumber]);
  } else if (pageNumber === readingPages.length - 1) {
    pageNumber = 0;
    displayReading(readingPages[pageNumber]);
  }
}
