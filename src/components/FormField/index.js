import React from "react";
import styled, { css } from 'styled-components';

const Label = styled.label`

`;

const FormFieldWrapper= styled.div `

`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  
}
`;

function FormField( {valores, onChange, type, name, label}){
  const tag = type === 'textarea' ? 'textarea' : 'input';
  return(
    < FormFieldWrapper>
    <Label>
    {label}
    <Input as={tag} type={type} name={name} value={valores} onChange = {onChange} />
  </Label>
  </FormFieldWrapper>
  )
}

export default FormField;