/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from 'rbx'
import { Redirect } from 'react-router-dom'
import UsersService from '../../../services/users'

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirectToRegister, setRedirectToRegister] = useState(false)
  const [redirectToNotes, setRedirectNotes] = useState(false)
  const [error, setError] = useState(false)

  const HandleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await UsersService.login({ email: email, password: password })
      setRedirectNotes(true)
    } catch (error) {
      setError(true)
    }
  }


  if (redirectToRegister === true) {
    return <Redirect to={{ pathname: '/register' }} />
  } else if (redirectToNotes === true) {
    return <Redirect to={{ pathname: "/notes" }} />
  }

  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={HandleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)} />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a onClick={e => setRedirectToRegister(true)} className="button is-light has-text-custom-purple">Registre-se</a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>Entrar</Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email ou Senha Invalidos</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  )

}
export default LoginForm