module.exports = function check(str, bracketsConfig) {
    // your solution

    if (str.length % 2) return false;

    let openers = bracketsConfig.map(e => e[0]);
    let closers = bracketsConfig.map(e => e[1]);
    let res = [];

    for (let i = 0; i < str.length; i++) {
        if (openers.includes(str[i])) res.push(str[i]);
        if (closers.indexOf(str[i]) === openers.indexOf(res[res.length - 1]));
        if (openers.includes(str[i]) && closers.includes(str[i])) {
            if (res[res.length - 1] === str[i]) {
                res.pop();
            } else {
                res.push(str[i]);
            }
        }
    }
    return res.length === 0;
}