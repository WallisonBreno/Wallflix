import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/userForm'

function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FFF',
}

const {handleChange, valores, clearForm} = useForm(valoresIniciais);
const [categorias, setCategorias] = useState([])

  useEffect(()=>{
    const URL = 'http://localhost:8080/categorias'
    fetch(URL)
      .then(async (respostaDoServidor) =>{
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta
        ])
       } ) 
   }, [

  ])

    return (

      <PageDefault>
         <h1>Cadastro de Categoria: {valores.nome}</h1>

         <form  onSubmit={function handleSubmit(infosDoEvento){
           infosDoEvento.preventDefault();
           setCategorias([
             ...categorias,
             valores
           ]);
           clearForm()
         }}>
          <FormField value={valores.nome} onChange={handleChange} type="text" name="nome" label="Nome da Categoria" />
          <FormField label="Descrição" type="textarea" name="descricao" value={valores.descricao} onChange={handleChange} />
          <FormField value={valores.cor} onChange={handleChange} type="color" name="cor" label="Cor" />
           <button>
             Cadastrar
           </button>
         </form>
             <ul>
               {categorias.map((categoria)=>{
                 return(
                   <li key={categoria}>
                     {categoria.nome}
                   </li>
                 )
               })}
             </ul> 

          <Link to="/">
            Ir para Home
          </Link>
      </PageDefault>
    )
  }
  export default CadastroCategoria