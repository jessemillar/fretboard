// Note: I'm starting at index 1 to match the guitar string naming conventions
var guitarStringNames = ["", "E", "B", "G", "D", "A", "E"];
var guitarStrings = new Array();
guitarStrings[1] = new Array(
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb"
);
guitarStrings[2] = new Array(
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb"
);
guitarStrings[3] = new Array(
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb"
);
guitarStrings[4] = new Array(
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb"
);
guitarStrings[5] = new Array(
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb"
);
guitarStrings[6] = new Array(
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb"
);

function main() {
  menu();
}

function menu() {
  swal({
    closeOnClickOutside: false,
    closeOnEsc: false,
    icon: "images/icon.png",
    title: "Learn the Fretboard",
    text: "Music theory is tough, but it's tougher if you don't know the names of the musical notes up and down the guitar neck, so let's test our knowledge of a guitar's fretboard! Select a mode below and flip through the flashcards. Good luck!",
    buttons: {
      allFrets: {
        text: "All Frets",
      },
      dottedFrets: {
        text: "Dotted Frets",
        value: "dotted",
      },
    },
  }).then((value) => {
    switch (value) {
      default:
        selectFret();
        break;

      case "dotted":
        selectFret("true");
        break;
    }
  });
}

function selectFret(dotted) {
  // Select a number from the range of 1-6
  var selectedGuitarString = Math.floor(Math.random() * 6) + 1;
  // Select a number from the range of 1-22
  var selectedGuitarFret = Math.floor(Math.random() * 22) + 1;
  if (dotted == "true") {
    var dottedFrets = [3, 5, 7, 9, 12, 15, 17, 19, 21];
    selectedGuitarFret =
      dottedFrets[Math.floor(Math.random() * dottedFrets.length)];
  }

  swal({
    closeOnClickOutside: false,
    closeOnEsc: false,
    title:
      "What note is string " +
      selectedGuitarString +
      ", fret " +
      selectedGuitarFret +
      "?",
    text:
      "Tip: String " +
      selectedGuitarString +
      " is " +
      guitarStringNames[selectedGuitarString] +
      " in standard guitar tuning.",
    buttons: {
      cancel: "Menu",
      check: true,
    },
  }).then((value) => {
    switch (value) {
      default:
        menu();
        break;

      case "check":
        swal({
          closeOnClickOutside: false,
          closeOnEsc: false,
          title:
            "String " +
            selectedGuitarString +
            ", fret " +
            selectedGuitarFret +
            " is " +
            guitarStrings[selectedGuitarString][selectedGuitarFret] +
            ".",
          text: "Did you get it right?",
          buttons: {
            cancel: "Menu",
            play: true,
          },
        }).then((value) => {
          switch (value) {
            default:
              menu();
              break;

            case "play":
              selectFret(dotted);
              break;
          }
        });
    }
  });
}
