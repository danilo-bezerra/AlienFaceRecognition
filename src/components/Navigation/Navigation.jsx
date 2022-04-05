import styled from 'styled-components';

export default function Navigation({changeRoute, isActive}) {
    const Nav = styled.nav`
        display: flex;
        justify-content: flex-end;
        padding: 2rem;
        gap: 2rem;
        `

    const Link = styled.a`
        font-size: 1.5rem;
        color: #000;
        cursor: pointer;
        text-decoration: underline;
    `;

    if (isActive) {
        return (
            <Nav>
                <Link onClick={()=> changeRoute('signin')}>Sign Out</Link>
            </Nav>
        )
    } else {
        return (
            <Nav>
            <Link onClick={()=> changeRoute('signin')}>Sign In</Link>
            <Link onClick={()=> changeRoute('register')}>Register</Link>
        </Nav>
        )
    }
}