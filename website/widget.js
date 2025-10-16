/*************** GLOBALE VARIABELEN ***************/
var button;
var teller;



/****************** SETUP EN DRAW *****************/
/**
 * setup
 * de code in deze functie wordt eenmaal uitgevoerd,
 * als p5js wordt gestart
 */
function setup() {
  // tekengebied van de widget, in dezelfde verhoudingen als de knikkerbaan
  createCanvas(300, 600);

  // maak een nieuw tellerobject
  // op de positie (150, 50)
  // #TODO haal de // weg en vul zelf aan:
  // teller = 

  // p5js heeft zelf een klasse voor buttons
  // maak een button en stel deze in
  // #TODO haal de // weg en vul zelf aan:
  // button = createButton(/* #TODO geef de button een eigen naam*/);
  // button.position(/* #TODO geef de button een eigen positie*/);
  // button.mouseClicked(buttonGeklikt);
}


/***************** EIGEN FUNCTIES *****************/

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
  // #TODO laat de teller zien m.b.v. show()
}


/**
 * buttonGeklikt()
 * Voorbeeldfunctie
 * De regel code "button.mouseClicked(buttonGeklikt);" zorgt ervoor
 * dat deze functie wordt uitgevoerd als er op de button wordt geklikt
 */
function buttonGeklikt() {
  window.alert("button geklikt");
}
