async function getContent() {
  var response = await fetch(
    'https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos'
    )
    var data = await response.json()
    var element = document.getElementById('nome__medicamento')

    for (var i = 0; i < data.length; i++) {
      element.innerHTML = 
      element.innerHTML + 
      '<option value="' +
       data[i]['id'] + 
       '" >' + 
       data[i]['name'] + 
       '</option>'
      }
  var response = await fetch(
        'https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas'
        )
        var data = await response.json()
        var element = document.getElementById('tipo__tipoLaboratorio')
    
    for (var i = 0; i < data.length; i++) {
          element.innerHTML = 
          element.innerHTML + 
          '<option value="' +
           data[i]['id'] + 
           '" >' + 
           data[i]['name'] + 
           '</option>'
        }

}
getContent()

var botao = document.getElementById("botao__submit")
var resultado = document.getElementById("info__evento")
botao.addEventListener('click', function(event) {
  event.preventDefault()
  resultado.classList.add("active")
  botao.preventdefou
})




