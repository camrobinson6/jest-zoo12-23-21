const operations = {
    add: (num1, num2) => {
        return num1 + num2
    },

    subtract: (num1, num2) => {
        return num1 - num2
    },

    multiply: (num1, num2) => {
        return num1 * num2
    },

    divide: (num1, num2) => {
        return num1 / num2
    }
}

describe("Math Tests", () => {
    
    it("Can add", () => {
        expect(operations.add(2,2)).toBe(4)
    })

    it("Can subtract", () => {
        expect(operations.subtract(5,3)).toBe(2)
    })

    it("Can multiply", () => {
        expect(operations.multiply(5,2)).toBe(10)
    })

    it("Can divide", () => {
        expect (operations.divide(10,2)).toBe(5)  
    })
})