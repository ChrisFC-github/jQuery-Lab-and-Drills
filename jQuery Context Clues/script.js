function runFunc() {
    for (i = 1; i < 101; i++) {
        function createAccusation() {
            var h3 = document.createElement("h3");
            var h3TextNode = document.createTextNode("Accusation " + i);
            h3.appendChild(h3TextNode);
            document.body.appendChild(h3);
            h3.addEventListener("click", function outerFunction(i) {
                var FRIEND_NAME = ['Mary Debenham', 'Mrs. Hubbard', 'Princess Dragomiroff', 'Countess Andrenyi', 'McQueen'];
                var LOCATION_NAME = ['Pullman dining car', 'Sleeping car', 'Caboose', 'Bar car', 'British Pullman steam engine'];
                var WEAPON_NAME = ['Colt Model 1903', 'Colt Police Positive', 'Pillow', 'Cyanide', 'Arsenic', 'Sedative', 'Dining Knife', 'Fork', 'Fountain Pen', 'Wine Bottle', 'Suitcase', 'Swiss knife', 'Cork remover', 'Dinner plate', 'Coal shovel', 'Light fixture', 'Tea pot', 'Handkerchief', 'Icepick', 'Blanket'];

                
                alert(`I accuse ${FRIEND_NAME[Math.floor((Math.random() * FRIEND_NAME.length))]} with the ${WEAPON_NAME[Math.floor((Math.random() * WEAPON_NAME.length))]} in the ${LOCATION_NAME[Math.floor((Math.random() * LOCATION_NAME.length))]}`);
                
            });
        }

        createAccusation();

    }
}

runFunc();
