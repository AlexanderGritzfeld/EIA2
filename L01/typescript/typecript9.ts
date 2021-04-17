
namespace L01T { //damit es nicht rummeckert, dass ich Namen schon vergeben habe

//Arrays in denen die Gedichtsfetzen liegen

let part1: string[] = ["Das Leben", "Unser Nachbar", "Ein Pinguin", "Anarchie", "Die Welt, so wie wir sie kennen,"];

let part2: string[] = ["befreit", "konsumiert", "tötet", "legalisiert", "prophezeit"];

let part3: string[] = ["für dich", "die Leere", "noch einen Pinguin", "das Recht frei zu sein", "uns"];


//jetzt sollen die Arrays geshuffelt werden

part1.sort((a, b) => 0.5 - Math.random());
part2.sort((a, b) => 0.5 - Math.random());
part3.sort((a, b) => 0.5 - Math.random());


//jetzt sollen die Fetzen zusammengeführt werden und in der Konsole ausgegeben werden

let x: number = 0;

while (x < part1.length) {
    console.log(part1[x], part2[x], part3[x]);
    x++;
}

//wird der Refresh_bttn gedrückt wird die Seite neu geladen
document.getElementById("refresh_bttn").addEventListener("click", function(): void {
    location.reload();
    });

} //Ende Namespace
