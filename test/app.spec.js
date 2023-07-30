describe('A számítás tesztelése', () => {
    it('A 30, 35 bementre 8.60364654526569', () => {
        const expected = 8.60364654526569
        const actual = calcRadius(30, 35)
        expect(actual).toEqual(expected)
    })
    it('A 130, 140 bementre 41.78119462962506', () => {
        const expected = 41.78119462962506
        const actual = calcRadius(130, 140)
        expect(actual).toEqual(expected)
    })
    it('A 0, 35 bementre Hiba', () => {        
        expect(() => {
            calcRadius(0, 35)
        }).toThrow();
    })
    it('A 30, 0 bementre Hiba', () => {        
        expect(() => {
            calcRadius(30, 0)
        }).toThrow();
    })
})

describe('A bemenet ellenőrző függvény', () => {
    it('A 30 bementre true', () => {
        const expected = true
        const actual = isValidInput(30)
        expect(actual).toBe(expected)
    })
    it('Az 1 bementre true', () => {
        const expected = true
        const actual = isValidInput(1)
        expect(actual).toBe(expected)
    })
    it('A abc bementre false', () => {
        const expected = false
        const actual = isValidInput('abc')
        expect(actual).toBe(expected)
    })
    it('A 0 bementre false', () => {
        const expected = false
        const actual = isValidInput(0)
        expect(actual).toBe(expected)
    })
    it('A -4 bementre false', () => {
        const expected = false
        const actual = isValidInput(-4)
        expect(actual).toBe(expected)
    })
    it('A 35a bementre false', () => {
        const expected = false
        const actual = isValidInput('35a')
        expect(actual).toBe(expected)
    })
})

