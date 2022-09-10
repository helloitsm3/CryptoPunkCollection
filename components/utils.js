/**
 * Output a string from a given value in a money format
 *
 * @param {string}.
 * @returns {string} Returns a string number to a money format
 * @example
 *
 * formatter.format("1234")
 * => $1,234.00
 *
 * formatter.format("12345")
 * => $12,345.00
 *
 *  formatter.format("123456")
 * => $123,456.00
 */
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});

/**
 * Output a random number from a given range
 *
 * @param {number} min: The minimum range (Inclusive).
 * @param {number} max: The maximum range (Inclusive).
 * @returns {number} Returns a random value from a given range
 * @example
 *
 * random(0, 5)
 * => 0 ... 5  // Returns any number from 0 to 5
 */
export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
