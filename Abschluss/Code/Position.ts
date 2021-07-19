namespace SoSe21 {

    export interface Position {

        x: number;
        y: number;
    }

    //Startpositionen Team links (otherTeam)
    export let startPosLeft: Position[] = [{x: 75, y: 350}, {x: 250, y: 100}, {x: 250, y: 600}, {x: 350, y: 250}, {x: 350, y: 450}, 
            {x: 450, y: 350}, {x: 675, y: 250}, {x: 675, y: 450}, {x: 750, y: 350}, {x: 750, y: 150}, {x: 750, y: 550}];

    //Startpositionen Team rechts
    export let startPosRight: Position[] = [{x: 1025, y: 350}, {x: 850, y: 100}, {x: 850, y: 600}, {x: 750, y: 250}, {x: 750, y: 450},
             {x: 650, y: 350}, {x: 425, y: 250}, {x: 425, y: 450}, {x: 350, y: 350}, {x: 350, y: 150}, {x: 350, y: 550}];
}