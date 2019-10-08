let messages = [];
let id = 0
 module.exports ={
    createMessage: (req, res, next) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        
        res.status(200).send(messages);
    },
    
    readMessage: (req, res, next) => {
        res.status(200).send(messages)
    },


    updateMessage: (req, res, next) => {
        const {text} = req.body
        const update = req.params.id
        const messageIndex = messages.findIndex(message => message.id == update);
        let message = messages[messageIndex]

        message[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages)
    },

  
    deleteMessage: (req, res, next) => {
        const deleteId = req.params.id
        const messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex,1)
        res.status(200).send(messages);
    },
}   