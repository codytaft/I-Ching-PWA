let pageNumber = 0;
let readingPages = [];
$('.nav-right').on('click', () => {
  console.log('hi');
});

createCarouselPages = (hexagram, changedHexagram) => {
  let hexDetails = hexagram[6];
  if (!changedHexagram) {
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
    pages.forEach(page => {
      readingPages.push(page);
    });
  }
};

displayReading = (hexagram, changedHexagram) => {
  let hexDetails = hexagram[6];
  let hexInterpretation = hexagram[6].hexagramInterpretation;
  console.log(hexagram, changedHexagram);
  $('.nav-arrow')
    .fadeIn(4000)
    .attr('id', 'nav-arrow');

  $('.reading-text')
    .fadeIn(4000)
    .attr('id', 'reading-text').html(`<h2>${hexDetails.hexagramNumber}. <i>${
    hexDetails.hexagramName
  } / ${hexDetails.hexagramDescription}</i></h2>
    <h3>The Judgment</h3>
          <p>${hexInterpretation.judgment}</p>`);
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

function renderDots() {
  const dots = document.querySelector('.dots');
  const dotString = projects
    .map((project, i) => {
      return i === currentSlide
        ? `<i class="fas fa-circle"></i>`
        : `<i class="far fa-circle"></i>`;
    })
    .join('');
  dots.innerHTML = dotString;
}

const left = document.querySelector('.left');
let currentSlide = 0;

left.addEventListener('click', slideBack);
function slideBack() {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide(projects[currentSlide]);
  } else if (currentSlide === 0) {
    currentSlide = projects.length - 1;
    renderSlide(projects[currentSlide]);
  }
}

const right = document.querySelector('.right');
right.addEventListener('click', slideForward);
function slideForward() {
  if (currentSlide < projects.length - 1) {
    currentSlide++;
    renderSlide(projects[currentSlide]);
  } else if (currentSlide === projects.length - 1) {
    currentSlide = 0;
    renderSlide(projects[currentSlide]);
  }
}

renderSlide(projects[0]);
