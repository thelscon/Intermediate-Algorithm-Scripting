/*             Случай спинномозговой пункции
Преобразование строки в спинной регистр. В спинном регистре все строчные слова соединены тире. */

//второй способ, с использованием RegExp
function spinalCase(str) {

    const   pattern0 = /[a-z][A-Z]/g ,      // aA => a-a
            pattern1 = /\s|_/g ,            // ' ' | '_' => '-'
            pattern2 = /[A-Z]|(-[A-Z])/g ;  // A | -A => a | -a
            
    str = str   .replace ( pattern0 , value => `${value[0]}-${value[1].toLowerCase()}` )    // aA => a-a
                .replace ( pattern1 , '-' )                                                 // ' ' | '_' => '-'
                .replace ( pattern2 , value => value.toLowerCase() ) ;                      // A | -A => a | -a

    return str ;
}
  
spinalCase('This Is Spinal Tap');

/* //первый способ, без RegExp
function spinalCase(str) {

    while ( str.includes ( ' ' ) ) {
        str = str.replace ( ' ', '-' ) ;
    }
    while ( str.includes ( '_' ) ) {
        str = str.replace ( '_', '-' ) ;
    }    
    
    str = [ ...str ] ;
    str = str.map ( ( value , index ) => {
        if ( value >= 'A' && value <= 'Z' ) {
            if ( str[index - 1] && str[index - 1] !== '-' ) {
                return `-${value.toLowerCase ()}` ;
            }
            else {
                return value.toLowerCase () ;
            }            
        }
        else {
            return value ;
        }
    } ).join ( '' ) ;

    return str;
}
  
spinalCase('This Is Spinal Tap'); */