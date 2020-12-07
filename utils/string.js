export const stringFormat = (str = "", options = []) => {
    if (!str) {
        return str;
    }
    const regex = new RegExp("{-?[0-9]+}", "g");
    return str.replace(regex, item => {
        const intVal = parseInt(item.substring(1, item.length - 1), 10);
        let replace;
        if (intVal >= 0) {
            replace = options[intVal];
        } else if (intVal === -1) {
            replace = "{";
        } else if (intVal === -2) {
            replace = "}";
        } else {
            replace = "";
        }
        return replace;
    });
};