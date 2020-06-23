import {Link, Route} from "react-router-dom"
import React from 'react'
import Client from './clientlogin'
import styled from 'styled-components' 

const ClientSignUp = () => {
   
    const Head = styled.div`
        display: flex;
        flex-direction: column;
        background: #FF9233;
        align-items: center;
        padding: 1%;
    `;

    const Title = styled.div`
    font-size: 3em;
    `;

    const Buttons = styled.div`
    display: flex;
    width: 10%;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;
    `;

    const ClientLog = styled.div`
        display: flex;
        justify-content: center;
        width:100%;
        font-size: 2em;
        line-height: 4em;
        `;

        const Body = styled.div`
        display: flex;
        justify-content: center;
        width:100%;
        `;

        const Img = styled.div`
        display: flex;
        justify-content: center;
        width:100%;
        font-size: 2em;
        line-height: 4em;
        `;

        const HomeButton = styled.button`
        &:hover{
            background: black;
            color: white;
        }
        `;

        const BackButton = styled.button`
        &:hover{
            background: black;
            color: white;
        }
        `;


    return (
        <div>
            <Head>
                <Title>Anywhere Fitness</Title>
                <Buttons>
                    <Link to ='/'><HomeButton className='home'>Home</HomeButton></Link>
                    <Link to ='/ClientLandingPage'><BackButton className='back'>Back</BackButton></Link>
                </Buttons>
                
            </Head> 
            <Body>
                <Img>
                    <p>askdjfhaksdhf</p>
                </Img>
                <ClientLog>
                    <Client/>
                </ClientLog>
            </Body>
        </div>     
        )
}

export default ClientSignUp;