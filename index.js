let input = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
];

let output = "";
for (let i = 0; i < input.length; i++) {
  [...input[i]].forEach((char) => {
    if (char !== "$") {
      output += char.toUpperCase();
    }
  });
  output += " ";
}

console.log(output.trim());
