import React from "react";
import Me from "components/molecules/Me/Me";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const HomeView = () => (
    <StyledWrapper>
        <Me/>
    </StyledWrapper>
);

export default HomeView;