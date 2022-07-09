const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123499"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
    const length = persons.length
    const date = new Date()
    response.send('<div><p>Phonebook has info for ' + length + ' people</p><p>' + date + '</p></div>')
    morgan('tiny')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
    morgan('tiny')
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.filter(person => person.id === id)
    if(person){
        response.json(person)
        morgan('tiny')
    }else{
        response.status(404).end()
        morgan('tiny')
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
    morgan('tiny')
})

const randomId = (max) => {
    return Math.floor(Math.random() * max)   
}

app.post('/api/persons/', (request, response) => {
    const body = request.body
    if(!body.name){
        return response.status(400).json({
            error: 'name missing'
        }, morgan('tiny'))
    }
    if(!body.number){
        return response.status(400).json({
            error: 'number missing'
    }, morgan('tiny') )}
    const nom = persons.find(person => person.name === body.name)
    if(nom !== undefined){
        return response.status(400).json({
            error: 'Name must be unique'
        }),morgan('tiny')
    }


    const person = {
        name: body.name,
        number: body.number,
        id : randomId(999999)
    }

    persons = persons.concat(person)

   response.json(person)
   morgan('dev')

})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
    morgan('tiny')
}

app.use(unknownEndpoint)


const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})