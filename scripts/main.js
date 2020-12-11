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
    title: "Fretboard",
    text: "Select mode:",
    buttons: {
      allFrets: {
        text: "All Frets",
        value: "all",
      },
      dottedFrets: {
        text: "Dotted Frets",
        value: "dotted",
      },
    },
  }).then((value) => {
    if (value == "dotted") {
      selectFret("true");
    } else {
      selectFret();
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
