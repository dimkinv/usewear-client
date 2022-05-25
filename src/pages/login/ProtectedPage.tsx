import React from "react";
import { useNavigate } from "react-router-dom";
import { typedUseSelector } from "../../store/store";

export const ProtectedPage: React.FC = ()=>{
  const auth = typedUseSelector(store => store.loginStore);
  const navigation = useNavigate();
  if(!auth.accessToken){

  }

  return (<></>)
}