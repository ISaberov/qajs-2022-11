//import nameIsValid from '../src/app'
//import nameIsValid from '..\\src\\app'
//import nameIsValid from 'C:\\Users\\Ildar.Saberov\\Desktop\\project3\\qajs-2022-11\\src\\app.js'
//import fullTrim from '../src/app'
//import getTotal from '../src/app'
//nameIsValid = (name) => !!name && name.length >= 2 && !name.includes(' ');
/**
 * Проверка имени пользователя
 * @param {string} name
 * @returns {boolean}
 */

export const nameIsValid = (name) => !!name && name.length >= 2 && !name.includes(' ');

/**
 * Удаление пробелов из строки
 *
 * @param {string} text
 * @returns {string}
 */

export const fullTrim = (text) => (text || '').replace(/\s/g, '');

/**
 * Подсчёт суммы заказа
 *
 * @param {[{quantity: number, name?: string, price: number}]} items
 * @param {number} discount
 * @example getTotal([{ price: 10, quantity: 10 }]) // 100
 * @example getTotal([{ price: 10, quantity: 1 }]) // 10
 * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
 * @example getTotal([{ price: 10, quantity: 0 }, { price: 10, quantity: 9 }]) // 90
 * @example getTotal([{ price: 10, quantity: 10 }, 10]) // 90
 * @example getTotal([{ price: 10, quantity: 10 }, 100]) // 0
 */
export const getTotal = (items = [], discount = 0) => {
    if (typeof(discount) !== 'number') {
        throw new Error('Скидка должна быть числом')
    }
    if (discount < 0) {
        throw new Error('Процент скидки не может быть отрицательным')
    }
    const total = items.reduce((item, acc) => {
        console.log(`  (!) item.price = ${item.price}, acc = ${acc}`)
        return acc + item.price * item.quantity;
    }, 0)
    return total - total * discount / 100;
}


//tests
describe('nameIsValid 100% coverage', () => {
    test('it loads witout errors', () => {
        expect(nameIsValid).toBeDefined();
        expect(typeof(nameIsValid)).toBe('function');
    })
    test('nameIsValid is string', function () {
        expect(nameIsValid('Иван')).toBe(true)
    });
    test('nameIsValid is one symbol', function () {
        expect(nameIsValid('И')).toBe(false)
    })
    test('nameIsValid is not a figure', function () {
        expect(nameIsValid(2)).toBe(false)
    })
})
//test('nameIsValid not a string', function() {
//    expect(nameIsValid(2)).toThrow()
//})


describe('fullTrim 100% coverage', () => {
    test('it loads witout errors', () => {
        expect(fullTrim).toBeDefined();
        expect(typeof(fullTrim)).toBe('function');
    })
    test('fullTrim is text', () => {
        expect(fullTrim("   Иван   " + "    ")).toBe("Иван")
    })
    test('fullTrim is text without space', function () {
        expect(fullTrim('')).toBe('')
    })
    //test('fullTrim is not number', function () {
    //    expect(fullTrim(2)).toThrow()
    //})
})

/*
describe('getTotal 100% coverage', () => {
    test.each`
    a   | b   | c   | expected
    ${} | ${} | ${} | ${}
    ${} | ${} | ${} | ${}
    ${} | ${} | ${} | ${}
    ${} | ${} | ${} | ${}
    `('$a $b $c = $expected', function ({ a, b, c, expected }) {
        expect(getTotal(a, b, c)).toBe(expected)
    })
    test('getTotal is text', function () {
        expect(getTotal([{ price: 10, quantity: 10 }])).toBe(90)
    })
    test('getTotal is plus number', function () {
        expect(getTotal(-20)).toBe(false)
    })
})
*/

/*describe('getTotal 100% coverage', () => {
    test.each`
    a   | b   | c   | expected
    ${} | ${} | ${} | ${}
    ${} | ${} | ${} | ${}
    ${} | ${} | ${} | ${}
    ${} | ${} | ${} | ${}
    `('$a $b $c = $expected', function ({ a, b, c, expected }) {
        if(expected === 'error') {
            expect(function () {
                getTotal(a, b, c)
            }).toThrow();
        } else {
        expect(getTotal(a, b, c)).toBe(expected);
        }
    })
})
*/