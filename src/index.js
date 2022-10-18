const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=11';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('Response with then() and catch()', data);
  })
  .catch((error) => {
    console.error(error);
  });

(async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Response with async await', data);
  } catch (error) {
    console.error(error);
  }
})();
