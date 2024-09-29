export const calculate = (a, b, c) => {
    let result;
    if (a === 0) {
        if (b === 0) {
            if (c === 0)
                result = `Phương trình vô số nghiệm`;
            else
                result = `Phương trình vô nghiệm`;
        }
        else {
            result = `x = ${-c / b}`;
        }
    }
    else {
        let delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0)
            result = `Phương trình vô nghiệm`;
        else if (delta === 0)
            result = `x1 = x2 = ${-b / (2 * a)}`;
        else
            result = `x1 = ${((-b + Math.sqrt(delta)) / (2 * a))}; x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`;
    }
    return result;
}