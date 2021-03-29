// Object Map of Hundred Acre Woods

const eeyore = {
  'east': Heffalumps,
  'south': Kanga
};
const heffalumps = {
  'west': Eeyore
};
const kanga = {
  'north': Eeyore,
  'south': ChristopherRobin
};
const owl = {
  'east': ChristopherRobin,
  'south': Piglet
};
const christopherRobin = {
  'north': Kanga,
  'east': Owl,
  'south': WinnieThePooh,
  'west': Rabbit
};
const rabbit = {
  'east': ChristopherRobin,
  'west': Gopher,
  'south': Bees
};
const gopher = {
  'west': Rabbit
};
const piglet = {
  'north': Owl,
  'east': WinnieThePooh
};
const winnieThePooh = {
  'north': ChristopherRobin,
  'east': Bees,
  'south': Tiger,
  'west': Piglet
};
const bees = {
  'north': Rabbit,
  'west': WinnieThePooh
};
const tigger = {
  'north': WinnieThePooh
};

export { eeyore,  heffalumps, kanga, owl, christopherRobin, rabbit, gopher, piglet, winnieThePooh, bees, tigger };