import styled from 'styled-components';

export default function ImageLinkForm({handleSubmit, handleInputChange, value}) {
    const FormBox = styled.div`
        padding: 0 2%;
    `

    const Text = styled.p`
        font-size: 1.4rem;
        margin: 2rem 0;
    `

    const Form = styled.div`
        padding: 2.5rem;
        margin: 0 auto;
        background: rgb(0,188,212);
        background: linear-gradient(270deg, rgba(71,252,126,1) 0%, rgba(0,188,212,1) 100%);
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        max-width: 900px;


        input, button {
            font-size: 1.3rem;
            padding: 0.8rem;
            filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.35));
        }

        input {
            width: 70%;
            border-radius: 4px 0 0 4px;

        }

        input:focus {
            outline: 1px solid #000000cc;
        }

        button {
            width: 30%;
            background-color: #000000cc;
            color: #fff;
            transition: all 0.2s ease-in-out;
            border-radius: 0 4px 4px 0;
        }

        button:hover {
            background-color: #000000;
            transform: scale(1.1);
            border-radius: 4px;
        }

        @media (max-width: 600px) {
            input, button {
                width: 100%;
                margin: 0.5rem 0;
        }
    `

    return (
        <FormBox>
            <Text>This magic alien will detect faces in your pictures. Give it a try</Text>
            <Form>
                <input type="text" placeholder="https://" id='urlContent'/>
                <button onClick={handleSubmit}>Detect</button>
            </Form>
        </FormBox>
    )
}