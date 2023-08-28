
{
    let s = "lEetcOde";
    let newStr=''
    let start=false
  
    for (let i = 0; i < s.length; i++) {
      const value = s[i].toLocaleLowerCase();
      if (value === "o" ||value === "e" ||value === "a" ||value === "i" ||value === "u" ) {
          if(!start){
              newStr+=s[i]
              start=true
              for (let j = i+1; j < s.length; j++) {
                  const value = s[j].toLocaleLowerCase();
                  if (value === "o" ||value === "e" ||value === "a" ||value === "i" ||value === "u" ) {
                      newStr+=s[j]
                  }
              }
          }
      } else  {
          newStr+=s[i]
      }
    }
    console.log(newStr);
  }
  