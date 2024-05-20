import BetButton from "src/components/atoms/BetButton";
import {
    ListItemBody,
    ListItemBodyButtons,
    ListItemHead,
    ListItemWrapper,
} from "./SportCompetitionsListItem.style";

type SportCompetitionsListItemProps = {
    head: string;
    match: string;
    flag: JSX.Element;
    odds: {
        result: string;
        odd: number;
    }[];
};

const SportCompetitionsListItem = ({ head, match, odds, flag }: SportCompetitionsListItemProps) => {
    return (
        <ListItemWrapper>
            <ListItemHead>
                {flag}
                {head}
            </ListItemHead>
            <ListItemBody>
                <h4>{match}</h4>
                <ListItemBodyButtons>
                    {odds.map((odd, index) => (
                        <BetButton result={odd.result} odd={odd.odd} key={index} />
                    ))}
                </ListItemBodyButtons>
            </ListItemBody>
        </ListItemWrapper>
    );
};

export default SportCompetitionsListItem;
