import styled from "styled-components";

export const FooterBG = styled.section`
display: grid;
grid-template-columns: 1fr;
row-gap: 30px;

p{
    text-align: center;
    font-size: 14px;
}

@media screen and (min-width: 428px){
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
}
`