//Iteriere über die Listenelemente
let agList = document.getElementById('ag-list').children;
for (let index = 0; index < agList.length; index++) {
    const element = agList[index];
    //Füge die odd/even-Klasse hinzu, damit die Elemente abwechselnd links und rechts auftauchen
    element.classList.add(index % 2 == 0 ? "even-element" : "odd-element");
    //Füge das icon der AG hinzu
    const ag_icon_img = document.createElement('img')
        //Falls ein Icon-Typ spezifiziert wurde, verwende diesen, ansonsten verwende den Dummy
    const icon_name = element.getAttribute('icon-name') ? element.getAttribute('icon-name') + '.svg' : 'dummy.png'
    ag_icon_img.src = "media/ag_icons/" + icon_name;
    element.appendChild(ag_icon_img);
} //Füge Icons zu den Kontaktdaten hinzu
listOfLinks = document.getElementsByTagName('a')
for (let index = 0; index < listOfLinks.length; index++) {
    if (listOfLinks[index].getAttribute('href').includes('mailto')) {
        listOfLinks[index].innerHTML = "<img src='media/mail.svg'/> " + listOfLinks[index].innerHTML
    }
    if (listOfLinks[index].getAttribute('href').includes('twitter')) {
        listOfLinks[index].innerHTML = "<img src='media/twitter.svg'/> " + listOfLinks[index].innerHTML
    }
    if (listOfLinks[index].getAttribute('href').includes('instagram')) {
        listOfLinks[index].innerHTML = "<img src='media/instagram.svg'/> " + listOfLinks[index].innerHTML
    }
}