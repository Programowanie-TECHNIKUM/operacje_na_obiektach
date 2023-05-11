const div = document.getElementById('info');


const auto = {
    marka: "BMW",
    model: "X5",
    rok: 2019,
    kolor: "czarny",
    przebieg: 4123,
    start: function() {
        alert('Auto zostalo uruchomione 🚗')
        uruchomiony = true;
    },
    stop: function() {
        if(uruchomiony) {
            alert('Auto zostalo zatrzymane 👍')
            uruchomiony = false;
        } else {
            alert('Auto nie zostalo uruchomione 🚫')
        }
    },
    info: function() {
        div.innerText = '';

        div.innerText += `Marka: ${this.marka}` + '\n';
        div.innerText += `Model: ${this.model}` + '\n';
        div.innerText += `Rok: ${this.rok}` + '\n';
        div.innerText += `Kolor: ${this.kolor}` + '\n';
        div.innerText += `Przebieg: ${this.przebieg}` + '\n';

    }
    
}





