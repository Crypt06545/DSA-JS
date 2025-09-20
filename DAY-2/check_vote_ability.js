const voteEligiblity = (age) => {
  if (age !== 18) {
    console.log("You can not vote");
  } else {
    console.log("You can Vote");
  }
};
voteEligiblity(34);
