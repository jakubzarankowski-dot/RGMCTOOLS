function pokazWynik() {
    const spawny = Number(document.getElementById("spawny").value);
    const cena = Number(document.getElementById("cena").value);

    if (!spawny || !cena) {
        document.getElementById("wynik").textContent = "Wpisz obie wartości!";
        return;
    }

    const wynik = spawny * cena;

    document.getElementById("wynik").textContent =
        "Wartość: " + wynik.toLocaleString("pl-PL") + " $";
}