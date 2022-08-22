console.log ('HELLO')
let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

    function updateWord(element) {
      usersWord = element.value
      console.log(usersWord)
    }

    function handleSubmit() {
        let newListItem = document.createElement('LI')
        newListItem.innerText = usersWord
            
        if(usersWord.length % 2 === 0) {
            evenList.appendChild(newListItem)
            /*put word in even lists*/
          } else {
            /*put word in odd list*/
            oddList.appendChild(newListItem)
          }
        usersWord = ""
        document.getElementById("even-odd-form").reset()
    }

    // if( 1 === 1) {
    //     return true
    //   } else {
    //     return false
    //   }
    //   if(4>2) {
    //     console.log ("hithere")
    //   } else {
    //     console.log ("hello")
    //   }
