function hero(bullets, dragons){
  return bullets >= dragons * 2;
}

function hero(bullets, dragons){
    // Each dragon needs 2 bullets
    let bulletsNedeed = dragons * 2;

    // Check if the hero has enough bullets
    if(bullets >= bulletsNedeed){
        return true; // He survives 
    } else {
        return false; // He doesn't survive
    }
}

console.log(hero(10, 5)); // true
console.log(hero(7, 4)); // false
console.log(hero(3, 2)); // false