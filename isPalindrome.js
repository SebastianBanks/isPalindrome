function isPalindrome(word) {
    let word1 = String(word)
    const len = word1.length

    for (let i = 0; i < len; i++) {
        if (word1[i] !== word1[len - 1 - i]) {
            console.log(len - 1 - i)
            return false
        }
    }
    return true
}

console.log(isPalindrome("race car"))