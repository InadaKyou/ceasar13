const gg = '1232131';
const digitCheck = (char) => /\d/.test(char);
const includesSpecChar = (char) => /[ !"#$%&'()*+,./:;<=>?@\^_`{|}~-]/.test(char);
export {digitCheck, includesSpecChar, gg}