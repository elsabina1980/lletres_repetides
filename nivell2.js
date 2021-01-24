(function() {
    const validChars = "A-Z0-9\u00C0-\u00ff+_.-"
    const emailRegExp = new RegExp(`[${validChars}]+@[${validChars}]+`, "gi");
    const source = document.getElementById('source');
    const result = source.innerText
        .match(emailRegExp)
        .filter((value, index, self) => {
            // email addresses are not case sensitive
            return self.indexOf(value.toLowerCase()) === index;
        });

    console.log(result);
    document.getElementById('console5').innerHTML = result.join(', ');
})();