/*             почему ты
Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих    
совпадающие пары имени и значения (второй аргумент). Каждая пара имени и значения исходного объекта должна 
присутствовать в объекте из коллекции, если он должен быть включен в возвращаемый массив.
Например, если первый аргумент [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], а второй аргумент { last: "Capulet" }, то вы должны вернуть третий 
объект из массива (первый аргумент), потому что он содержит имя и его значение, которые были переданы в 
качестве второго аргумента. */

function whatIsInAName(collection, source) {
    const arr = [];

    arr.push ( 
        ...collection.filter ( obj => { 
            let flag = true ;
            for ( let value in source ) {
                if ( source[value] !== obj[value] ) {
                    flag = false ;
                    break ;
                }
            }
            return flag ; 
            //предикат в виде flag заставил по другому смотреть на саму суть предикатов, круто !)
        } )
    ) ;

    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });