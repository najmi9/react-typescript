const pi:number = 3.14;

interface Options{
    key:string,
    value: number
}

const calculate: (options: Options[]) => number = (options) => {
    let total = 0;
    options.map((e, i) =>{
        total += e.value;
    });
    return total;
}

export {
    calculate
};