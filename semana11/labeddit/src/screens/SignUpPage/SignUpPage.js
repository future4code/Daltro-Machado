import React from 'react';
import {useForm} from "../../hooks/useForm"
import {TextField, Button} from '@material-ui/core'
import logo from '../../assets/logo_labeddit.png'
import { FormContainer, Logomarca, SignupPageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import {signup} from "../../services/user"
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

const SignUpPage = () => {
    useUnprotectPage()
    const history = useHistory()
    const {form, onChange} = useForm({username: "", email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        
        signup(form, history)
    }

    return (
        <SignupPageContainer>
            <Logomarca src={logo} />
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="Nome"
                    variant="outlined"
                    required
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                />
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
                    Cadastrar
                </Button>
            </FormContainer>
        </SignupPageContainer>
    )
}

export default SignUpPage;