var famousPeople = {
    1: "Babu owino",
    2: "Mammito",
    3: "Baba",
    4: "Uhuru",
    5: "Kibaki",
    6: "Natalie Tewa",
    7: "Wangari Mathai",
    8: "Obama",
    9: "Mandela",
    9: "Tom Mboya",
    10: "Ruto",
    11: "Atwoli",
    12: "Jeff",
    13: "Koinange",
    14: "Eric Omondi",
    15: "Njugush",
    16: "Churchill",
    17: "Matiangi",
    18: "Saitoti",
    19: "michuki"
};

var musicians = {
    1:"Akothee",
    2:"Sauti Sol",
    3:"Elani",
    4:"Burna Boy",
    5:"Beyonce",
    6:"Willy Paul",
    7:"JuaCali",
    8:"Wahu",
    9:"King Kaka",
    10:"Diamond",
    11:"Juliani",
    12: "Femione",
    13: "Kahush",
    14: "Willy Paul",
    15: "JuaCali",
    16: "Wahu",
    17:"King Kaka",
    18: "Diamond"
};

var music = {
    1: "Wamlambez",
    2: "Bababa Banjuka…",
    3: "Accelerator",
    4: "KDF",
    5: "Bazokizo",
    6: "Utawezana",
    7: "Misiwezi"
};

var animals = {
    1: "lion",
    2: "Girraffe",
    3: "Ostrich",
    4:"dog",
    5: "Cow",
    6: "Buffalo",
    7: "Zebra",
    8: "Wild beast",
    9: "Leopard",
    10: "Cheetah",
    11:"Warthog",
    12: "Mouse",
    13:"Chicken"
};

var cities = {
    1:"Nairobi",
    2: "Mombasa",
    3: "Nakuru",
    4:"Accra",
    5:"Lagos",
    6:"New York",
    7:"London",
    8:"Cape Town",
    9:"Johannesburg",
    10: "Washington DC",
    11: "Berlin",
    12:"Frankfurt",
    13:"Cairo",
    14:"Addis Ababa",
    15:"Kampala",
    16:"Dar E Salam",
    17:"Seattle",
    18:"Kigali",
    19:"Bujumbura"
};

var countries = {
    1: "UK",
    2: "US",
    3:"Germany",
    4: "Netherlands",
    5:"South Africa",
    6:"Rwanda",
    7: "Uganda",
    8:"Sweden",
    9:"Australia",
    10:"Mauritius",
    11:"Tanzania",
    12: "Burundi",
    13:"Canada",
    14:"Egypt",
    15:"Israel",
    16: "Somalia",
    17: "Zimbambwe"
};

var sheng = {
    1:"Arif",
    2: "Jaba",
    3:"Tenje",
    4:"Sonko",
    5:"Rwabe",
    6:"Nyuria",
    7:"Mneti",
    8:"Panch",
    9:"Ngori",
    10:"Mbogi",
    11:"Manga",
    12:"Ndai",
    13:"Rieng",
    14:"Form",
    15:"Njege",
    16:"karau",
    17:"Ndom",
    18: "Yengs",
    19: "Kuseti",
    20: "Lamba lolo",
    21: "Rangi ya thao",
    22:  "Empress",
    23: "Mbongi",
    24: "Wamlambez"

};
var food = {
    1:"Ugali",
    2:"Githeri",
    3: "Pilau",
    4: "Nyama Choma",
    5:"Chapati",
    6: "Kachumbari",
    7: "Chips Mwitu",
    8: "Mutura",
    9: "Irio",
    10:"Kamande"
};
var landmarks = {
    1: "Maasai Mara",
    2: "Amboseli",
    3: "Diani",
    4: "Tsavo National Park",
    5: "Samburu national Park",
    6: "Lake nakuru",
    7: "Lamu",
    8: "Mombasa",
    9: "Nairobi National Park",
    10: "Elephant Park",
    11: "KICC"

};

var phrases = {
    1: "Itabidi uzoe",
    2: "I'm in a small meeting",
    3: "wacha niende nirudi",
    4: "Me i love Nairobi",
    5: "Tuma na ya Kutoa",
    6: "Hii zoom ingekuwa email",
    7: "Kesho ni pia siku",
    8: "Bei ya jioni",
    9: "There is food at home",
    10: "Hii joto ni ya mvua"
};

var categories = [famousPeople, musicians, music, animals, cities, countries, sheng, food, landmarks, phrases];

/*===========================================================Timer function=================================================================*/
//set minutes
var mins = 2;

//calculate the seconds
var secs = mins * 60;

//countdown function is evoked when page is loaded
function countdown() {
    setTimeout('Decrement()', 60);
}

//Decrement function decrement the value.
function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");

        //if less than a minute remaining
        //Display only seconds value.
        if (seconds < 59) {
            seconds.innerHTML = secs;
        }

        //Display both minutes and seconds
        //getminutes and getseconds is used to
        //get minutes and seconds
        else {
            minutes.innerHTML = getminutes();
            seconds.innerHTML = getseconds();
        }
        //when less than a minute remaining
        //colour of the minutes and seconds
        //changes to red
        if (mins < 1) {
            minutes.style.color = "red";
            seconds.style.color = "red";
        }
        //if seconds becomes zero,
        //then page alert time up
        if (mins < 0) {
            alert('time up');
            minutes.value = 0;
            seconds.value = 0;
        }
        //if seconds > 0 then seconds is decremented
        else {
            secs--;
            setTimeout('Decrement()', 1000);
        }
    }
}

function getminutes() {
    //minutes is seconds divided by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    //take minutes remaining (as seconds) away
    //from total seconds remaining
    return secs - Math.round(mins * 60);
}
/*==========================================================================================================================================*/

/*===================================================================Random Access==========================================================*/
function randomSelector() {
    var objectNumber;
    var categoryNumber;

    function randomNumberGeneratorCategories() {
        let max = categories.length;
        let min = 0;

        function randomNumber() {

            return Math.random() * (max - min) + min;
        }

        return (Math.floor(randomNumber()));
    }

    function randomNumberGeneratorObjects() {
        let max = categories.length;
        let min = 0;

        function randomNumber() {

            return Math.random() * (max - min) + min;
        }

        return (Math.floor(randomNumber()));
    }

    var categoryNumber = randomNumberGeneratorCategories();
    var objectNumber = randomNumberGeneratorObjects();

    var generatedWord = categories[categoryNumber][objectNumber];

    document.getElementById('word-display').innerHTML = generatedWord;

    return generatedWord;
}
function startGame() {
    randomSelector();
    countdown();
}
/*==========================================================================================================================================*/
//start of scoreboard code

//initialisation and declaration of the start score

var score = 0;

//declaration of function to add score and bring up the next word

function tick() {
    score += 1;
    document.getElementById('score-board').innerHTML = score;
    randomSelector();
}

//declaration of function to pass and bring up another word

function pass() {
    randomSelector();
}

//declaration of function to reset the game

function reset() {
    document.getElementById('score-board').innerHTML = 0;
    randomSelector();
}
