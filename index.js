var app = new Vue({
  el: '#app',

  data: {
    primerMensaje: 'Ejemplo.js!',
    segundoMensaje: '',
    area: 'Este es el area',
    isSelected: false,
    listOfCheckboxes: [],
    listOfRadioButton: '',
    selectedDropDownOption: '',
    optionsForDropDown : [
      "optionComboBox1","optionComboBox2","optionComboBox3"
    ],
    selectedDropDownMultiple : [],
    optionsForDropDownMultiple: [
      'opcionMultiple1', 'opcionMultiple2'
    ],
    selectedDropDownOptionObject : '',
    optionsDropDownObjectArray : [
      {
        key : 'key1' , val : 'val1'
      },
      {
        key : 'key2' , val : 'val2'
      }
    ],
    groceryList: [
      { id: 0, text: 'Learn JavaScript' },
      { id: 1, text: 'Learn Vue' },
      { id: 2, text: 'Build something awesome' }
    ],
    inputValue: ''
  },

  methods: {
    cambiaText: cambiaText,
    executeSearch: executeSearch,
    grandparentStopClick: grandparentStopClick,
    parentStopClick:parentStopClick,
    executeStopSearch : executeStopSearch,
    executeRightClick : executeRightClick ,
    executeLeftClick : executeLeftClick
  }
})

function cambiaText(texto, event) {
  this.primerMensaje = texto;
}
function executeSearch() {
  console.log("executeSearch");
  if (this.inputValue) {
    console.log("if");
    document.forms[0].submit();
  }
  else {
    console.log("else")
  }
}
function executeStopSearch (){
  console.log("executeStopSearch");
}
function parentStopClick (){
  console.log("parentStopClick");
}
function grandparentStopClick (){
  console.log("grandparentStopClick");
}

function executeLeftClick(){
  console.log("executeLeftClick");
}
function executeRightClick(){
  console.log("executeRightClick");
}