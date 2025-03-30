//document.getElementById("liczenie").innerText = 5;

// let liczenie = 0;

// console.log(liczenie);

//zad 1

// var mojWiek = 15;

// console.log(mojWiek);

//zad 2

    // var mojWiek = 15;
    // var lataPsa = 3;

    // var mnozenie = mojWiek * lataPsa;

    // console.log(mnozenie);

//zad 3

    // var bonusowePunkty = 50; 

    // console.log(bonusowePunkty);

    // bonusowePunkty = bonusowePunkty + 50;

    // console.log(bonusowePunkty);

    // bonusowePunkty = bonusowePunkty - 75;

    // console.log(bonusowePunkty);

    // bonusowePunkty = bonusowePunkty + 45;

    // console.log(bonusowePunkty);

//zad 4


//lekcja 5

// function odliczanie() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }


// odliczanie();
// odliczanie();

//zadanie

// function liczba() {
//     console.log(42);
// }

// liczba();

//lekcja 6


//zadanie 

// var lap1 = 34;
// var lap2 = 35;
// var lap3 = 36;

// function logLapTime() {
//     var calosc = lap1 + lap2 + lap3;
//     console.log(calosc);
// }

// logLapTime();


//lekcja 7


// zadanie

// var okrazeniaWykonane = 0;

// function okrazenia(okrazeniaWykonane = 3) {
//     okrazeniaWykonane = okrazeniaWykonane + 1;
// }


// okrazenia();
// okrazenia();
// okrazenia();

//lekcja 8

//zadanie

// var liczenie = document.getElementById("liczenie");
// var liczba = 0;

// function inkrementacja() {
//     liczba++;

//     liczenie.innerText = liczba;
// }

//lekcja 9

//zadanie 

// function zapis() {
//     console.log(liczenie)
// }

//lekcja 10

    // var per = "per"

    // var wiadomosc = "masz trzy nowe wiadomości";

    // console.log(per + ", " + wiadomosc + "!");

    //zadanie 

    // var name = "per";
    // var wiadomoscDoUzytkownika = "u have been logged in to the application!"

    // console.log(wiadomoscDoUzytkownika + ", " + name + "!");

    //zadanie 

    // var name = "Jędrzej";
    // var greeting = "Hi, my name is ";

    // var myGreeting = greeting + name;

    // console.log(myGreeting);

    //lekcja 11

    // let name = 42;
    // let greeting = "Hi, my name is ";
    // let myGreeting = greeting + name;

    // console.log(myGreeting);

    // let points = 4;
    // let bonusowePunkty = "10";

    // let calosc = points + bonusowePunkty;

    // console.log(calosc);

    // console.log(4 + 5);  // 9
    // console.log("2" + "4"); // 24
    // console.log("5" + 1); // 51
    // console.log(100 + "100"); // 100100


    //lekcja 12

    //zadanie

    // var welcomeEl = document.getElementById("welcomeEl");

    // var name = "Jędrzej";
    // var greeting = "welcome back in our page Mr. ";

    // welcomeEl.innerText = greeting + name;

    // welcomeEl.innerText += '👋';

    //lekcja 13 
     
    let countEl = document.getElementById("liczenie")
    let zapisElement = document.getElementById("element-zapisania");
    let count = 0

    function inkrementacja() {
        count+= 1;
        countEl.textContent = count;
    }

    function zapis() {
        let countStr = count + " - ";
        zapisElement.textContent += countStr;
    }

    function reset() {
        count = 0;
        countEl.textContent = count;
        zapisElement.textContent = 'poprzednie wejścia: ';
    }