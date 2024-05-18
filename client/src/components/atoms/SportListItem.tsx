import { GiSoccerBall } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

type SportListItemProps = {
    sport: {
        name: string;
        icon: JSX.Element;
    };
    link: string;
};

const SportListItemContainer = styled.li`
    display: flex;
    align-items: center;

    text {
        font-weight: 500;
        margin-left: 1.25rem;
    }
`;

const FlagWrapper = styled.div`
    width: 25px;
    height: 25px;
    svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const SportListItem = ({ sport, link }: SportListItemProps) => {
    const { name, icon } = sport;
    return (
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            <SportListItemContainer>
                <GiSoccerBall fontSize={"1.5rem"} />
                <FlagWrapper>{icon}</FlagWrapper>
                <text>{name}</text>
            </SportListItemContainer>
        </Link>
    );
};

export default SportListItem;
