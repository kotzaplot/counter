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
