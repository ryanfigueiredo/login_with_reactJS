import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './authActions'

import Input from '../common/input'
import Botao from '../common/botao'
import Messages from '../common/messages'


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props

        return (
            <div className="containerBox">
                <div className="box">
                <h3>Login_with_reactJS</h3>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} tipo="input" name="name"
                            placeholder="Nome" hide={loginMode} />
                        <Field component={Input} tipo="email" name="email"
                            placeholder="E-mail" />
                        <Field component={Input} tipo="password" name="password"
                            placeholder="Senha" />
                        <Field component={Input} tipo="password" name="confirm_password"
                            placeholder="Confirmar Senha" hide={loginMode} />
                        <Botao texto={loginMode ? 'Entrar' : 'Registrar'}
                            tipo="submit">
                        </Botao>
                    </form>
                    <a onClick={() => this.changeMode()} className="hover">
                        {loginMode ? 'Novo usuário? Registrar aqui!' :
                            'Já é cadastrado? Entrar aqui!'}
                    </a>
                </div>
                <Messages />
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },
    dispatch)
export default connect(null, mapDispatchToProps)(Auth)

