import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

const SearchBar = styled.input`
    border: none;
    padding: 12px 16px;
    padding-left: 40px;
    background-color: white;
    border-radius: 8px;
`;

const SearchIcon = styled(FaSearch)`
    position: absolute;
    font-size: 1.25rem;
    margin: 9px 0 0 10px;
    color: red;
`;

const CloseIcon = styled(IoIosClose)`
    position: absolute;
    font-size: 1.75rem;
    margin: 6px 0 0 255px;
    color: black;
    cursor: pointer;
`;

const SportSearchBar = () => {
    return (
        <>
            <SearchIcon />
            <SearchBar placeholder='Search for a match or competition' />
            <CloseIcon />
        </>
    );
};

export default SportSearchBar;
