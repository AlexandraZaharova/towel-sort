
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];
    if (matrix == undefined || matrix.length == 0) {
        return newArr;
    } else {
        matrix.map((item, index) => {
            if (index % 2 == 0) {
                for (let i = 0; i<item.length; i++) {
                    newArr.push(item[i]);
                }
            } else {
                for (let i = item.length-1; i!=-1; i--) {
                    newArr.push(item[i]);
                }
            }
        })
    }
    return newArr;
}
