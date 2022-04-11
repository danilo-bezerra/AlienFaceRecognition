import styled from 'styled-components';

export default function Rank({entries, user}) {
    const RankText = styled.div`
        color: #fff;
        font-size: 1.5rem;

        span {
            display: block;
            font-size: 4rem;
        }
    `

    return (
        <RankText>
            <p>{user.name}, your current entry count is <span>#{entries ?? 0}</span></p>
        </RankText>
    )
}