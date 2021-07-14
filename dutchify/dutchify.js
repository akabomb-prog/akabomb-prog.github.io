function dutchify(text) {
    return text.replace(/oo/ig, (match) => {
        var out = (match[0] === match[0].toUpperCase()) ? 'O' : 'o';
            out += (match[1] === match[1].toUpperCase()) ? 'E' : 'e';
        return out;
    })
        .replace(/a/ig, (match) => {
            return (match === match.toUpperCase()) ? 'E' : 'e';
        })
        .replace(/g/ig, (match) => {
            return (match === match.toUpperCase()) ? 'K' : 'k';
        })
        .replace(/b/ig, (match) => {
            return (match === match.toUpperCase()) ? 'P' : 'p';
        })
        .replace(/ea/ig, (match) => {
            var out = (match[0] === match[0].toUpperCase()) ? 'E' : 'e';
                out += (match[1] === match[1].toUpperCase()) ? 'E' : 'e';
            return out;
        })
        .replace(/v/ig, (match) => {
            return (match === match.toUpperCase()) ? 'F' : 'f';
        })
        .replace(/th/ig, (match) => {
            return (match[0] === match[0].toUpperCase()) ? 'D' : 'd';
        })
        .replace(/j\w/ig, (match) => {
            var out = (match[0] === match[0].toUpperCase()) ? 'D' : 'd';
                out += (match[1] === match[1].toUpperCase()) ? 'J' : 'j';
            return out + match[1];
        })
}