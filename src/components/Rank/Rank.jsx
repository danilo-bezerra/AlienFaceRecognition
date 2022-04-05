import styled from 'styled-components';

export default function Rank({entries}) {
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
            <p>{"Name"}, your current entry count is <span>#{entries}</span></p>
        </RankText>
    )
}