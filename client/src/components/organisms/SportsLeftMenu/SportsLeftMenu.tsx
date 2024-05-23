import SportSearchBar from "src/components/atoms/SportSearchBar";
import { SportsLeftMenuWrapper } from "./SportsLeftMenu.style";
import SportsList from "src/components/molecules/SportsList/SportsList";

const SportsLeftMenu = () => {
    return (
        <SportsLeftMenuWrapper>
            <SportSearchBar />
            <SportsList title='Football' />
        </SportsLeftMenuWrapper>
    );
};

export default SportsLeftMenu;
