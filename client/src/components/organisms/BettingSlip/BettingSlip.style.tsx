import styled from "styled-components";

export const BettingSlipWrapper = styled.section`
    width: 330px;
    border-radius: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BettingSlipHeader = styled.header`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e5e5e5;
    font-weight: 700;
`;

export const BettingSlipContent = styled.div`
    height: 100%;
    padding: 1rem;
    text-align: center;
`;

export const BettingSlipFooter = styled.footer`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid #e5e5e5;
`;
