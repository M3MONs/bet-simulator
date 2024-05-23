import { sports } from "src/data/sports";
import { SportsListContainer, SportsListItems } from "./SportsList.style";
import SportListItem from "src/components/atoms/SportListItem";

type SportsListProps = {
    title: string;
};

const SportsList = ({ title }: SportsListProps) => {
    return (
        <SportsListContainer>
            <h3>{title}</h3>
            <SportsListItems>
                {sports.map((sport, index) => (
                    <SportListItem sport={sport} key={index} link='#' />
                ))}
            </SportsListItems>
        </SportsListContainer>
    );
};

export default SportsList;
