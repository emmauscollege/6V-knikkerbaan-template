const int ledPin = 13;

// String waarin de inkomende data wordt gezet
String inputString = "";      

// boolean die aangeeft of een hele boodschap is binnengekomen
bool stringComplete = false;  

int ledStatus = false;

void setup() {
  // stel ledPin in als OUTPUT
  pinMode(ledPin, OUTPUT);

  // initialiseer serial:
  Serial.begin(9600);

  // reserveer 200 bytes voor inputString:
  inputString.reserve(200);
}

void loop() {
  
  
  
  
  if (stringComplete) {
    // op welke plek staat de dubbele punt
    int dubbelePuntIndex = inputString.indexOf(":");
    if (dubbelePuntIndex == -1) {
      // de boodschap is wel compleet, maar er ontbreekt een dubbele punt
      // doe foutmelding, hier kun je later ook iets van maken dat je website
      // weer kan verwerken
      Serial.println("Fout: invoer bevat geen dubbele punt. Invoer wordt genegeerd.");
    } else {
      // Hak de binnengekomen boodschap in tweeën: het commando en de waarde:
      String commando = inputString.substring(0, dubbelePuntIndex);
      String waarde = inputString.substring(dubbelePuntIndex+1);

      // Dit is om te zien dat het werkt, mag je later weghalen
      Serial.println(String("Je gaf het commando: ") + commando);
      Serial.println(String("Je gaf de waarde: ") + waarde);

      if (commando.equals("led")) {
        // maak een integer van de string
        int waardeGetal = waarde.toInt();
        
        // stel de ledStatus in op basis van de waarde
        if (waardeGetal == 0) {
          ledStatus = false;
        }
        else if (waardeGetal == 1) {
          ledStatus = true;
        }
        else {
          Serial.println("Ik kan niets met deze waarde voor dit commando.");
        }
      }
      /*
      // hier kun je andere commando's implementeren
      if (commando.equals("mijnEigenSuperGaveCommando")) {
        // bedenk zelf wat hier moet komen.
      }
      */
      else {
        Serial.println("Dit commando is mij onbekend");
      }
    }

    // maak de string met de ontvangen boodschap weer leeg
    inputString = "";
    stringComplete = false;
  }


  // stel de led in:
  if (ledStatus == HIGH) {
    digitalWrite(ledPin, HIGH);
  }
  else {
    digitalWrite(ledPin, LOW);
  }

  /* of, wat ook mag in plaats van de bovenstaande if/else:
  digitalWrite(ledPin, ledStatus);
  */
}

/*
  Leest de inkomende gegevens van de seriële poort, teken voor teken
  Zodra een return-teken wordt gelezen, wordt de boodschap als compleet beschouwd.
*/
void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag so the main loop can
    // do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}
