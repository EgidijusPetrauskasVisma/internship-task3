const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';

const wordSearch = (word) => {
    const textArray = text.split(' ');
    const filteredArray = textArray.map(x => x.includes('.') ? x.replace('.', '').toLowerCase() : x.toLowerCase());
    return filteredArray.includes(word.toLowerCase());
}

module.exports = wordSearch;