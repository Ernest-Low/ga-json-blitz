//  ! Monsters

//  ? Player exp calculation - Up to level 10?
//  * Player Level         : 1    2    3    4    5    6     7     8     9     10
//  * Player Levels EXP req: 100  230  390  580  800  1050  1330  1640  1980  2350
//  15n^2 + 85n

//  ? Monster Exp Calculation
//  * Monsters lvl from 1 - 15
//  * Exp per monster: Monster level * 10 * (4 to 6) + (20 to 40)
//  * Monster level:     1          2           3           4           5           6           7           8           9           10
//  * Monster exp:   100 - 118  139 - 172   184 - 232   235 - 298   292 - 370   355 - 448   424 - 532   499 - 622   580 - 718   667 - 820
//  3n^2 + 30n + 67 to  3n^2 + 45n + 70

