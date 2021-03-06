import React from 'react';
import {useForm} from "../../hooks/useForm"
import { login } from '../../services/user';
import {TextField, Button} from '@material-ui/core'
import logo from '../../assets/logo_labeddit.png'
import { TextFieldStyled, ButtonStyled, FormContainer, LoginPageContainer, Logomarca } from './styles';
import { useHistory } from 'react-router-dom';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import { goToSignUp } from '../../routes/coordinator'

const LoginPage = () => {
    useUnprotectPage()
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return(
        <LoginPageContainer>
            <Logomarca src={logo} />
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Senha"
                    variant="outlined"    
                    required            
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Login
                </Button>
            </FormContainer>
            <Button color="primary" onClick={() => goToSignUp(history)}>Clique aqui para fazer seu Cadastro!</Button>
        </LoginPageContainer>
    )
}

export default LoginPage;