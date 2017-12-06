function compareArray(arr1, arr2) {
    if(arr1.length === arr2.length) {
        return true;
    } else {
        var greaterArr, lowerArr;
        if(arr1.length > arr2.length) {
            greaterArr = arr1;
            lowerArr = arr2;
        } else {
            greaterArr = arr2;
            lowerArr = arr1;
        }

        //console.log('greate array: ', greaterArr);
        //console.log('lower array', lowerArr);

        var arr = [];
        var includes;
        for(var i = 0; i < greaterArr.length; i++) {
            includes = lowerArr.indexOf(greaterArr[i]);
            if(includes === -1) {
                arr.push(greaterArr[i]) ;
            } 
        }
        //console.log('array is equal to', arr);
        return arr;
    }
};

a = ['Tekus_BG1.jpg','Arkbox.mp4','Tekus_BG2.jpg','Cronometro.mp4'];
b = ['Tekus_BG1.jpg','Arkbox.mp4','Tekus_BG2.jpg'];

var arrResult = compareArray(a,b);
console.log(arrResult);



