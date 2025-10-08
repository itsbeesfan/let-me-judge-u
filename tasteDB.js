const tasteDB = {
    "frank ocean": {
        category: "me",
        comment: "you feel things very strongly, don't you?",
        score: 10
    },
    "daniel caesar": {
        category: "me",
        comment: "laid-back soft boy, in the best way possible.",
        score: 10
    },
    "omar apollo": {
      category: "me",
      comment: " i bet you like daniel caesar, steve lacy or rex too.",
      score: 8
    },
    "steve lacy": {
        category: "me",
        comment: "i love your vibe. you probably dress amazing too.",
        score: 9
    },
    "malcolm todd": {
        category: "me",
        comment: "i love your vibe. you probably dress amazing too.",
        score: 9
    },
    "rex orange county": {
        category: "me",
        comment: "you like that indie-jazz-honest sound. i like you.",
        score: 8
    },
    "clairo": {
        category: "me",
        comment: "OH MY GOD I LOVE YOU SO SO SO SO MUCH",
        score: 10
    },
    "the marias": {
        category: "me",
        comment: "you have to let me into more recs of this jazz, indie pop type feel",
        score: 9
    },
    "taylor swift": {
        category: "basic",
        comment: "main character, pumpkin spice ahh",
        score: 4
    },
    "sabrina carpenter": {
        category: "basic",
        comment: "yeah, so tell me more about your bad experiences with men...",
        score: 5
    },
    "ed sheeran": {
        category: "basic",
        comment: "did you like 2018? did you cry to 'perfect'?",
        score: 5
    },
    "katy perry": {
        category: "basic",
        comment: "you peaked when 'firework' or 'flowers' came out. im sorry.",
        score: 4
    },
    "beyonce": {
        category: "basic",
        comment: "...i mean you like good performances... the music tho...",
        score: 5
    },
    "benson boone": {
        category: "basic",
        comment: "maybe youre into the backflips? interesting choice though...",
        score: 5
    },
    "kendrick lamar": {
        category: "hiphop",
        comment: "you appreciate good lyricism, and i appreciate your taste.",
        score: 8
    },
    "kanye west": {
        category: "hiphop",
        comment: "massive W if we separate the art from the artist.",
        score: 7
    },
    "drake": {
        category: "hiphop",
        comment: "so... what did you think when the beef broke out?",
        score: 6
    },
    "2pac": {
        category: "hiphop",
        comment: "massive respect; you like great lyrics, great messages, and great music.",
        score: 8
    },
    "snoop dogg": {
        category: "hiphop",
        comment: "sure, snoop did a lot for west coast rap, but can we mention his instagram meme page???",
        score: 7
    },
    "chet baker": {
        category: "jazz",
        comment: "you appreciate the classics. maybe youre a little outdated, but you still got taste.",
        score: 7
    },
    "louis armstrong": {
        category: "jazz",
        comment: "you appreciate the classics. maybe youre a little outdated, but you still got taste.",
        score: 8
    },
    "ella fitzgerald": {
        category: "jazz",
        comment: "you like sweet, warm, lovely jazz. i love that.",
        score: 8
    },
    "frank sinatra": {
        category: "jazz",
        comment: "you like really talented musicians, and i bet you love it when they play christmas jazz on the holidays.",
        score: 8
    },
    "duke ellington": {
        category: "jazz",
        comment: "what instrument do you play in jazz band? let's make a band!",
        score: 8
    },
    "radiohead": {
        category: "existential",
        comment: "are you doing okay mentally? you think too much, but your playlist goes hard.",
        score: 7
    },
    "jeff buckley": {
        category: "existential",
        comment: "you need therapy. also, you must be upset your taste is getting used for tiktok edits.",
        score: 8
    },
    "the smiths": {
        category: "existential",
        comment: "have you been called 'female manipulator'? i know, their music goes hard though.",
        score: 8
    },
    "cigarettes after sex": {
        category: "existential",
        comment: "you like music for when you need a good cry. you play it 24/7 tho.",
        score: 7
    },
    "beach house": {
        category: "existential",
        comment: "you like that mellow, sad sound that feels like youre gonna float away. i like it too.",
        score: 8
    },
    "adrianne lenker": {
        category: "existential",
        comment: "you appreciate the raw, emotional, guitar music. i would appreciate even more if you went to therapy.",
        score: 6
    },
    "katseye": {
        category: "kpop",
        comment: "you swear katseye is not kpop, but if you like katseye im SURE you stan at least one kpop group.",
        score: 8
    },
    "new jeans": {
        category: "kpop",
        comment: "i miss newjeans too. waiting on their comeback for more great music...",
        score: 9
    },
    "twice": {
        category: "kpop",
        comment: "you know the choreos, im certain. youve also been on those kpop dance academies/lessons. its a W tho.",
        score: 8
    },
    "illit": {
        category: "kpop",
        comment: "you like the high energy, youthful, catchy stuff. i love it too.",
        score: 8
    },
    "aespa": {
        category: "kpop",
        comment: "i fw you, and you fw dubstep basslines, strong energetic melodies, and a charismatic group of girls.",
        score: 8
    },
    "bts": {
        category: "kpop",
        comment: "your fandom scares me a little... yall need to chill out a little.",
        score: 5
    },
    "blackpink": {
        category: "kpop",
        comment: "youre a massive stan... maybe to an obsessive point. you scare me a little.",
        score: 6
    },
    "depresion sonora": {
        category: "spanish-rock",
        comment: "follow your own rules, live your life. youre super rad.",
        score: 9
    },
    "milo j": {
        category: "spanish-trap",
        comment: "you like the trap stuff, and you vibe with the deep lyrics and homage to argentinian culture. massive respect.",
        score: 9
    },
    "c. tangana": {
        category: "spanish-trap",
        comment: "tell me you fw tiny desks, sick trap origins and folklore homages without telling me you like all that. i love you.",
        score: 8
    },
    "trueno": {
        category: "spanish-trap",
        comment: "you like sick verses, rap and trap. you're also probably really hype.",
        score: 8
    },
    "enjambre": {
        category: "spanish-rock",
        comment: "this is the mexican equivalent of the arctic monkeys, and i fw that heavy.",
        score: 8
    },
    "zoe": {
        category: "spanish-rock",
        comment: "lots of soul, lots of love life disappointment. also either you fw the unplugged vibe or the classic vibe.",
        score: 8
    },
    "los enanitos verdes": {
        category: "spanish-rock",
        comment: "you like THE classics. you also probably wish you were born in the 80s.",
        score: 8
    },
    "enanitos verdes": {
        category: "spanish-rock",
        comment: "you like THE classics. you also probably wish you were born in the 80s.",
        score: 8
    },
    "soda stereo": {
        category: "spanish-rock",
        comment: "you wish you were argentinian. you also wish you were cerati.",
        score: 8
    },
    "gustavo cerati": {
        category: "spanish-rock",
        comment: "you think you're a hopeless romantic. maybe you are, but is it really a good thing?",
        score: 7
    },
    "hombres g": {
        category: "spanish-rock",
        comment: "you're either a 50-year old or a teenager that found out about their existence not too long ago.",
        score: 7
    },
    "mana": {
        category: "spanish-rock",
        comment: "you cry to their lyrics. sometimes you can't relate, but man, they shake your bones.",
        score: 7
    },
}