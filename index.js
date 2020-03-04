const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cols = process.stdout.columns;
let line = "";

for (i = 0; line.length + 7 <= cols; i++) {
  if (i > 0) {
    line += "  ";
  }

  line += "Penus";
}

line += "\n";

rl.question("Gob's Program:  Y/N?\n? ", function(answer) {
  if (answer.match(/Y/i)) {
    while (true) {
      process.stdout.write(line);
    }
  }

  rl.close();
});
