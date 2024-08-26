

//  All  Elements  
let  theInput = document.querySelector(".add-task input")
let addButtom = document.querySelector(".add-task .plus")
let tasksCountainer = document.querySelector(".task-content")
let tasksCount = document.querySelector(".task-cont span")
let tasksCompleted = document.querySelector(".task-completed span")


//  Focus in  Input :----
window.onload = function() {
    theInput.focus() ;
}

// Add The Tasks :----
addButtom.onclick = function () {
    if (   theInput.value    ===   ""  ){     
        alert("Add Your Task!");               
    } else {
        let onTasksMessage = document.querySelector(".no-task-show")
        if ( document.body.contains (document.querySelector(".no-task-show")) )  {
            onTasksMessage.remove() ;
        }
        //   Create  Main  Span   
        let mainSpan = document.createElement("span")

        //  Create  Delete  Buttom 
        let deleteBtn  = document.createElement("span") 

        //  Create Text To Main Span 
        let  textToMain = document.createTextNode(    theInput.value  )

        // Create Text To Dlete  Buttom 
        let textToDeldeteBtn = document.createTextNode("Delete")

        // Add  textTOMain to --->>>  mainSpan 
        mainSpan.appendChild ( textToMain )

        // Add Class To  mainSpan
        mainSpan.className = "task-box"

        // Add  textToDeldeteBtn  To  --->>>  deleteBtn
        deleteBtn.appendChild(  textToDeldeteBtn  )

        // Add Class To  deleteBtn 
        deleteBtn.className = "delete"

        // Add  deleteBtn to --->>>  mainSpan 
        mainSpan.appendChild(  deleteBtn  )

        // Add  mainSpan To  --->>>  tasksCountainer
        tasksCountainer.appendChild(  mainSpan   )

        // Input  Be  Empty
        theInput.value    =  ""

        //   Focus in  Input 
        theInput.focus() ;

        // Calculate  All Tasks
        calculateTAsks()

    }

}



//  Add  Click  To  --->>> Delet Btn  For  Delete Task 
document.addEventListener ( "click"  ,  function(ele) {  

    //  Delete  Task 
    if (  ele.target.className == "delete"  ){

    // Delete  Current  Task 
        ele.target.parentNode.remove() ;

        // Check The Tasks Container  === 0 
        if (  tasksCountainer.childElementCount == 0  ) {
            createMessage()
        }
    }

    //  Add  Class  (  finished  )  to  --->>>  Element  ( task-box )
    if (  ele.target.classList.contains("task-box")  ) {
        ele.target.classList.toggle("finished")
    }

    // Calculate  All completed Tasks 
    calculateTAsks()

})

//  Function  To Create  No  Task Message
function createMessage() {

    //  Create Elemnt  to  Show  Messsage 
    let msgSpan = document.createElement("span") ;

    // Create  TAsxt  Message 
    let taxtMsg = document.createTextNode("No Tasks To Show")

    // Add  taxtMsg  to  --->>> msgSpan 
    msgSpan.appendChild(taxtMsg)

    // Create Class  To MsgSpan 
    msgSpan.className = "no-task-show"

    // Add msgSpan to --->>>  tasksCountainer
    tasksCountainer.appendChild(msgSpan)

}


// Function To Calculate  Task Box 
function calculateTAsks() {

    // Calculate All  Tasks 
    tasksCount.innerHTML = document.querySelectorAll( ".task-content .task-box" ).length ;

    // Calculate  Completed  Tasks 
    tasksCompleted.innerHTML = document.querySelectorAll( ".task-content .finished" ).length ;
}













