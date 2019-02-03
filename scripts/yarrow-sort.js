let stalks = 50;
let handPile;
let eastPile;
let westPile;
let eastRemainder;
let westRemainder;
let countValue1;
let countValue2;
let countValue3;
let lineValue;
let hexagramLine;
let oldYang = '<div class="line old-yang"><div>';        // --- o --- changing
let oldYin = '<div class="line old-yin"><div>';          // --- x --- changing
let youngYang = '<div class="line young-yang"><div>';    // ---------
let youngYin = '<div class="line young-yin"><div>';      // ---   ---

let divideStalks = (yarrowStalks) => {
  // Divide 49 stalks into eastpile westpile
  // Subtract one from westpile put in handpile

  westPile = Math.floor((Math.random() * yarrowStalks) + 1);
  eastPile = yarrowStalks - westPile;
  westPile = westPile - 1;
  handPile = 1;
}

let divideEastAndWest = function () {
  eastRemainder = (eastPile % 4);
  westRemainder = (westPile % 4);
  if (eastRemainder == 0) eastRemainder = 4;
  if (westRemainder == 0) westRemainder = 4;
  handPile = handPile + eastRemainder + westRemainder;



}
let lineCast = () => {
  //This function creates the pictures of lines as broken or unbroken
  //and changing or unchanging 

  stalks = 49; //Remove one stalk and set it aside 

  divideStalks(stalks);
  // Divide 49 Yarrow stalks into two piles at random: East and West
  // Subtract a single stalk from the West and put it in your hand 
  // between thumb and pointer finger 
  divideEastAndWest();
  // Pick up stalks from the West pile in sets of 4 and set aside
  // until 4 or fewer stalks remain
  // Put those 4 or fewer stalks between your pointer and ring fingers
  // Now divide the West pile by 4 until 4 or fewer stalks remain
  // Remainder goes in hand again between ring and fourth finger
  // Now count the total remainder stalks in your hand
  // Remainder will always be 9 or 5 (1+x+x where x is 0-4)
  // If 9 stalks remain an arbitrary value of 2 was assigned to this step
  // If 5 stalks remain an arbitrary value of 3 was assigned.
  if (eastRemainder + westRemainder + 1 == 9) countValue1 = 2;
  if (eastRemainder + westRemainder + 1 == 5) countValue1 = 3;
  stalks = stalks - handPile;
  // Remove stalks from you hand and set aside.
  divideStalks(stalks);
  // Now divide the pile of stalks before you into two piles again
  // And remove one from the West pile.
  divideEastAndWest();
  // And sort each pile again by sets of four stalks
  // Until 4 or fewer remain, place those remainder stalks in your hand 
  // As your stalks are now 49-9 = 40 or 49-5 = 44, minus 
  // the 1 you always take from the westpile
  // the number you are dividing by 4 is either 39 or 43:
  // the remainder will now always be 8 or 4
  // 1+1+2=4
  // 1+2+1=4
  // 1+3+4=8
  // 1+4+3=8
  // (4 can only occur once, as neither 39 nor 43 are evenly divisible
  // by 4)
  // If 8 stalks are in your hand, the arbitrary counting value is assigned 2
  // If 4 stalks, the counting value is assigned 3
  if (eastRemainder + westRemainder + 1 == 8) countValue2 = 2;
  if (eastRemainder + westRemainder + 1 == 4) countValue2 = 3;
  stalks = stalks - handPile;
  // For the third and final time for this line, 
  // you set aside the 8 or 4 stalks in your HandPile
  divideStalks(stalks);
  // You now have 35, 31, or 39 stalks before you
  // Divide them into East and West piles for a third time
  divideEastAndWest();
  // Remove one from the west pile again
  // and repeat the removal of 4 stalks from each pile
  // the possible outcomes are again 8 or 4
  // and the same arbitrary count value is assigned as
  // in the last step: an 8 means that value = 2 and a 4 means 
  // it is assigned a 3.
  if (eastRemainder + westRemainder + 1 == 8) countValue3 = 2;
  if (eastRemainder + westRemainder + 1 == 4) countValue3 = 3;
  lineValue = countValue1 + countValue2 + countValue3;
  // You now have 3 counting values of 2 or 3 which you
  // add together. 
  // the results determine the nature of this single line:
  // If 7 Line = strong
  // If 8 Line = yielding
  // if 9 Line = strong but Changing
  // if 6 Line = yielding but Changing
  if (lineValue == 6) drawLine('weak', true);
  if (lineValue == 7) drawLine('strong', false);
  if (lineValue == 8) drawLine('weak', false);
  if (lineValue == 9) drawLine('strong', true);
}// End LineCast Function

let drawLine = (line, changing) => {
  if (changing && line == 'weak') hexagramLine = oldYang;
  if (changing && line == 'strong') hexagramLine = oldYin;
  if (!changing && line == 'strong') hexagramLine = youngYang;
  if (!changing && line == 'weak') hexagramLine = youngYin;
}