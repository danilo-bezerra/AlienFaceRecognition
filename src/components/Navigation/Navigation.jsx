import styled from 'styled-components';

export default function Navigation() {
    const Nav = styled.nav`
        display: flex;
        justify-content: flex-end;
        padding: 1.5rem;
        `

    const Link = styled.a`
        font-size: 1.5rem;
        color: #000;
    `;

    return (
        <Nav>
            <Link href="#">Sign Out</Link>
        </Nav>
    )
}