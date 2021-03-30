// LOTTO
// 1. Stwórz funkcję, która działa do momentu, w którym zostanie wylosowanych te same liczby (maksymalnie 6), które zostały podane jako argument funkcji
// 1a. function lotto(myNumbers) {...}
// 2. Skorzystaj z funkcji generującej liczby pseudolosowe w zakresie 1-49
// 2a. Funkcja generująca liczby pseudolosowe

const minLottoNumber = 1;
const maxLottoNumber = 49;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 3. Stwórz na początku tablicę, która zawiera liczby od 1 do 49
// 4. Losuj do skutku 6 unikalnych liczb w losowaniu – zapisz je do zmiennej wewnątrz pętli
// 4a. Przy każdym nowym losowaniu 6 liczb sklonuj tablicę do zmiennej znajdującej się w pętli
// 4b. Usuwaj ze sklonowanej tablicy dostępnych liczb wylosowaną liczbę, sprawdź przy pomocy indexOf czy dana liczba była wylosowana czy nie
// 5. Sprawdzanie czy podane liczby są w tablicy wygenerowanych liczb – jeżeli nie, losowanie trzeba powtórzyć
// 6. Zapisuj liczbę powtórzeń pętli i zwróć w console.logu za którym razem wylosowano twoich liczb
// 7. Zwróć posortowane 6 liczb, które zostały wylosowane, gdy losowanie zostanie zakończone sukcesem
// 8. Swój kod wypchnij na GitHuba na branchu nazwanym "exercise1-lotto-twojeimie" (np. exercise1-lotto-wojciech)
// 8a. Stwórz swój branch przy pomocy git branch -D {nazwa brancha}, później commitujemy zmiany i wypychamy naszego brancha do GitHuba
