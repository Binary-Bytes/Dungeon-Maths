/////////////// DEATH ///////////////

// Add player to fallen heroes and display final summary
function youDied(deathBy) {
    healthBar.style.width = '0';
    // Add hero to list of fallen heroes
    hero.death = deathBy;
    fallenHeroes.push(hero);
    // Sort fallen heroes list
    fallenHeroes.sort( function(a,b) { return b.gameLevel - a.gameLevel; } );
    // Trim list if too long
    if (fallenHeroes.length > 25) {
        fallenHeroes.splice((fallenHeroes.length), 1);
    }
    localStorage.setItem('fallenHeroes', JSON.stringify(fallenHeroes));
    localStorage.setItem('options', JSON.stringify(options));
    // Kill character
    localStorage.removeItem('savedGame');
    listFallenStats(hero,'game-over');
        hero = null;
        hero = { canMove: false };
}


// Fade to black, reset menus, and fade back in
function fadeToMainMenu(callback) {
    fadeOut();
    setTimeout(function() {
        try {
            map = null;
            enemies = null;
            numberOfEnemies = 0;
            totalWeight = 0;
            hero.canMove = false;
            // Reset challenge and boss levels
            hero.challengeMode = false;
            hero.bossLevel = false;
            hero.bossHasSpawned = false;
            hero.bossIsDead = false;
            optionsPosition = 'closed';
            document.getElementById('options-menu').style.transform = 'translateX(-100%)';
            var title = document.querySelector('.flip-container');
                title.style.display = 'flex';
            var gameOver = document.getElementById('game-over');
                gameOver.style.display = 'none';
                gameOver.style.opacity = '0';
            titleButtons();
            setTimeout(function() {
                callback();
            }, 500);
        } catch(e) {}
    }, 1000);
}


// Display how the character died in a plethora of humorous ways
var deathText = {

    spikes:     ['Tripped and fell on some spikes',
                'Got into a fight with some spikes and lost',
                'Death by spikes',
                'Tried to make out with some without falling on spikes and was very unsuccessful'],

    fireGrate:  ['Got served up extra crispy by a fire grate',
                'Cooked to perfection by a fire grate',
                'Killed by a fire grate',
                'Tripped and fell into a fire grate'],

    math:       ['Forgot maths',
                'Didn&apos;t pay attention in maths class',
                'Got in a fight with a number and lost',
                'Death by maths',
                'Killed by numbers',
                'Discovered Maths is hard'],

    time:       ['Ran out of time',
                'Didn&apos;t value time',
                'Didn&apos;t know the value of time'],

    bat:        ['Nibbled to death by a bat',
                'Killed by a flying rat',
                'Death by bats',
                'Lost a fight to a bat'],

    gelCube:    ['Ate too much Jelly',
                'Got a big hug from a Gelatinous Cube',
                'Killed by a moving jelly'],

    spider:     ['Not very good at making friends with spiders',
                'Food for the babies of the Spider Queen',
                'Discovered that Spiders are very aggressive huggers',
                'Tripped and fell into a spiders mouth'],

    numMage:    ['Killed by the weakest enemy in the entire game',
                'Got out-numbered by a Number Mage',
                'Death by Number Mage',
                'Do Number Mages even deal damage ??',
                'Breaking News : A knight killed by that enemy that does almost no damage !!'],

    oculord:    ['Died valiantly while battling an Oculord',
                'Death by Oculord',
                'Eaten by a one-eyed flying meatball',
                'Was food on the table for a family of Oculords'],
                
    vampire:    ['Killed by a vampire',
                'Was the main course at the all you can eat vampire buffet',
                'Decided to help out a starving vampire',
                'Death by a Vampire',
                'Vampire : Thanks for the Delicious Blood'],

    spiderQueen:    ['Food for Spider Queen',
                    'Was food on the table for a family of spiders',
                    'Got wrapped up like a Christmas present for some hungry spider kids',
                    'Eaten by a big mommy spider',
                    'Tried to headbutt the Spider Queen, but got eaten instead'],

    vampireLord:    ['Killed by the Vampire Lord',
                    'The Vampire Lord does not like non-vampires or non-bats',
                    'Vampire Lord thanks you for the delicious blood',
                    'More blood for the vampire lord'],

    threeKnights:   ['Was defeated by The Three Knights'],
}


// The player won, show a scene and end game
function theEnd() {
    heroContainer.style.opacity = '0';
    var topBar = document.getElementById('top-bar');
        topBar.style.opacity = '0';
    var bottomBar = document.getElementById('bottom-bar');
        bottomBar.style.opacity = '0';
    hero.canMove = false;
    fadeIn();
    var message1 =  ['The Number Knights have been reunited and are now stronger than ever.',
                    'The evil beasts within this dungeon have all been slained, and peace has once again returned to this world.',
                    'Thank you for playing Dungeon Maths :)'];
    textBubble(message1);
    var interval = setInterval(function() {
        if (multipart === 'done') {
            clearInterval(interval);
            var message2 = ['theend'];
            textBubble(message2,3000);
            var ending = setInterval(function() {
                if (multipart === 'done') {
                    clearInterval(ending);
                    youDied('Quest Complete');
                    setTimeout(function() {
                        heroContainer.style.opacity = '1';
                        topBar.style.opacity = '1';
                        bottomBar.style.opacity = '1';
                    }, 1000);
                    options.endgame = false;
                    localStorage.setItem('options', JSON.stringify(options));
                }
            }, 500);
        }
    }, 500);
}