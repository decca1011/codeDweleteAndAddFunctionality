var form = document.getElementById('addForm');
var itemList =document.getElementById('items');
var edit =document.getElementById('items')

// form submit event 
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click',removeItem)
edit.addEventListener('click', editItem)
function editItem(e)
{

}
// add Item
function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem =  document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li')
    li.className ='list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deletebtn.appendChild(document.createTextNode('x'));
//append button to li    
    li.appendChild(deletebtn);
    
var editbtn =document.createElement('button')
editbtn.className='btn   btn-info   btn-lg float-right edit'
editbtn.appendChild(document.createTextNode("edit"));
li.appendChild(editbtn)
// append li to list
    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are u ready ?'))
        {
            var li =e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}