var nameList = [
    { first: 'Luther', last: 'Conrad' },
    { first: 'Sebastian', last: 'Garret' },
    { first: 'Bob', last: 'Arden' },
    { first: 'Alex', last: 'Arden' }
];
function sortByName(nameList) {
    return nameList.sort(function (x, y) {
        if (x.last < y.last) {
            return -1;
        }
        else if (x.last > y.last) {
            return 1;
        }
        else {
            if (x.first < y.first) {
                return -1;
            }
            if (x.first > y.firsst) {
                return 1;
            }
            return 0;
        }
    });
}
console.log(sortByName(nameList));
