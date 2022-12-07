let count = 0;
function addItem() {
  count++;
  const inputField = document.getElementById("input-value");
  const inputText = inputField.value;
  const contentContainer = document.getElementById("content-container");
  const tableContainer = document.createElement("tr");
  tableContainer.innerHTML = `
    <th class = 'text-white' scope="row">${count}</th>
    <td class = 'text-white'>${inputText}</td>
    <td class = 'text-white'>
        <button class="done text-white bg-success border border-success p-1 rounded">Done</button>
        <button class="delete text-white bg-danger border border-danger p-1 rounded">Delete</button>
    </td>
    `;
  contentContainer.appendChild(tableContainer);

  const doneItem = document.getElementsByClassName('done')
  for(const button of doneItem){
    button.addEventListener('click', function(){
        event.target.parentNode.parentNode.style.textDecoration = 'line-through'
    })
  const deleteItem = document.getElementsByClassName('delete')
  for(const button of deleteItem){
    button.addEventListener('click', function(){
        event.target.parentNode.parentNode.style.display = 'none'
    }) 
  }
}}
