import BetButton from "src/components/atoms/BetButton";
import {
    ListItemBody,
    ListItemBodyButtons,
    ListItemHead,
    ListItemWrapper,
} from "./SportCompetitionsListItem.style";
import { useBettingContext } from "src/context/BettingSlipContext";

type SportCompetitionsListItemProps = {
    match: {
        event: number;
        head: string;
        teams: string;
        flag: JSX.Element;
        odds: {
            result: string;
            odd: number;
        }[];
    };
};

const SportCompetitionsListItem = ({ match }: SportCompetitionsListItemProps) => {
    const { head, flag, odds, teams, event } = match;
    const { addBet } = useBettingContext();

    const handleBetButton = (key: number) => {
        const selectedBet = {
            event: event,
            bet: key,
            odd: odds[key].odd,
            pick: odds[key].result,
            teams: teams,
        };
        addBet(selectedBet);
    };

    return (
        <ListItemWrapper>
            <ListItemHead>
                {flag}
                {head}
            </ListItemHead>
            <ListItemBody>
                <h4>{teams}</h4>
                <ListItemBodyButtons>
                    {odds.map((odd, index) => (
                        <BetButton
                            result={odd.result}
                            odd={odd.odd}
                            key={index}
                            keyProp={index}
                            handleClick={handleBetButton}
                        />
                    ))}
                </ListItemBodyButtons>
            </ListItemBody>
        </ListItemWrapper>
    );
};

export default SportCompetitionsListItem;
