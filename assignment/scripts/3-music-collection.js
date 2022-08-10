console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    } // adds album info!
    collection.push(album); // adds it to the array
    return album;
}

// oops i got carried away adding albums i love!
console.log(addToCollection('Renaissance', 'Beyonce', 2022));
console.log(addToCollection('Dreamland', 'Glass Animals', 2020));
console.log(addToCollection('New Me, Same Us', 'Little Dragon', 2020));
console.log(addToCollection('Assume Form', 'James Blake', 2019));
console.log(addToCollection('A Moment Apart', 'Odesza', 2017));
console.log(addToCollection('Nurture', 'Porter Robinson', 2021));
console.log(addToCollection('Crash', 'Charli XCX', 2022));
console.log(addToCollection('Chromatica', 'Lady Gaga', 2020));
console.log(addToCollection('Caracal', 'Disclosure', 2015));
console.log(addToCollection('How to be a Human Being', 'Glass Animals', 2016));
console.log(addToCollection('Zaba', 'Glass Animals', 2014));

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist, 'published in:', array[i].yearPublished);
    } // loops through each item in the array printing the album information!
    return '--- end of collection ---';
} // end showCollection function

console.log(showCollection(collection));

function findByArtist(string, array) {
    let work = []; // blank array to store values
    for (let i = 0; i < array.length; i++) {
        if (array[i].artist === string) {
            work.push(array[i]);
        } // loop to check through collection for artists work
    }
    return work; // show us those results!
}

console.log(findByArtist('Glass Animals', collection));
console.log(findByArtist('Doja Cat', collection));