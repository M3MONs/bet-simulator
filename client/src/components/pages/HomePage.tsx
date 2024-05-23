import Navbar from "src/components/organisms/Navbar/Navbar";
import SportsLeftMenu from "../organisms/SportsLeftMenu/SportsLeftMenu";
import styled from "styled-components";
import SportsCompetitions from "../organisms/SportsCompetitions/SportsCompetitions";
import BettingSlip from "../organisms/BettingSlip/BettingSlip";
import BettingSlipContextProvider from "src/context/BettingSlipContext";

const Main = styled.main`
    max-width: 1500px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 70px 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 3fr 1fr;
`;

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Main>
                <SportsLeftMenu />
                <BettingSlipContextProvider>
                    <SportsCompetitions />
                    <BettingSlip />
                </BettingSlipContextProvider>
            </Main>
        </>
    );
};

export default HomePage;
