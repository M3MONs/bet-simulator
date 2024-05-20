import Navbar from "src/components/organisms/Navbar/Navbar";
import SportsLeftMenu from "../organisms/SportsLeftMenu/SportsLeftMenu";
import styled from "styled-components";
import SportsCompetitions from "../organisms/SportsCompetitions/SportsCompetitions";

const Main = styled.main`
    max-width: 1440px;
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
                <SportsCompetitions />
            </Main>
        </>
    );
};

export default HomePage;
