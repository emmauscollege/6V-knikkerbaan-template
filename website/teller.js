/** Teller
 * Toont het getal dat in het attribuut 'aantal' is opgeslagen.
*/
class Teller {
  x;
  y;
  aantal;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.aantal = 0;
  }

  show() {
    noStroke();               // geen rand
    fill(255, 255, 255);      // wit
    textSize(14);

    // print aantal knikkers bovenin
    text(this.aantal, this.x, this.y);
  }
}