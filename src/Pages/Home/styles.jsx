import styled from 'styled-components'

export const AddButton = styled.button `
    background: #6CF000;
    color: #000000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

&:hover{
    opacity: 0.8;
}

`

export const Container = styled.div `
    background: #B752FF;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #FFFFFF;
    }

    input{
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }
`
export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p{
        text-transform: capitalize;
        font-weight: bold;
    }
`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`