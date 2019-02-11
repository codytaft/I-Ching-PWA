let pageNumber = 0;
let readingPages = [];
$('.nav-right').on('click', () => {
  console.log('hi');
});

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
    }
  ];
  // If Hexagram 1 or 2 and all sixes or nines
  if (changedHexagram && hexDetails.hexagramInterpretation.lines.length === 7) {
    pages.push({
      pageName: 'The Lines',
      hexNum: hexDetails.hexagramNumber,
      hexName: hexDetails.hexagramName,
      hexDescription: hexDetails.hexagramDescription,
      hexOracle: hexDetails.hexagramInterpretation.lines[6].poem
    });
  }

  // Add final page
  pages.push({
    pageName: 'The Hexagram',
    hexNum: hexDetails.hexagramNumber,
    hexName: hexDetails.hexagramName,
    hexDescription: hexDetails.hexagramDescription,
    hexOracle: hexDetails.hexagramInterpretation.resume
  });

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
    .html(`<h2>${hexNum}. <i>${hexName} / ${hexDescription}</i></h2>
          <h3>${pageName}</h3>
          <p>${hexOracle}</p>`);
  renderDots();
};

function renderSlide({ title, description, tech, image, github, live }) {
  const project = document.querySelector('.project');
  const technologies = tech.join(' / ');
  $('.reading-text').innerHTML = `
    <h3>${title}</h3>
    <p class="tech">${technologies}</p>
    <div class="project-links">
      <a href="${github}" target="_blank">
        <i class="fab fa-github"></i>
      </a>
        <a href="${live}" target="_blank" class=${
    live ? 'live-link' : 'hidden'
  }>Live</a>
    </div>
    <p>${description}</p>
    <img src="${image}" alt="${title}" />
  `;
  renderDots();
}

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
