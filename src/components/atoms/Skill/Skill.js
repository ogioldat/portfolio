import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const StyledImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${ ({theme}) => theme.accent };
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDescription = styled.div`
  width: 300px;
  text-align: center;
`;


const Skill = ({icon: Icon, description, name}) => {
    const StyledIcon = styled(Icon)`
      width: 80px;
      height: 80px;
`;



    return (
        <StyledWrapper>
            <StyledImgWrapper>
                <StyledIcon/>
            </StyledImgWrapper>
            <StyledDescription>
                <h3>{ name }</h3>
                {
                    description
                }
            </StyledDescription>
        </StyledWrapper>
    )
};

export default Skill;