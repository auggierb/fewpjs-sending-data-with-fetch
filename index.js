
function submitData(name,email){
const body = document.getElementsByTagName('body')
const id = document.getElementsByClassName('id')
const div = document.createElement('div')

const meal = {
    name: 'Steve',
    email: 'steve@steve.com'}
const config =  {
    method:'POST',
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"},
        body: JSON.stringify(meal)}

    return fetch('http://localhost:3000/users',config)
        .then((response) =>response.json())
        .then((object)=>{
        const data = object.id
            document.body.appendChild(div).append(data)})
        .catch(function(error){ document.body.appendChild(div).append(error.message)
        })
}