
var app = new Vue({
    el: '#app',
    data: {
      message: 'Ejemplo.js!',
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
      ]
    } ,
    methods: {
        cambiaText : cambiaText
    }
  }) 
  function cambiaText(){
    this.message = "juas juas juas";
  }