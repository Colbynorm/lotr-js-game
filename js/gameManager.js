let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Aragorn":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Gimli":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case "Legolas":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case "Gandalf":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        }
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<img src="gamePics/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3> <p class="health-player">Health: ' + player.health + '</p> <p>Mana: ' + player.mana + '</p> <p>Strength: ' + player.strength + '</p> <p>Agility: ' + player.agility + '</p> <p>Speed: ' + player.speed + '</p></div>';
        console.log(player);
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Create Enemy!
        let enemy00 = new Enemy("Sauron", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Witch King Of Angmar", 200, 0, 150, 80, 150);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        console.log(enemy);
        getHeader.innerHTML = '<p>Task: Choose Your Move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="gamePics/' + enemy.classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + enemy.classType + '</h3> <p class="health-enemy">Health: ' + enemy.health + '</p> <p>Mana: ' + enemy.mana + '</p> <p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p> <p>Speed: ' + enemy.speed + '</p></div>';
    }
}