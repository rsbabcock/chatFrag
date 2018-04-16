// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.

const articleRef = document.querySelector('#messages')
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
const createChat = () => {
    // Using appendChild(), attach each message as a child to the messages element.
    const messages = ["Hi", "You're a crazy peson!", "My name is Johann Schmitt", "Bach is my favourite", "I would like to meet you"]    
    const sectionElement = document.createElement('section')
    messages.forEach(currentMessage => {
        sectionElement.textContent = currentMessage
        sectionElement.appendChild(currentMessage)
        articleRef.appendChild(sectionElement)
        
        
        
    })
}