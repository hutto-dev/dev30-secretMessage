let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();

secretMessage.push("to", "Program");

secretMessage.splice(7, 1, "right");

secretMessage.shift();

// used MDN
// think of i love lucy when she shifts down to see the movie star and knocks fred off the booth. shifts - removes from front
secretMessage.unshift("Programming");

secretMessage.splice(6, 5, "know");

console.log(secretMessage.join(""));
a
