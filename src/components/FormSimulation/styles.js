import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid var(--grey-2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 700px ;

    .form{
        display: flex;
        flex-direction: column;
        min-width: 400px;
        min-height: 400px;
        gap: 20px;
        padding: 0px 20px;
    }

    .form__title{
        color: var(--grey-1);
        font-weight: bold;
    }

    .form__label{
        color: var(--grey-1);
        font-weight: 600;
    }
    
    .form__input{
        padding: 10px;
        background-color: transparent;
        width: 350px;
    }
    
    .form__input:focus{
        border-color: var(--blue);
    }
    
    .form__button{
        color: var(--grey-1);
        padding: 10px;
        color: var(--black-1);
        font-weight: bold;
        width: 350px;
    }

    .form__button:hover{
        background-color: var(--blue);
    }
`;