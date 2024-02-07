var img = 11

function change() {
    setTimeout(function() {
    if(img == 16) {
        img=11;
    }
    document.getElementById('miau').src = "../img/"+img+".jpg";
    img++;
    
}
, 5000);
};

text = 1

function moveRight() {
    if(text == 1) {
    document.getElementById('text').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    text++;
    document.getElementById('page').innerHTML = "2/2"
    }
}

function moveLeft() {
    if(text == 2) {
    document.getElementById('text').innerHTML = "Jesteśmy firmą, która od wielu lat działa na rynku, wielu klientów jest zadowolonych z naszych usług. Wystarczy tylko zobaczyć na nasze opinie na naszym facebooku. Zapraszamy do kontaktu z nami. "
    text--;
    document.getElementById('page').innerHTML = "1/2"
    }
}