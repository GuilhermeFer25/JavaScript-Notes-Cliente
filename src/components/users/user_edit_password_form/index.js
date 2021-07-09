import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Title, Help, Label } from 'rbx'
import UsersService from '../../../services/users';


function UsersEditFormPassword() {
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [status, setStatus] = useState('null')

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password === password_confirmation) {
      try {
        await UsersService.updatePassword({ password: password });
        setStatus('success');
      } catch (err) {
        setStatus('error');
      }
    } else {
      setStatus('error_confirmation_password');
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field>
          <Control>
            <Label className="has-text-grey">Senha</Label>
            <Input
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              required
              name="password"
              placeholder="Senha" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label className="has-text-grey">Confirmação da Senha</Label>
            <Input
              type="password"
              value={password_confirmation}
              onChange={(evt) => setPasswordConfirmation(evt.target.value)}
              required
              name="password_confirmation"
              placeholder="Confirmação da Senha" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button color='custom-purple' outlined>Atualizar Senha</Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>

        {status === 'error_update' && <Help color='danger'>Problema ao atualizar Senha</Help>}
        {status === 'error_confirmation_password' && <Help color='danger'>Confirmação da Senha não confere</Help>}
        {status === 'success' && <Help color='success'>Senha atualizada com sucesso</Help>}
      </form>
    </Fragment>
  )



}
export default UsersEditFormPassword;