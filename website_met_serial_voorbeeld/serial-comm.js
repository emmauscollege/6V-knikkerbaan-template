let lineBuffer = '';
let messages = [];


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


function messageAvailable() {
  return messages.length > 0;
}


function getMessage() {
  let message = undefined;

  if (messages.length > 0) {
    message = messages[0];
    messages = messages.slice(1);
  }

  return message;
}


function sendMessage(message) {
  if (port != undefined && port.writable != undefined) {
    var enc = new TextEncoder();
    const writer = port.writable.getWriter();
  
    writer.write(enc.encode(message+"\n").buffer);
    writer.releaseLock();
  }
}

// gebruik deze functie om een inkomend
// bericht te simuleren
function simulateIncomingMessage(message) {
  messages.push(message);
}