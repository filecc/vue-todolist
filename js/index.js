import { setAppHeight, createChild } from "./utils.js";

(() => {
  setAppHeight();
  window.addEventListener('resize', setAppHeight);

  const { createApp } = Vue

  /* 
  Fare una lista della spesa per Pasquetta.
  Ho bisogno di un campo di Input per inserire le varie cose da comprare
  accanto ad ogni ingrediente un bottone per cancellare
  se clicco sull'ingrediente risulta fatto, comprato
  */

  createApp({
    data() {
      return {
        ingredients: [
         { 
          name: 'pane',
          completed: false
        },
        { 
          name: 'acqua',
          completed: false
        },
        { 
          name: 'coca-cola',
          completed: false
        },
        ],
        newIngredient: '',
        error: false
      }
    },
    methods: {
      deleteItem(id) {
        this.ingredients.splice(id, 1);
      },

      add(){
        if (this.newIngredient.length < 1){
          this.error = true;
          this.newIngredient = ''
          return 
        }
        this.error = false;
        const newItemToAdd = {
          name: this.newIngredient,
          completed: false
        }
      
        this.ingredients.push(newItemToAdd);
        this.newIngredient = ''
        
      },

      complete(id){
        this.ingredients[id].completed ? 
        this.ingredients[id].completed = false :
        this.ingredients[id].completed = true;
      }
    }
  }).mount('#app')

  


})();
