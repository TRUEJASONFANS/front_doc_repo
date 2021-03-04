let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function revert(s) {
    return s.split('').reverse().join('');
}

let n = 9
console.log(revert('1001'))

numbers.forEach(n=> console.log(n.toString(2)));


const used = numbers.map(n => 1);

const result_start  = []
const result_end = []

findHuiWenIp(numbers, numbers.length));



function findHuiWenIp(a: Array<number>, deep) {

    if (deep ===1) {
        used.forEach((u, index)=> {
            if (u ==1) {
                let a1 = a[index].toString(2);
                if(a1 === revert(a1)) {
                    let result = result_start.join('') + a[index] + result_end.join('')
                    console.log(result)
                }
            }
        })
    }


    for (var i=0; i < a.length; i++) {
        let a1 = revert(a[i].toString(2))
        let a2 = Number.parseInt(a1)
        if (a2 !== a1 && a2 >= 1 && a2 <= 9) {
            used[i] = 0
            used[a2] = 0
            result_start.push(a[i])
            result_end.push(a2);
            findHuiWenIp(a, deep-2);
            used[i] = 1
            used[a2] = 1
            result_start.pop()
            result_end.pop();
        }
        
    }
    
    return false;

}