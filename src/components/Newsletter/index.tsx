import { useState } from 'react';

import { Container, Content, Form } from './style';
import { api } from '../../services/api';
import { validateName, validateEmail, successForm, errorForm  } from '../../utils/validationForm';

interface Form {
    name: string;
    email: string;
}

export function Newsletter() {
    const [form, setForm] = useState<Form>({
        name: '',
        email: ''
    });
    const [disableSend, setDisableSend] =  useState<boolean>(false);

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;
        setForm({
          ...form,
            [name]: value
        });
    }

    async function handleSubmit(event: React.SyntheticEvent){
        event.preventDefault();

        setDisableSend(true);

        const { name, email } = form;
       
        if(validateName(name) && validateEmail(email)){
            try{
                const response = await api.post('challenge-newsletter/', {
                    "name": name,
                    "email": email
                })
                successForm();
                if(response.status === 200){
                    setForm({
                        name: '',
                        email: ''
                    })
                }
            }catch(error){
                errorForm();
            }
        }

        setDisableSend(false);
    }

    return (
        <Container>
            <Content>
                <h3>Are you a parent without a nanny and looking to share?</h3>
                <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
                <Form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <button type="submit" disabled={disableSend}>Send</button>
                </Form>
            </Content>
            <hr />
        </Container>
    )
}