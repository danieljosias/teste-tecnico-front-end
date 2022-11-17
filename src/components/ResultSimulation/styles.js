import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:40px;
    height: 600px;
    width: 300px ;
    background-color: var(--black-2);

    .resultSimulation__title{
        color: var(--blue);
        border-bottom: 1px solid;
    }
    
    .resultSimulation__wrapper{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 300px ;
        padding-left: 50px;
    }

    .resultSimulation__day{
        color: var(--blue);
    }   
    
    .resultSimulation__amount{
        font-weight: bold;
    }

`;