// LOTTO
// 1. Stwórz funkcję, która działa do momentu, w którym zostanie wylosowanych te same liczby (maksymalnie 6), które zostały podane jako argument funkcji
// 1a. function lotto(myNumbers) {...}
// 2. Skorzystaj z funkcji generującej liczby pseudolosowe w zakresie 1-49
// 2a. Funkcja generująca liczby pseudolosowe
// 3. Stwórz na początku tablicę, która zawiera liczby od 1 do 49
// 4. Losuj do skutku 6 unikalnych liczb w losowaniu – zapisz je do zmiennej wewnątrz pętli
// 4a. Przy każdym nowym losowaniu 6 liczb sklonuj tablicę do zmiennej znajdującej się w pętli
// 4b. Usuwaj ze sklonowanej tablicy dostępnych liczb wylosowaną liczbę, sprawdź przy pomocy indexOf czy dana liczba była wylosowana czy nie
// 5. Sprawdzanie czy podane liczby są w tablicy wygenerowanych liczb – jeżeli nie, losowanie trzeba powtórzyć
// 6. Zapisuj liczbę powtórzeń pętli i zwróć w console.logu za którym razem wylosowano twoich liczb
// 7. Zwróć posortowane 6 liczb, które zostały wylosowane, gdy losowanie zostanie zakończone sukcesem
// 8. Swój kod wypchnij na GitHuba na branchu nazwanym "exercise1-lotto-twojeimie" (np. exercise1-lotto-wojciech)
// 8a. Stwórz swój branch przy pomocy git branch -D {nazwa brancha}, później commitujemy zmiany i wypychamy naszego brancha do GitHuba

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortNumbersAsc(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function drawLottoNumbers(myNumbers) {
  const minLottoNumber = 1;
  const maxLottoNumber = 49;
  const numbersToDraw = [];
  let numberOfDraws = 0;
  let isWinningDraw = false;
  let winningNumbers = [];

  for (let i = minLottoNumber; i <= maxLottoNumber; i++) {
    numbersToDraw.push(i);
  }

  console.log(`The draw has been started at ${new Date()}`);

  while (isWinningDraw === false) {
    numberOfDraws += 1;
    const numbersAvailableToDraw = numbersToDraw.slice();
    const drawnNumbers = [];

    while (drawnNumbers.length !== 6) {
      const number = getRandomNumber(minLottoNumber, maxLottoNumber);
      const indexOfNumber = numbersAvailableToDraw.indexOf(number);
      if (indexOfNumber > -1) {
        numbersAvailableToDraw.slice(indexOfNumber, 1);
        drawnNumbers.push(number);
      }
    }

    let isCurrentDrawWinning = true;

    for (let i = 0; i < myNumbers.length; i++) {
      if (drawnNumbers.indexOf(myNumbers[i]) === -1) {
        isCurrentDrawWinning = false;
        break;
      }
    }

    if (isCurrentDrawWinning) {
      isWinningDraw = true;
      winningNumbers = drawnNumbers.slice();
    }
  }

  console.log(`The draw has been finished at ${new Date()}`);
  console.log(`Number of draw which was won is ${numberOfDraws}`);
  console.log(`Winning numbers are ${winningNumbers.sort(sortNumbersAsc).join(', ')}`);
}

drawLottoNumbers([10, 41, 47, 8, 13, 45]);
