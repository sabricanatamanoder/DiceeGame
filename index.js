var randomNumber1 = Math.floor(Math.random() * 6 + 1)
// Math.random işlevi ile 0 ilâ 0.9 arasında sayılar üretilir.
// Bu sayıları 6 ile çarptığımızda 0'dan 5'e kadar sayılar üretebiliriz.
// Ancak onların ondalıklı olmasını istemiyoruz.
// Bu yüzden Math.floor methodunu kullanıp sayımızı aşağı yuvarlıyoruz.
// Buna 1 ilâve ettiğimizde artık 1-6 arasında sayı üretmeye hazırız.

var randomDiceImage = "dice" + randomNumber1 + ".png";

// Fotoğraf isimlerimizi başka bir değişkende dice stringi, rastgele sayı ve png
//dosyasıyla concatenation ediyoruz ki, 1-6 arasında dice1'den 6'ya uzanan bir string oluşturabilelim.

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png-images/dice6.png
// images ile fotoğraflarımızın kaynağına erişiyoruz.
//Onu daha sonra yukarıda oluşturduğumuz değişkenle birleştiriyoruz.

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// src kaynağının randomImageSource'u koyduk.
// bu sayede her sayfayı yenilediğimizde, birinci oyuncu
// kısmına başka bir fotoğraf gelecek.
var randomNumber2 = Math.floor(Math.random() * 6 + 1)

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 Wins 🚩"
    
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
