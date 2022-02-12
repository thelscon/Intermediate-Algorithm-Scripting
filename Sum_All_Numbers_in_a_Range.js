/*             Суммируйте все числа в диапазоне
Мы передадим вам массив из двух чисел. Верните сумму этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не 
всегда будет первым.
Например, sumAll([4,1])должно возвращаться , 10 потому что сумма всех чисел от 1 до 4 (оба включительно) равна 10. */

//третий способ
function sumAll(arr) {

    const newArray = [] ;       //определяем резльтирующий массив
    let step = 0 ;              //определяем шаг увеличения или уменьшения каждого следующего значения
    newArray.push ( arr[0] )    

    while ( true ) {
        //условие при одинаковых значениях
        if ( arr[1] === newArray[newArray.length - 1] ) {
            newArray.push ( arr[1] ) ;
            return newArray.reduce ( ( x , y ) => x + y ) ;
        }
        else {
            //иначе получаем шаг увеличения или уменьшения
            if ( arr[1] > newArray[0] ) {
                step = 1 ;
            }
            else {
                step = -1 ;
            }
            //заполняем результирующий массив
            if ( Math.abs ( arr[1] - newArray[newArray.length - 1] ) === 1 ) {
                newArray.push ( newArray[newArray.length - 1] + step ) ;
                return newArray.reduce ( ( x , y ) => x + y ) ;
            }
            if ( Math.abs ( arr[1] - newArray[newArray.length - 1] ) > 1 ) {
                newArray.push ( newArray[newArray.length - 1] + step ) ;
            }
        }        
    }

}
  
sumAll([1, 1]);

/* //второй способ
function sumAll(arr) {

    const newArray = [] ;    
    let key = arr[0] ;

    do {
        if ( key === arr[1] ) {
            newArray.push ( key ) ;
            if ( newArray.length >=2 ) {
                break ;
            }
        }
        else {
            if ( key < arr[1] ) {
                newArray.push ( key++ ) ;
            }
            else {
                newArray.push ( key-- ) ;
            }
        }

    } while ( true ) ;

    return newArray.reduce ( ( x , y ) => x + y ) ;

}
  
sumAll([1, 1]) */

/* //первый способ
function sumAll(arr) {
    if ( arr[0] === arr[1] ) {
        return arr.reduce ( ( x , y ) => x + y ) ;
    }
    else {
        const minValue = ( arr [0] < arr [1] ) ? arr.shift () : arr.pop () ;
        const maxValue = arr [0] ;
        let sum = 0 ;

        for ( let key = minValue ; key <= maxValue ; ++key ) {
            sum += key ;
        }
        return sum ;
    }
}
  
sumAll([1, 1]) */