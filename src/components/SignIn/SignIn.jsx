import styled from 'styled-components';

export default function SignIn({ changeRoute }) {
    const Form = styled.form`
        max-width: 350px;
        padding: 2.5rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        backdrop-filter: blur(2px);
        border-radius: 5px;
        

        input {
            padding: .5rem;
            font-size: 1.2rem;
            border-radius: 2px;
        }

        input[type="submit"] {
            color: white;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    `


    return (
        <Form className="measure center blur">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
            </fieldset>
            <div className="">
            <input className="w-100 b f1 ph3 pv2 input-reset ba b--black bg-black grow pointer f6 dib" type="submit" value="Sign in" onClick={() => changeRoute('home')}/>
            </div>
            <div className="lh-copy mt3">
            <p onClick={() => changeRoute('register')} className="f6 link dim black db">Register</p>
            </div>
        </Form>
    )
}