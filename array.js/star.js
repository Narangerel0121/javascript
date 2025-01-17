let star = ''
for(let i = 0; i < 5 ; i++) {
    star += '*'
    console.log(star)
} /// tegsh ontsogt

for(let i = 5; i >= 1; i--){
    let text = ''
    for(let j = 5; j >= 1; j--){
      if(i >= j){
        text = text + '*'
      } else{
        text = text + ''
      }
    } console.log(text)
  } /// tegsh ontsogt urvuu

for(let i = 1; i <= 5; i++) {
    let triangle = ''
    for(let j = 1; j <= 5; j++) {
       if(i >= j)
        {
        triangle += '*'
    }
    else {
        triangle += ''
    }
    }
    console.log(triangle)
} /// tegsh ontsogt
