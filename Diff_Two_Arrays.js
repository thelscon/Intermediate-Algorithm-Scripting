/*             Различать два массива
Сравните два массива и верните новый массив с любыми элементами, найденными только в одном из двух заданных 
массивов, но не в обоих. Другими словами, вернуть симметричную разницу двух массивов.
Примечание. Вы можете вернуть массив с его элементами в любом порядке. */

//второй способ - добавление во второй массив отсутствующих элементов с первого, + фильтрация совпадающих элементов
function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach ( value1 => {
        if ( !arr2.includes ( value1 ) ) {
            arr2.push ( value1 ) ;
        }
        else {
            arr2 = arr2.filter ( value2 => value2 !== value1 ) ;
        }
    } )
    return arr2;
}  
diffArray([7, 2, 3, 5], [ 2, 3, 4, 5]);

/* //первый способ - сопоставление элементов одного массива на другой
function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach ( value => {
        if ( !arr2.includes ( value ) ) {
            newArr.push ( value ) ;
        }
    } ) ;
    arr2.forEach ( value => {
        if ( !arr1.includes ( value ) ) {
            newArr.push ( value ) ;
        }
    } )
    return newArr;
}
  
diffArray([7, 2, 3, 5], [ 2, 3, 4, 5]); */