    // ASCII 
    //  to(n)
    // sO(n)
    // mutable and ummutable 
    // An object whose internal state can be changed is mutable. 
    // On the other hand, immutable doesn't allow any change in the object once it has been created.
    // string is charter of array

    // 97
    // 65
    // In JavaScript, objects and arrays are mutable by default, but primitive values are not — 
    // once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned


    // string concatenation o(m+n)
    // 97..122


    // let string = "Hamras"

    // for (let i = 0; i < string.length; i++) {
    //         console.log(string[i]);
    // }

    // O(N2) o(m*n)  

    // let string ="kokko"
    // let hell="lplplp"
    // hi=true
    // for (let i = 0; i < hell.length; i++) {
    //     if(hi){
    //         string= string+" "
    //     }else{
    //         string= string+i
    //     }
    //     hi=false
    // }
    // console.log(string);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // let string ="kokko"
    // let string1=""
    // console.log(string);
    // for (let i = 0; i < string.length; i++) {
    //     if(i===2){
    //         string1+= "r"
    //     }else{

    //         string1+= string[i]
    //     }}
    // console.log(string1);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // let string="hamras"
    // let str1=""
    // for (let i = string.length-1; i >=0 ; i--) {
    //     str1+= string[i]
    // }
    // console.log(str1);

    // let string="hamras"
    // let str1=""
    // for (let i = string.length-1; i >=0 ; i--) {
    //     str1+= string[i]
    // }
    // console.log(str1);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // let string="hamras"
    // a =string.charCodeAt(0)
    // console.log(a);
    // console.log(String.fromCharCode(a));

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // let hi="hamras"
    // let first =1
    // let seco =3
    // let newstr=""
    // for (let i = 0; i < hi.length; i++) {
    //     if(i>first && i<seco){
    //         newstr+=hi[i]  }
    // }
    // console.log(newstr);
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    // }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // let str="hana-p-p"
    // console.log(str.slice(2,4));
    // let newstr=""
    // function slice1(first,seco){
    //   for (let i = 1; i < str.length; i++) {
    //         if(i>=first && i<seco){
    //             newstr+=str[i]
    //         }
    //   }
    // console.log(newstr);
    // }
    // slice1(2,4)

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // let str="this is brototype"

    // console.log(str.substring(2,4));
    // console.log(str.substr(2,4));

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // let str="this is brototype"
    // let newstr=""
    // console.log(str.replace("this","that"));

    // function replace1(first,seco){
    //     for (let i = 0; i < str.length; i++) {
    //         if(str[i]!=first){
    //             newstr+=str[i]
    //         }else{
    //             newstr+=seco
    //         }
    //     }
    //     console.log(newstr);
    // }
    // replace1("b","p")
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // let first="hii"
    // let secon="naju"
    // console.log(first.concat(" ",secon));

    // for (let i = 0; i < secon.length; i++) {
    //     first=first+secon[i]
    // }
    // console.log(first);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // let string="malayalam"
    // function checkPalindrome(string) {
    //     const len = string.length;
    //     for (let i = 0; i < len / 2; i++) {
    //         if (string[i] !== string[len - 1 - i]) {
    //             return 'It is not a palindrome';
    //         }
    //     }
    //     return 'It is a palindrome';
    // }
    // const value = checkPalindrome(string);
    // console.log(value);

    // let string="malayalam"

    // for (let i = string.length-1; i >=0 ; i--) {
    //     console.log(string[i]);
    // }