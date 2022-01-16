async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = document.getElementById(this.id).getAttribute("id");

        console.log(id);

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  var temp = document.querySelectorAll('.delete-comment-btn')
  for(var i = 0; i < temp.length; i++){
    temp[i].addEventListener('click', deleteFormHandler);
  }
  