$('.cast-btn').on('click', function (e) {
  let hexagram = []
  for (let i = 0; i < 6; i++) {
    LineCast();
    $('<code>' + asciipic + '</code><br />').hide().prependTo('#Hexagram').fadeIn("slow");
    hexagram.push(asciipic)
  }

});
window.addEventListener('load', async e => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log('SW registered');

    } catch (error) {
      console.log('SW failed');

    }
  }
});