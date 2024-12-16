class Teller {
  x;
  y;
  aantal;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
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