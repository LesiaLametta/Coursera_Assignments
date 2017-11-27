let myPlaces = ['England', 'Norway', 'Atlantic Ocean'];

let friendPlaces = ['Norway', 'Holland', 'Hungary'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
    for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
        if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
            console.log('Match: ' + myPlaces[myPlacesIndex]);
        }
    }
}

//Output: Norway