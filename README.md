# Objectif de ce code

Ce programme demande à l’utilisateur de saisir un nombre au clavier, puis affiche ce nombre dans le terminal.


1- const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});
* readline est un module de Node.js qui permet de lire ce que l’utilisateur tape.
* process.stdin = l’entrée (le clavier).
* process.stdout = la sortie (l’écran du terminal).
* rl est le nom de l’objet créé (abréviation de readline). On s’en sert ensuite pour poser des questions.

2- rl.question("Entrez un nombre :", (answer) => {
    ...
});
* Affiche le texte « Entrez un nombre : » et attend que l’utilisateur tape quelque chose puis appuie sur Entrée.
* Ce qu’il a tapé est donné à la fonction fléchée (answer) => { ... }, dans la variable answer.
* Cette fonction s’appelle un callback : elle s’exécute plus tard, quand l’utilisateur a répondu.



3- const number = Number(answer);
* Ce que l’utilisateur tape est toujours du texte ("15" et non 15). Number() le convertit en vrai nombre, ce qui permet de faire des calculs.


4- console.log("Le nombre est :", number);
* Affiche le message


5- rl.close();
* Indispensable : sans cette ligne, le programme reste ouvert et ne se termine jamais.