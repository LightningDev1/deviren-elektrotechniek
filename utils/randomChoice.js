function randomChoice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default randomChoice;
