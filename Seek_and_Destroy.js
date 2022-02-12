/*             Найти и уничтожить
Вам будет предоставлен начальный массив (первый аргумент в destroyer функции), за которым следуют один или несколько 
аргументов. Удалите все элементы из исходного массива, которые имеют то же значение, что и эти аргументы.
Примечание. Вы должны использовать arguments объект. */

//второй способ, удаление методом filter одинаковых значений
function destroyer(arr) {
    arr = arguments[0] ;
    for ( let key = 1, tmpArray = arguments[key] ; key <= arguments.length ; ++key ) {
        arr = arr.filter ( value => value !== arguments[key] ) ;
    }
    return arr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 1, 2) ;

/* //первый способ, удаление методом splice
function destroyer(arr) {
    const fullArray = arguments[0] ;
    for ( let key = 1 ; key <= arguments.length ; ++key ) {
        let flag = null ;
        do {
            flag = fullArray.findIndex ( value => value === arguments[key] ) ;
            if ( flag >= 0 ) {
                fullArray.splice ( flag , 1 ) ;
            }
            else {
                flag = null ;
            }
        } while ( flag !== null ) ;
    }
    return fullArray;
  }
  
 destroyer([1, 2, 3, 1, 2, 3], 1, 2) ; */