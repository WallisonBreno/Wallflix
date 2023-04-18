
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/userForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo(){
  const history = useHistory();
  const {handleChange, valores} = useForm({

  });
    return (
      <PageDefault>
         <h1> Página de Cadastro de Video</h1>
         <form onSubmit={(event)=>{
           event.preventDefault();
           alert("Video upado");
           history.push('/')
         }}>
         <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />
        <button type="submit"> Cadastrar </button>
        </form>
          <Link to="/cadastro/categoria">
            Cadastrar Categoria
          </Link>
      </PageDefault>
    )
  }
  export default CadastroVideo