# project1
Project 1 folder

Goals:

!!! Overall Project Goals !!!
Scaleability - Able to add more objects easily to add 'content', requires as little hard-coding as possible
Flexible - Able to add difficulty settings into any form of calculation, to create various levels of difficulty (eg: harder to level, less healing, harder enemies)
Clean Code (Non-Sphaggeti) - Well named / documented / comments to make it easy to find what each block of code does 
Scaleable Complexity - Additional systems can be added without having to modify the base code much
All Devices - To have media queries / scaleable CSS to ensure it's as playable on a mobile phone as it is on a TV
Bug Free - All / most attempts of creating errors by doing strange things in the game must not result in inability to continue


!! Game Goals !!
Non-repetitive - The player must not feel it too reptitive, a new element introduced or the game length to not be too long
Visually Right - Aethestically pleasing, without blemish or out of place objects
Easy to pick up - UI must be clean and intuitive, with the goals well outlined / popup boxes
Suspense / Drama - The feeling of getting a new item, almost game over'ing, things to keep the player on edge occasionally
Fun RNG - Variance of rolls must not deeply affect the game, and offer opportunities for counterplay
Immersive - The player needs to feel the atmosphere, be it them as duty-bound or free-spirited.
Epic - The setting must give the player a sense of awe when confronted with an exceptionally important scene


! Extra Game Goals !
Save - Be it to pick up the game at a later time or to save before a boss fight. To offer comfort to the player
Leaderboard - How well did each player do? An online leaderboard would encourage players
Customization - Offer the player to not dive into the code but still add various customization of their own, while within the game
Accessiblity - Able to play the game using just arrow keys to navigate
Leveling Stats - Assign stat points after each level to empower playstyles
Multiplayer - Solo play has great potential, but multiplayer always add another layer!



!! Buttons !!
https://www.w3schools.com/howto/howto_css_text_buttons.asp
- Probably better than adding text and a button next to it
- Add forced width to make it fill the entire width? (width 100%)
- Highlight to show its selected (good for future arrowkey play)


Javascript Array Methods instead of FOR loops
- Avoid using for loop when possible to loop through arrays
> Utilise javascript array methods.


Render
- Maybe call a render function that will change the render positions every ~second or so
- Rebuild the entire screen from scratch is a way to do it?
> What about 2 seperate render functions - one for just rendering the entire screen, one for rendering animations that occur very often


Screen Management
- Using a variable to remember which screen is active?
- Maybe ??? Using a constant black screen to hide / show elements? (Control Z axis)
- https://www.w3schools.com/cssref/pr_pos_z-index.asp
- View width: 95vw. View HeighT: 95vh. (80% of screen)


Storyboard
- Need to think up a story(?)
> Like the 'yada yada brave adventurer / hero please save our kingdom' at start, then a 'muahahaha demon king will rule the world' kinda thing

Zones
- Do enemy zones dictate what level enemies are in them?
- Enemy zones are objects with keyvalues?
- How many enemies for a player to get out of a zone
- Shop scenery?
- Kingdom far-zoom scenery?



Idea (Leveling stats screen)
> Hit [Stats] or something and can press buttons to add to stats
    - Confirm button for confirmation
    - Back to go back to previous screen



Main Screen
- Game start (continue next time?)
- Settings (What else would they change, sound etc?)
- Customization? (Future)

*---------------------*         
|                     |
|                     |
|                     |
|    game start       |
|    other options    |
|    settings         |
*---------------------*





Battle Screen
Action States: 
> Attack / Spells / Items
- Attack (just basic attack using weapondamage calculation)
- Spells (consume mp, attack using abilities)
- Items (open consumables window) (might be scrollable https://www.geeksforgeeks.org/making-a-div-vertically-scrollable-using-css/ )
> Run (Abandon current zone run, return to start of zone)
    - Lose all current exp
    - Lose % of gold (probably half)

Find a place for messagebox? (find a beter spot) (or replace action box with messages (click to progress next?))
Background: encompass player / enemy / messagebox? (black opacity message box? Utilise alpha channel background color not opacity)

> Try the text typewriter option to put in the actionbox?
> Action buttons can look nicer - shove text to left and make narrow buttons?

*---------------------*         
| player        enemy |
|_____________________|
|  message box?       |
|---------------------|
| action  |player info|
| action  |enemy info |
*---------------------*



Idea: Popup a box (not alert) to notify after each battle, for next action:

Inbetween Fights
*---------------------*         
|       VICTORY       |
|                     |
|   Gains (Exp etc)   |
|   Loot Loot Loot    |
|                     |
|[Next] [Shop] [Inven]|
*---------------------*
- Also need to design inventory system
> Equipment
    > Show each equipped item (Weapon) > Press again to get a window of equippable items (include equipped item with an 'EQUIPPED' next to it?)
> Consumables
    > Recovery items to be usable between battles
> Skills
    > Read up on each individual ability and their effect


Spells
Scaling off Str, Agi, Int
- Some increase an attribute for a few turns?
- Others just deal damage



Enemy targeting
> For scaling, assign enemy target as a variable.
    - Adds possiblity for changing enemy target in future (multiple enemies)
    - Also save the enemy in an array probably


Shop
- Plain text in a screen for now (Popup or dedicated screen?)
- Possibly have an image serve as background (shop scenery)


HP Bars (Enemies)
- Enemies to have hp bar above their head
- ? Should enemies have their hp bars listed in a grid too?
    > Probably only when targeting them


Flexbox Overflow
- https://stackoverflow.com/questions/47446258/css-flexbox-overflow-100-width-elements
- overflow: hidden;


Audio (Music / Sounds)
- https://www.w3schools.com/jsref/met_audio_play.asp
- var audio = new Audio('audio_file.mp3');
- audio.play
- audio.pause (to stop)


Fade effect
- @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
- Utilise CSS animation


Animation Typing effect:
- https://css-tricks.com/snippets/css/typewriter-effect/
- Can ignore the blink-caret if it doesn't look nice
> Good to learn keyframe animation
> https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp


JSON Files for datastoring
- https://www.w3schools.com/js/js_json_parse.asp
> Try to change all the data_files to json format instead of saving them as .js files.