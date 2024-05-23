import { ReactElement } from "react";
import { SportCompetitionsListWrapper } from "./SportCompetitionsList.style";

type SportCompetitionsListProps = {
    children: ReactElement<any, any>[];
    date?: string;
};

const SportCompetitionsList = ({ children, date }: SportCompetitionsListProps) => {
    return (
        <SportCompetitionsListWrapper>
            {date && <li>{date}</li>}
            {children}
        </SportCompetitionsListWrapper>
    );
};

export default SportCompetitionsList;
