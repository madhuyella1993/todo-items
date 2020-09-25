

const solve = str => {
    let j = 0;
    let result = '';
    while (j < str.length) {
        if (str[j] === str[j + 1]) {
            ++j;
        } else {
            result += str[j];
        }
        j++;
    }
    return result || 'Empty String';
}

console.log(solve('aabbccccddeecc'));