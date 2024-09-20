document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault()
  const user = document.getElementById('user').value
  const pass = document.getElementById('pass').value

  const res = document.getElementById('res')

  if(user == 'admin' && pass == 'admin'){
    res.innerHTML = 'Usuario válido'
  } else {
   res.innerHTML = 'Usuario incorrecto'
  }
})
