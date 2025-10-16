// LET OP:
// importeer en gebruik deze code
// je hoeft hier niets in aan te passen

let lineBuffer = '';
let messages = [];

/**
 * getReader()
 * Laat een venster zien en zorgt ervoor
 * dat je een verbinding kunt maken met een
 * Arduino die op de USB-poort is aangesloten.
 */
async function getReader() {
  port = await navigator.serial.requestPort({});
  await port.open({ baudRate: 9600 });
  console.log(port);
  const appendStream = new WritableStream({
    write(chunk) {
      lineBuffer += chunk;
      let lines = lineBuffer.split('\r\n');

      if (lines.length > 1) {
        lineBuffer = lines.pop();
        messages = messages.concat(lines);
        console.log(messages);
      }
    }
  });

  port.readable
    .pipeThrough(new TextDecoderStream())
    .pipeTo(appendStream);
}

/**
 * messageAvailable
 * Geeft aan of er ongelezen berichten zijn
 * @returns boolean
 */
function messageAvailable() {
  return messages.length > 0;
}

/**
 * getMessage
 * Geeft het eerstvolgende binnengekomen bericht
 * @returns string -  het eerstvolgende bericht
 */
function getMessage() {
  let message = undefined;

  if (messages.length > 0) {
    message = messages[0];
    messages = messages.slice(1);
  }

  return message;
}

/**
 * sendMessage
 * Verzendt een bericht over de seriële poort
 * @param {*} message string
 */
function sendMessage(message) {
  if (port != undefined && port.writable != undefined) {
    var enc = new TextEncoder();
    const writer = port.writable.getWriter();
  
    writer.write(enc.encode(message+"\n").buffer);
    writer.releaseLock();
  }
}

/**
 * simulateIncomingMessage
 * gebruik deze functie om een inkomend
 * bericht te simuleren als je geen Arduino
 * bij de hand hebt maar toch wilt testen
 * @param {*} message het bericht dat zogenaam binnenkomt
 */
function simulateIncomingMessage(message) {
  messages.push(message);
}