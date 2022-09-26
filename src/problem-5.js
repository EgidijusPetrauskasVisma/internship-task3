const paragraph = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';

const wordSearch = (targetWord) => {
    const wordsInParagraph = paragraph.replace(/\./g, ' ').split(' ');
    return Boolean(wordsInParagraph.find(word => word.toLowerCase() === targetWord.toLowerCase()));

}

module.exports = wordSearch;