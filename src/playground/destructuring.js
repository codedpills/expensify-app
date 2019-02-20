// Object Destructuring
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);

// Array Destructuring
const item = ['Coffee (cold)', '$2.00', '$2.50', '$2.70'];
const [coffee, , medium_price] = item; 
console.log(`A medium ${coffee} costs ${medium_price}.`)