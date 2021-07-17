let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

let words = story.split(' ');

let notifyUser = function (obj) {
    console.log(`The word count is ${obj.wordCounter}.`);

    console.log(`The sentence count is ${obj.sentenceCounter}.`);

    obj.overUseWordCounter.forEach(function (item) {
        console.log(`The word '${item.word}' has been used ${item.amount} time(s).`)
    });

}

let counterFactory = function () {
    return {
        overUseWordCounter: [
            { word: overusedWords[0], amount: 0 },
            { word: overusedWords[1], amount: 0 },
            { word: overusedWords[2], amount: 0 }
        ],
        sentenceCounter: 0,
        wordCounter: words.length

    }
}

let wordCounterObj = counterFactory();

let betterWords = words.filter(word => {
    return unnecessaryWords[0] !== word && unnecessaryWords[1] !== word && unnecessaryWords[2] !== word;
});


words.forEach(word => {
    if (word === wordCounterObj.overUseWordCounter[0].word) {
        wordCounterObj.overUseWordCounter[0].amount++;
    }
    else if (word === wordCounterObj.overUseWordCounter[1].word) {
        wordCounterObj.overUseWordCounter[1].amount++;
    }
    else if (word === wordCounterObj.overUseWordCounter[2].word) {
        wordCounterObj.overUseWordCounter[2].amount++;
    }

    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        wordCounterObj.sentenceCounter++;
    }
});

notifyUser(wordCounterObj);
console.log(betterWords.join(' '));
