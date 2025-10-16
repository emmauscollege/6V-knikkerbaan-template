let port;
let connectButton;
let ledIsAan = false;

function setup() {
  createCanvas(300, 600);

  // Deze button is nodig om de connectie met de Arduino te maken
  connectButton = createButton('Connect');
  connectButton.position(80, 200);
  connectButton.mousePressed(connectArduino);

  // Een button als voorbeeld dat je een commando naar de Arduino kunt sturen
  ledButton = createButton('Led');
  ledButton.position(80, 250);
  ledButton.mousePressed(toggleLed);
}

function draw() {
  background(175, 144, 105);
  
  // doe dit zolang er berichten voor je klaarstaan
  while (messageAvailable()) {
    // haal nieuw bericht op
    let message = getMessage();
    
    // mag je later weghalen: print dit bericht in de console:
    console.log("ik ga aan de slag met:" + message);

    // verwerk bericht
    executeMessage(message);
  }
}


/**
 * executeMessage
 * Leest de twee delen van een bericht
 * (namelijk commando en waarde) en voert
 * de bijpassende acties uit
 * 
 * Deze functie moet je zelf verder uitbreiden
 * 
 * @param {*} message string - het bericht dat verwerkt moet worden
 */
function executeMessage(message) {
  // splits het bericht in twee delen
  let delen = message.split(":");
  if (delen.length === 2) {
    // bericht heeft twee delen: commando en waarde
    // we kunnen hiermee aan de slag
    let commando = delen[0];
    let waarde = delen[1];

    if (commando === "melding") {
      alert("Melding van Arduino: " + waarde);
    }

    // #TODO vul aan met je eigen commando's en waarden


  }
  else {
    console.log("Het bericht heeft geen twee onderdelen: " + message);
  }
}

/**
 * toggleLed
 * Stuurt op basis van de variabele ledIsAan het bericht
 * 'led:0' of 'led:1' naar de Arduino
 */
function toggleLed() {
  // check eerst of er een seriële verbinding met de Arduino is
  if (port) {
    if (ledIsAan === true) {
      // stuur bericht om led uit te zetten
      sendMessage("led:0");
      ledIsAan = false;
    }
    else {
      // stuur bericht om led aan te zetten
      sendMessage("led:1");
      ledIsAan = true;
    }
  }
}


/**
 * connectArduino
 * functie die de connec
 */
function connectArduino() {
  // controleer of er reeds een Arduino verbonden is
  if (port) {
    // er is al een Arduino verbonden, verbreek de verbinding
    port.close();
    port = undefined;

    // de knop moet nu weer 'Connect' tonen
    connectButton.html("Connect");
  }
  else {
    // Er is geen Arduino verbonden
    // Probeer verbinding te leggen met een aangesloten Arduino
    getReader();

    // Update de tekst in de button naar 'Disconnect'
    connectButton.html("Disconnect");
  }
}
