import { useState } from 'react'

 function useForm(valoresIniciais){
    const [valores, setvalores] = useState(valoresIniciais);
    function setvalor(chave, valor){
      setvalores({
        ...valores,
        [chave]: valor,
      })
    }
  
    function handleChange(infosDoEvento){
      const {getAttribute, value} = infosDoEvento.target
      setvalor(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      )
    }
  
  function clearForm(){
    setvalores(valoresIniciais)
  }
  
  return {
    valores,
    handleChange,
    clearForm
  }
  }
  export default useForm;