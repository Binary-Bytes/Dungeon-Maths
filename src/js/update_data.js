var newestVersion = '1.5.6';

// Check version number and allow adding in new data
(function updateGameData() {

    if (localStorage.getItem('options') !== null && localStorage.getItem('options') !== undefined) {
        var retrievedOptions = localStorage.getItem('options');
            options = JSON.parse(retrievedOptions);

        if (options.version === newestVersion) {
            
        } else {
            wipeGameData();
        }
    }

    // Update game data with any new data
    function updateVersion() {
        setTimeout(function() {
            options.version = newestVersion;
            localStorage.setItem('options', JSON.stringify(options));

            alert('New Update Found !!');
            alert('Dungeon Maths Will Reload Now To Install It :)');

            location.reload();
        }, 9000);
    }

    // Wipe game data to update it if needed
    function wipeGameData() {
        setTimeout(function() {
            options.version = newestVersion;
            localStorage.setItem('options', JSON.stringify(options));

            alert('New Update Found !!');
            alert('Everything Will Have To Be Wiped For This Update :(');

            if (localStorage.getItem('options') !== null) {
                localStorage.removeItem('options');
            }
            if (localStorage.getItem('savedGame') !== null) {
                localStorage.removeItem('savedGame');
            }
            if (localStorage.getItem('fallenHeroes') !== null) {
                localStorage.removeItem('fallenHeroes');
            }

            location.reload();
        }, 9000);
    }

}());