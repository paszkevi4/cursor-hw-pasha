const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks = [4, 5, 5, 3, 4, 5]
const themedPairs = []

const getPairs = () => {
    const pairs = []
    let j = 0
    for ( let i = 0; i < students.length; i++) {
        if ( students[i] == 'Олександр' || students[i] == 'Ігор' || students[i] == 'Олексій' ) {
            pairs.push([students[i]])
        } else {
            pairs[j].push(students[i])
            j++
        }
    }
    return pairs
}

const combiner = ( pairs, themes ) => {
    for ( let i = 0; i < pairs.length ; i++) {
        const pairString = pairs[i].join(' та ')
        themedPairs.push([pairString, themes[i]])
    }
    return themedPairs
}

const markStudents = () => {
    const marked = []
    students.map( (el) => {marked.push([el, marks[students.indexOf(el)]])} )
    return marked
}

const markPairs = () => {
    let finalResult = []
    themedPairs.map( el => { finalResult.push([...el]) })
    finalResult.map( el => {el.push(Math.ceil(Math.random() * 5)) })
    return finalResult
}

console.group('new values')
console.log('students in pairs:', getPairs())
console.log('pairs with themes:', combiner(getPairs(), themes))
console.log('students with marks:', markStudents())
console.log('pairs with marks:', markPairs())
console.groupEnd('')
console.group('making sure start values has not changed')
console.log(students)
console.log(themes)
console.log(marks)
