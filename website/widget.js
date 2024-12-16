
// globale variabelen
var button;
var teller;


/**
 * setup
 * de code in deze functie wordt eenmaal uitgevoerd,
 * als p5js wordt gestart
 */
function setup() {
  // Maak het canvas van je widget
  createCanvas(300, 600);

  // maak een nieuw tellerobject
  // op de positie (150, 50)
  teller = //#TODO vul hier zelf aan

  // maak een button en stel deze in
  button = createButton(/* #TODO geef de button een eigen naam*/);
  button.position(/* #TODO geef de button een eigen positie*/);
  button.mouseClicked(buttonGeklikt);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // schrijf hieronder de code van je widget
  // hieronder wordt schematisch een knikkerbaan getekend

  // achtergrond: houtkleur, kies vooral iets anders
  background(175, 144, 105);

  // twee dikke strepen als 'opvangbak'
  // #TODO: maak dit zelf mooier
  stroke(0, 0, 0);
  strokeWeight(10);
  line(50, 20, 135, 60);

  // toon de teller
  // #TODO laat de teller zien
}

function buttonGeklikt() {
  window.alert("button geklikt");
}
