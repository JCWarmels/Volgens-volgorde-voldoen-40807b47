
const toetsVragen = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel benen heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een duits automerk",
    "Noem een waddeneiland",
];
const correcteAntwoorden = [
    "Parijs",
    "8",
    "IJsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

function loadQuestions()
{
    for (i = 1; i<=5; i++) {
        document.getElementById("Q" + i).innerHTML = toetsVragen[i-1];
    }
}

function checkAnswers() 
{
    A1 = document.getElementById('A1').value;
    A2 = document.getElementById('A2').value;
    A3 = document.getElementById('A3').value;
    A4 = document.getElementById('A4').value;
    A5 = document.getElementById('A5').value;
    results = comparing(A1, A2, A3, A4, A5)
    if (results.first) {
        document.getElementById("ShowOut").innerHTML = "Alle antwoorden zijn correct!";
    } else {
        document.getElementById("ShowOut").innerHTML = "Je hebt " + results.second + " vraag/vragen goed beantwoord en " + results.third + " vraag/vragen fout beantwoord!";
    }
}

function comparing($1,$2,$3,$4,$5) 
{
    var correct = 0;
    var wrong = 0;
    $ = Array($1,$2,$3,$4,$5);
    for (i=0; i<=4; i++) {
        if (i<=2) {
            if (correcteAntwoorden.includes($[i])) {
                correct += 1;
            } else {
                wrong += 1;
            }
        } else {
            if (correcteAntwoorden[3].includes($[i]) || correcteAntwoorden[4].includes($[i])) {
                correct += 1;
            } else {
                wrong += 1;
            }
        }
    }
    if (correct == 5) {
        return {
            first: true,
            second: correct,
            third: wrong,
        };
    } else {
        return {
            first: false,
            second: correct,
            third: wrong,
        };
    }
}