import React,{useEffect, useState} from 'react'
import { Container } from './styles'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { toast } from 'react-toastify';
import ResultSimulation from '../ResultSimulation';

export default function FormSimulation() {
  const [simulations,setSimulations] = useState([])

  const formSchema = yup.object().shape({
    amount: yup.number().required(),
    installments: yup.number().required().max(12,'Máximo de 12 parcelas'),
    mdr: yup.number().required()
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  useEffect(()=>{
    onSubmitFunction()
  },[])

  const onSubmitFunction = async (data) => {
    let response = await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data)
    
    if(response?.status === 200){
      toast.success('Simulação bem sucedida!!')
      setSimulations(Object.entries(response.data))
    }else if(response?.status === 400){
      toast.error('Simulação mal sucedida!!')
    }
    
  }

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <h1 className="form__title">Simule sua Antecipação</h1>

          <label className="form__label">Informe o valor da venda *</label>
          <input className="form__input" {...register("amount")} />
          {errors.amount?.message && 'amount deve ser do tipo `number`'}

          <label className="form__label">Em quantas parcelas *</label>
          <input className="form__input" {...register("installments")} />
          {errors.installments?.message && 'installments deve ser do tipo `number`'}

          <label className="form__label">Informe o percentual de MDR *</label>
          <input className="form__input" {...register("mdr")} />
          {errors.mdr?.message && 'mdr deve ser do tipo `number`'}

        <button type="submit" className="form__button">Simular</button>
      </form>

      <ResultSimulation simulations={simulations} />
    </Container>
  )
}
