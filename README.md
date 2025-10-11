# let me judge u: a music taste judging app
#### _without using the spotify api since its usage changed :c_

-------
### WARNING: PLEASE USE WITH FULL SCREEN!!!

-------

### what is this?
this is a website where you input 3 of your favorite artists, and i give you a verdict
based on my own music taste. here, i'll categorize you, rate each of your artists (with a little comment hehe) and give 
you a final score from 1 to 10.

### what does it contain? 
there are 3 main sections:
- **starting page**: the very first thing you see. here is where you input your 3 artists, and click on the "judge" me 
button for the magic! (there's also a small info tab on the bottom of the page.)
- **loading page**: nothing much, just a loading page. it's not really necessary, but i feel like it builds up anticipation
:)
- **verdict page**: my verdict on your taste! the background changes, the font might change, you'll get custom stickers for
your verdict, and a score from 1-10. you can also retry with different artists by clicking on the "retry" button.

### why?
because i enjoy music a LOT. i listen to it a lot, im a musician, and i feel like if there was a project that would have me
invested for hours (like this one did), it had to be about music.

also because my friends suggested this initially, and it sounded fun, so i actually did it...

### how it works:
there's a main html, with the 3 sections i mentioned earlier. it simply toggles them on and off. there is also a "taste" database
js, where all of the artists are in (thanks spotify api, you made my job so much harder ._. ). finally, one css for the different
themes/verdicts, and a main js to place the "stickers" and work the sections and verdicts.

### challenges and learning opportunities:
- **OH MY GOD SPOTIFY API** -- the restrictions starting may 15 made it so that you need to be a registered company with 250,000 users
to qualify for the extended Web API. this meant i had to work around it and find a way to "judge" user's music taste without the
API. 
- **javascript** -- i struggle a lot with js... my best friends during this were google, w3schools and gemini. on the plus side, 
my skill level increased.
- **the UI and design** -- it was hard making it look nice. the "formulaic" approach of _gradient background + font color + stickers_
should have been simple IN THEORY. but finding the right color palettes, and mainly, the right stickers was HARD. also removing the background
from the stickers took some time, but here we are.

### small extra info:
if it keeps saying "i don't know your artists, it might be a red flag"...

a) im sorry! reach out and maybe i'll add them to the catalogue... it's probably niche or maybe im just uncultured...

b) check out the .txt, it contains all the artists currently in the database. that way, you can find one you like and you can hear my comments on them!!

----
_thanks!! i had lots of fun making this, and i'll add more artists and genres/verdicts as time goes on. please contact me if
you'd like for anything specific to be added! feedback and/or suggestions are always highly appreciated!!_

[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)