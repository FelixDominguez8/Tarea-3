
import {useEffect, useState} from 'react';
import '../App.css';
let lista = [JSON.parse(localStorage.getItem('items'))];
let checkboxes = new Array()
var i = 1; 

function InputText(objeto) {
  const [textInInput, setTextInInput] = useState("")
  const [items, setItems] = useState([]);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <input type="text" placeholder="Tarea" id="prod" onChange={(event)=>{
        setTextInInput(event.target.value)
      }}/>
      <button className="Crear-nuevo" onClick={()=>{
        
          lista.push(textInInput);
          console.log(lista.map(item=>
              item
          ));
          createChk(lista.at(lista.length-1));
          setItems(lista);
      }}>Crear nuevo</button>
      <button className="Crear-nuevo" id="Invisible" onClick={()=>{
        for (let index = 0; index < lista.length; index++) {
          createChk(lista.at(index));
        }
        document.getElementById('Invisible').style.visibility = 'hidden';
      }}>Cargar Quehaceres</button>
      <p id="container"></p>
      <button onClick={()=>{
        while (container.hasChildNodes()){
          container.removeChild(container.firstChild);
        }
        i=1;
        lista = new Array();
      }}>Eliminar Todo</button>
      <button className="Crear-nuevo" onClick={()=>{ 
        for (let index = 0; index < checkboxes.length; index++) {

        }
        
      }}>Eliminar Completados</button>
    </div>
  );
}

function cargar(){
  for (let index = 0; index < lista.length; index++) {
    createChk(lista.at(index));
  }
}

function createChk(lis) {
  if (lis.value !== '') {


      var chk = document.createElement('input');  
      chk.setAttribute('type', 'checkbox');       
      chk.setAttribute('id', 'prodName' + i);     
      checkboxes.push(chk);

      var lbl = document.createElement('label');  
      lbl.setAttribute('for', 'prodName' + i);

      lbl.appendChild(document.createTextNode(lis));

      container.appendChild(chk);
      container.appendChild(lbl);

      var linebreak = document.createElement('br');
      container.appendChild(linebreak);

      i = i + 1;
  }
}

export default InputText;