import { toast } from 'react-toastify';

export function validateName(name: string) {
    if(name.length === 0) {
        toast.error('The name field is required');
        return false;
    }
    if(name.length < 3) {
        console.log('erro')
        toast.error('The name field must be longer than 3 characters');
        return false;
    }
    return true;
}

export function validateEmail(email: string) {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.length === 0) {
        toast.error('The email field is required');
        return false;
    }
    if(!validEmail.test(String(email).toLowerCase())) {
        toast.error('Invalid email address!');
        return false;
    }
    return true;
}

export function successForm() {
    toast.success('Sent successfully!');
}

export function errorForm() {
    toast.error('There was an error while sending please try again.');
}