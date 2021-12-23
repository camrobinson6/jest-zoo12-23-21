test("Palindrome Checker", () => {
    word = "hannah"
    let pallyCheck = (word) => {
        return word.split("").reverse().join("")
    }
    expect(pallyCheck(word)).toBe(word)
})