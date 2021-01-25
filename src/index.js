module.exports = function reverse (n) {
    n = String(n).split("");

    for (let i = 0; i < n.length; i++) {
        if (n[0] == "-") {
            n = n.splice(1, n.length);
        }
    }

    return Number(n.reverse().reduce((acum, next) => acum + next));
}
