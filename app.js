//   on('child_added') callback function
firebase.database().ref('todos').on('child_added',function(data){
    var orderlist = document.getElementById('orderlist')
     var li = document.createElement('li')
    var text = document.createTextNode(data.val().value)
    orderlist.appendChild(li)
    li.appendChild(text)
    li.setAttribute('class','list')
    input.value = "";
    // edit button
    var edit = document.createElement('button')
    var etext = document.createTextNode('edit')
    li.appendChild(edit)
    edit.appendChild(etext)
    edit.setAttribute('onclick',"edititem(this)")
    edit.setAttribute('id',data.val().key)
    // delete button
    var delet = document.createElement('button')
    var dtext = document.createTextNode('delete')
    delet.setAttribute('class','btn')
    li.appendChild(delet)
    delet.appendChild(dtext)
    delet.setAttribute('onclick',"deleteitem(this)")
    delet.setAttribute('id',data.val().key)
})

function todoapp(){
    let input = document.getElementById('input')
    
var database = firebase.database().ref('todos');
var key = database.push().key;
let todo = {
    value: input.value,
    key: key
}
database.child(key).set(todo)
console.log(database)
    // var li = document.createElement('li')
    // var text = document.createTextNode(input.value)
    // orderlist.appendChild(li)
    // li.appendChild(text)
    // li.setAttribute('class','list')
    // input.value = "";
    // // edit button
    // var edit = document.createElement('button')
    // var etext = document.createTextNode('edit')
    // li.appendChild(edit)
    // edit.appendChild(etext)
    // edit.setAttribute('onclick',"edititem(this)")
    // // delete button
    // var delet = document.createElement('button')
    // var dtext = document.createTextNode('delete')
    // delet.setAttribute('class','btn')
    // li.appendChild(delet)
    // delet.appendChild(dtext)
    // delet.setAttribute('onclick',"deleteitem(this)")
}

function deleteitem(e){
    firebase.database().ref('todos').child(e.id).remove();
        e.parentNode.remove()
}

function edititem(e){
    var messege = prompt("what you want to edit?",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = messege;
    var editTodo = {
        value: messege,
        key: e.id
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)

}



