var startMyDay = function () {
    return "Time for coffee and a shower!";
};

console.log(startMyDay());

var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("Chocolate chip"));

var introduce = function (name, occupation) {
    return `Hi, I'm learning to become a ${occupation} and my name is ${name}.`;
};

console.log(introduce("Elena", "Frontend Developer"));
console.log(introduce("Hunter", "Entrepeneur"));

var hydrationFeedback = function () {
    var numGlasses = prompt(
        "How many glasses of water did you have today?");
        if (numGlasses == 8) {
            console.log("Congrats, You're getting enought water");
        } else {
            console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
        }
};

hydrationFeedback();