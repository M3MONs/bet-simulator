import styled from "styled-components";

export const ListItemWrapper = styled.li`
    border-bottom: 1px solid #eef0f3;
    padding: 0.5rem 1rem;
    color: #5d6473;
    font-weight: 500;
`;

export const ListItemHead = styled.p`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export const ListItemBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding: 0.5rem 0;
`;

export const ListItemBodyButtons = styled.div`
    display: flex;
    gap: 0.5rem;
`;
