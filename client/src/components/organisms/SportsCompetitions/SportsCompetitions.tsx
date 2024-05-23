import SportCompetitionsList from "src/components/molecules/SportCompetitionsList/SportCompetitionsList";
import { SportsCompetitionsWrapper } from "./SportsCompetitions.style";
import SportCompetitionsListItem from "src/components/molecules/SportCompetitionsListItem/SportCompetitionsListItem";
import { matches } from "src/data/matches";

const SportsCompetitions = () => {
    return (
        <SportsCompetitionsWrapper>
            <SportCompetitionsList date='Today'>
                {matches.map((match, index) => (
                    <SportCompetitionsListItem
                        head={match.head}
                        match={match.match}
                        odds={match.odds}
                        flag={match.flag}
                        key={index}
                    />
                ))}
            </SportCompetitionsList>
        </SportsCompetitionsWrapper>
    );
};

export default SportsCompetitions;
