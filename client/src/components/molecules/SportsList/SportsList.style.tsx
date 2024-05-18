import styled from "styled-components";

export const SportsListContainer = styled.section`
    margin: 15px 0;
`;

export const SportsListItems = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0;
    border-radius: 12px;
    background: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    li {
        padding: 10px;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;

        &:hover {
            background-color: #f0f0f0;
        }
    }
`;
