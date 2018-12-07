function applyStyle(element,binding){
    Object.keys(binding.value).forEach(position => {
        element.style[position] = binding.value[position];
    })
}

export default {
    //solo para el lifecycle
    bind: (element, binding) => {
        //tipo 1
        // if(binding.arg !== 'position') return;

        // Object.keys(binding.modifiers).forEach(key=>{
        //     element.style[key] = '5px';
        // })
        // element.style.position= "absolute";
        // element.style.bottom= "5px";
        // element.style.right= "5px";
        //tipo 2
       applyStyle(element,binding);
        //  element.style.position= "absolute";
    },
    update: (element,binding)=>{
        applyStyle(element,binding);
    },

    inserted:()=>{
        //cuando el parent component lo crea
    },

    componentUpdated:()=>{
        
    },

    unbind:()=>{
        //cuando el parent component lo elimina
    },
}