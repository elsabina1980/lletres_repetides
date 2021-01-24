(function() {
    const name = ['Ó', 's', 'c', 'a', 'r']
    const element1 = document.getElementById('console1');

    // EXERCICI 1
    name.forEach(letter => {
        console.log(letter);
        element1.innerHTML += `${letter}<br/>`;

    });

    // EXERCICI 2
    const element2 = document.getElementById('console2');
    name.forEach(letter => {
        const isVowel = /[[aeiou]|[\u0300-\u036f]]/i.test(letter.normalize('NFD'))
        let result = '';
        if (isVowel) {
            result = `He trobat la VOCAL: ${letter}`;
        } else if (/[a-z]/i.test(letter)) {
            result = `He trobat la CONSONANT: ${letter}`;
        } else if (/[0-9]/.test(letter)) {
            result = `Els noms de persones no contenen el número: ${letter}`;
        }

        console.log(result);
        element2.innerHTML += `${result}<br/>`;
    });

    // EXERCICI 3
    const element3 = document.getElementById('console3');
    const lettersCount = name.reduce((count, letter) => {
        const normalizeLetter = letter.normalize('NFC').toUpperCase()
        count[normalizeLetter] = count[normalizeLetter] ? count[normalizeLetter] + 1 : 1;

        return count;
    }, {});

    for (const property in lettersCount) {
        const res = `${property}: ${lettersCount[property]}`;
        console.log(res);
        element3.innerHTML += `${res}<br/>`
    }

    // EXERCICI 4
    const surname = ['C', 'a', 's', 'a', 'i', 's'];
    const fullName = [...name, " ", ...surname];
    const element4 = document.getElementById('console4')
    fullName.forEach(letter => {
        console.log(letter)
        element4.innerHTML += `${letter}<br/>`
    })
})();