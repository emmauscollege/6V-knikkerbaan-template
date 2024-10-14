// globale variabelen
int geteldeKnikkers = 0;
unsigned long huidigeTijd = 0;
unsigned long laatsteSerialPrintTijd = 0;

// toestand(en)
const int TOESTAND_SERIAL_PRINT_NU = 1;
const int TOESTAND_SERIAL_WACHT = 0
int toestandSerial = TOESTAND_SERIAL_WACHT;


// constanten voor pinnen
const int TELLERPIN = 3;

// overige constanten
const int SERIAL_PRINT_INTERVAL = 1000;



void setup() {
  Serial.begin(9600);
  pinMode(tellerPin, INPUT);
}

void loop() {
  // lees sensoren uit
  huidigeTijd = millis();

  // verander toestanden op basis van sensoren
  if (huidigeTijd - laatsteSerialPrintTijd > SERIAL_PRINT_INTERVAL) {
    toestandSerial = TOESTAND_SERIAL_PRINT_NU;
    laatsteSerialPrintTijd = millis();
  }

  // pas actuatoren aan
  if (toestandSerial == TOESTAND_SERIAL_PRINT_NU) {
    Serial.println("getelde knikkers: " + geteldeKnikkers);
  }

  // verander toestand indien een actuator maar eenmalig iets moet doen
  if (toestandSerial == TOESTAND_SERIAL_PRINT_NU) {
    toestandSerial = TOESTAND_SERIAL_PRINT_WACHT;
  }
}
