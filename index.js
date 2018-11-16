
var app = new Vue({
    el: '#app',

    data: {
      primerMensaje: 'Ejemplo.js!',
      segundoMensaje:'',
      area : 'Este es el area',
      isSelected : false,
      listOfCheckboxes : [],
      listOfRadioButton: '',
      selectedDropDownOption : '',
      selectedDropDownOptionMultiple : [
        'opcionMultiple1' , 'opcionMultiple2'
      ],
      groceryList: [
        { id:0, text: 'Learn JavaScript' },
        { id:1,text: 'Learn Vue' },
        { id:2,text: 'Build something awesome' }
      ],
      inputValue : ''
    } ,

    methods: {
        cambiaText : cambiaText,
        executeSearch: executeSearch
    }
  }) 
  function cambiaText(texto,event){
    this.primerMensaje = texto;
  }
  function executeSearch(){
    console.log("executeSearch");
    if(this.inputValue){
      console.log("if");
      document.forms[0].submit();
    }
    else {
      console.log("else")
    }
  }