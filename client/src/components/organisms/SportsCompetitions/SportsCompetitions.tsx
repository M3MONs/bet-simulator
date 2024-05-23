import SportCompetitionsList from "src/components/molecules/SportCompetitionsList/SportCompetitionsList";
import { SportsCompetitionsWrapper } from "./SportsCompetitions.style";
import SportCompetitionsListItem from "src/components/molecules/SportCompetitionsListItem/SportCompetitionsListItem";
import { matches } from "src/data/matches";

const SportsCompetitions = () => {
    return (
        <SportsCompetitionsWrapper>
            <SportCompetitionsList date='Today'>
                {matches.map((match, index) => (
                    <SportCompetitionsListItem match={match} key={index} />
                ))}
            </SportCompetitionsList>
        </SportsCompetitionsWrapper>
    );
};

export default SportsCompetitions;
