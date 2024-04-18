const backColor = "#222";


const dropdownclass = document.getElementsByClassName("dropdown-menu")
const buttonscroll = ".scroll-button"

let clicked = false

function scrollFunction() {

    if (!clicked) {
        dropdownclass[0].classList.add("clicked")
        researchElements[2].style.backgroundColor = backColor

        clicked = true
    }
    else {
        dropdownclass[0].classList.remove("clicked")
        researchElements[2].style.backgroundColor = '#B6B6B6'


        clicked = false
    }

}

/*cambio background color research bar*/
const researchElements = document.querySelectorAll(".research-element") /* utilizzo pure nella funzione precedente */
const researchBarText = document.getElementById("campo-text")
let click = false
function researchChange() {
    if (!click) {
        click = true
        researchElements.forEach(element => {
            element.style.backgroundColor = backColor
        });
    } else {
        click = false
        researchElements.forEach(element => {
            element.style.backgroundColor = "#B6B6B6"
        });
    }
}
researchBarText.addEventListener("click", researchChange)


/* scritta del main container */

const descrizione = document.querySelector('#bottom-string')
const container = document.querySelector('.main-container')
console.log("stringa modal: " + descrizione)
function showString() {
    descrizione.classList.toggle("show")
}

function dontShow() {
    descrizione.classList.remove("show");
}

container.addEventListener('mouseenter', showString)
container.addEventListener('mouseleave', dontShow)

/* +-+-+-+-+-+-+-+-+-+-+-+ */

/* cambio display  sul button Log in*/
const modals = document.querySelectorAll('.modal')
const close = document.querySelector('.close')
const header = document.querySelector('.modal-header')
function stampaModal() {

    const element = document.querySelector('.modal[data-show = "signup"]')

    element.style.display = "block"


}

function chiudiAvviso() {
    const element = document.querySelector('.modal[data-show = "signup"]')

    element.style.display = "none"
}
const signup = document.getElementById('signup')
signup.addEventListener('click', stampaModal)
close.addEventListener('click', chiudiAvviso)

/*create element */

/* DESCRIZIONE :

    Questa funzione serve per suggerire un film quando si clicca sulla casella di testo nella research bar.

    I film suggeriti sono degli Object, contenenti:
        url: url del poster del film
        titolo: il tiolo del film
        descrizionE: una breve descrizione
    
    questi Object sono inseriti in una lista (image_list)

    fatto ciò, è presente la funzione researchBarClicked che è suddivisa in tre stati:

        STATO 1: MAI CLICCATO ( cliccato = NULL)
            Crea tutti gli elementi per mostrare il film 
        
        STATO 2: È CLICCATO (cliccato = TRUE)
            In questo stato se si clicca nella casella di testo setterà display: none, quindi non mostrerà gli elementi

            *ESCE DALLA FUNZIONE (return)* -> per non rieseguire il set di tutti gli elementi
        
        STATO 3: NON È CLICCATO (cliccato = FALSE)
            In questo stato se si clicca la casella di testo setterà dispay = flex

            *ESCE DALLA FUNZIONE (return)* -> per non rieseguire il set di tutti gli elementi
            
        SPERO SIA CHIARO! 

        Danilo 👍


*/


/* object per i film */
function Immagine(url, titolo, descrizione) {
    this.url = url
    this.titolo = titolo
    this.descrizione = descrizione
}


/* Creazione lista film */
const image_list = [

    /* immagine 1*/
    new Immagine('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FwldHPp3TqTRarEvt5h1onk1Ld4s.jpg&f=1&nofb=1&ipt=8b123cec0d52f58017cc2c528cb3350db5b6969e64208d3b843b27ca286ab97c&ipo=images',
        'Colazione da Tiffany',
        'Colazione da Tiffany è un film del 1961 diretto da Blake Edwards, con Audrey Hepburn e George Peppard, tratto dall omonimo romanzo del 1958 di Truman Capote.'
    ),

    /* immagine 2 */
    new Immagine('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleganerd.com%2Fwp-content%2Fuploads%2F2022%2F12%2FFABELMANS-poster.jpg&f=1&nofb=1&ipt=b7f5237474283b79abfb745d4d78ac366c738baf2a7955d241042000f2eeb3a9&ipo=images',
        'The Fabelsman',
        'The Fabelmans è un film statunitense del 2022 diretto da Steven Spielberg'
    ),


    /*immagine 3*/
    new Immagine('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cinemasterpieces.com%2F72013%2Fpulpaug13.jpg&f=1&nofb=1&ipt=133885b377e6aaa89c0cce172be4974db6087267e067ea1787a5fa214333f51b&ipo=images',
        'Pulp Fiction',
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    )
];



const researchBar = document.querySelector('#researchBar')
const inputText = document.querySelector('#campo-text')
const filmpost = document.getElementById('film-post')
const title = document.querySelector('.title')
const desc = document.querySelector('.film-desc')

let cliccato = null
function researchBarClicked() {

    if (cliccato == true) {

        // rimuovo da researchBar la classe clicked
        researchBar.classList.remove('clicked')

        /*

            ancora da impementare una transition di uscita

        */

        filmpost.style.display = 'none'
        cliccato = false
        return

    } else if (cliccato == false) {
        researchBar.classList.add('clicked')
        filmpost.style.display = 'flex'

        cliccato = true

        return
    }

    //genero un numero casuale tra il numero di film nella lista
    const rand = Math.floor(Math.random() * image_list.length)

    //estrapolo l'object dalla lista
    const image = image_list[rand]

    filmpost.style.display = 'flex'

    // al click aggiugne la classe clicked a researcBar
    researchBar.classList.add('clicked')


    const img = document.createElement('img')
    /* set dell'object img */

    // titolo
    title.textContent = image.titolo

    // url
    img.src = image.url

    //descrizione 
    desc.textContent = image.descrizione


    /* +-+-+-+-+-+-+-+-+-+- */

    //aggiunta alla classe research-image
    img.classList.add('research-image')

    filmpost.appendChild(img)

    cliccato = true


}
inputText.addEventListener('click', researchBarClicked)


/* utilizzo data- */


const links = document.querySelectorAll('[data-link="true"]')

links.forEach(function (element) {
    element.addEventListener('mouseover', function () {

        element.classList.add("logout");
    });


    element.addEventListener('mouseout', function () {

        element.classList.remove("logout");
    });
});


