
//! Buffs / Debuffs as extra

//* Icons:
//* (fist) : Attribute buff
//* (Skull) : Debuffs (curse)
//* (blood drop(s)): Taking damage per turn
//* (swirly) : Stunned
//* (Sword) : Attack buff (short duration / single use)
//* (Shield) : Defense Buff (short duration / single use)
//? (boot with wings) : Speed stat affected

//! Icons flush to the left (to be cleaner)
//* Per start of player turn, remove 1 duration from each of player buffs / debuffs
//* Per end of player turn, proc each debuff / damage proc

//* If stunned, they can still pick their action, but if it's not an item, it won't work.
//* Silence debuff makes them unable to use spells (under curse)