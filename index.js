console.log("hola amigos !");

const percentage = 5 / 100 * 80;

console.log(percentage);

this.attribute = "global";

console.log("attribute 1", this.attribute);

const percentOf = function (nbOfPercent, total) {
    this.attribute = "value";
    console.log("attribute 2", this.attribute);
    const result = nbOfPercent / 100 * total;
    return result;
}

const percentOfBis = (nbOfPercent, total) => {
    this.attribute = "value";
    console.log("attribute 3", this.attribute);
    const result = nbOfPercent / 100 * total;
    return result;
}

console.log("attribute 4", this.attribute);

const percentageWithFn = percentOf(5, 80);

console.log("attribute 5", this.attribute);

const percentageWithFn = percentOfBis(5, 100);

console.log("attribute 6", this.attribute);

