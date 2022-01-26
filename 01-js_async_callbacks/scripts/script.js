console.log("JS Loaded")

const h1tag = document.getElementsByTagName("h1")[0]

/*setTimeout(
    ()=> {
          console.log("I am a pizza")
          h1tag.innerText += " I like pizza"
    }, 
   (Math.random() * 5 * 1000) //this is a real-time in milliseconds
)


setTimeout(
    ()=> {
          console.log("I am polpetta al ragu")
          h1tag.innerText += " and I like broccoli"
    }, 
   (Math.random() * 2 * 1000) //this is a real-time in milliseconds
)

setTimeout(
    ()=> {
          console.log("I like mango")
          h1tag.innerText += " and I like chocolate"
    }, 
   (Math.random() * 3 *1000) //this is a real-time in milliseconds
)
*/

function onButton1Click(){
    console.log("Button 1 clicked")
    setTimeout(
    ()=> h1tag.innerText += " and I like mango",
    Math.random() * 5 * 1000
    )
    
}

function onButton2Click(){
    console.log("Button 2 clicked")
    setTimeout(
    ()=> h1tag.innerText += " and I like canelons",
    Math.random() * 5 * 1000
    )
    }

function onButton3Click(){
    console.log("Button 3 clicked")
    setTimeout(
        ()=> h1tag.innerText += " and I like parmiggiana",
        Math.random() * 5 * 1000
        )
        }

// ------timer------

const counter = document.getElementById("counter")

const myInterval = setInterval(
    ()=> counter.innerText = parseInt(counter.innerText) + 1,
    1 * 1000
)

//---- stop the clock-----
//clearInterval(myInterval) 

const stopCounter = ()=> clearInterval(myInterval)

setTimeout(()=> stopCounter(myInterval),
20*1000
)

/// stopping the clock with an IF ///
const myInterval = setInterval(
    ()=> {counter.innerText = parseInt(counter.innerText) + 1
        if(counter.innerText === "20"){
            clearInterval(myInterval)}
        }, 1 * 1000
)