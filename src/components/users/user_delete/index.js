import React, { useState } from 'react';
import { Button } from "rbx";
import UsersService from '../../../services/users';
import { Redirect } from "react-router-dom";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm('Tem certeza que deseja Excluir Conta')) {
      await UsersService.delete()
      setRedirectToHome(true)
    }
  }

  if (redirectToHome)
    return <Redirect to={{ pathname: "/" }} />

  return (
    <Button color="danger" onClick={() => deleteUser()}>
      Excluir conta
    </Button>
  )
}

export default UsersDelete;