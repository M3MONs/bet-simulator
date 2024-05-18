import Navbar from "src/components/organisms/Navbar/Navbar";
import SportsLeftMenu from "../organisms/SportsLeftMenu/SportsLeftMenu";
import styled from "styled-components";

const Main = styled.main`
    max-width: 1440px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 70px 0;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`;

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Main>
                <SportsLeftMenu />
            </Main>
        </>
    );
};

export default HomePage;
