function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}
const storeThoughts =
    ['"It is during our darkest moments that we must focus to see the light.” – Aristotle Onassis',
        ' "louds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.”  Rabindranath Tagore ',
        '"What you do speaks so loudly that I cannot hear what you say.” - Ralph Waldo Emerson',
        '"I am not a product of my circumstances. I am a product of my decisions.” - Stephen Covey ',
        '"We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle ',
        '"We cannot solve problems with the kind of thinking we employed when we came up with them.”  Albert Einstein ',
        ' "Out of difficulties grow miracles.” – Jean de la Bruyere ',
        ' "It is never too late to be what you might have been." - George Eliot',
        '"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill ',
        '"The time is always right to do what is right.” – Martin Luther King Jr']



function formatWisdom() {
    let thought = generateRandomNumber(storeThoughts.length)
    console.log("Hi beautiful soul, Here is the motivational thought for you!!")
    console.log(storeThoughts[thought])
}

formatWisdom();
