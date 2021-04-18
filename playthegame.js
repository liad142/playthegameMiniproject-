function playTheGame() {
    const answer = confirm('wanna play ?')
    if (answer) {
        let userNumber = parseInt(prompt('enter a number between 0-10'))
        if (!userNumber) {
          return alert('Sorry Not a number, Goodbye”')
        } else if (userNumber > 10) {
            alert('Sorry it’s not a good number, Goodbye')
            return userNumber
        } else {
            let computerNumber = Math.floor(Math.random() * 11);
            test(userNumber, computerNumber)
        }
    } else alert('ok bye')
}

function test(userNumber, computerNumber) {
    let counter = 0
    while (counter<=3){
        if (userNumber === computerNumber) {
            return   alert('you win')
        } else if(userNumber>computerNumber){
            alert('Your number is bigger then the computer’s, guess again')
            counter++
            playTheGame()

        } else if(userNumber<computerNumber){
            alert('Your number is bigger then the computer’s, guess again')
            counter++
            playTheGame()
        }
    }
    return alert('out of chances')

}
