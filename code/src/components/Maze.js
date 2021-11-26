import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../reducers/game'
import { End } from './End'

// Styling
import { GameBoard, Container, ContentWrapper } from '../styling/GlobalStyling';
import styled from 'styled-components/macro'
import Button from '@mui/material/Button'
import img00 from '../images/img00.jpg'
import img01 from '../images/img01.jpg'
import img02 from '../images/img02.jpg'
import img03 from '../images/img03.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img13 from '../images/img13.jpg'

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @media (min-width: 992px) {
    padding-bottom: 40px;
    justify-content: center;
  }
`

const ButtonContainer = styled.div`
`

export const Maze = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    const backgroundImage = () => {
      let bg = '';
      switch (coordinates) {
          case '0,0':
              bg = img00;
              break;
          case '1,0':
              bg = img10;
              break;
          case '1,1':
              bg = img11;
              break;
          case '0,1':
              bg = img01;
              break;
          case '0,2':
              bg = img02;
              break;
          case '0,3':
              bg = img03;
              break;
          case '1,3':
              bg = img13;
              break;
          default:
              return img13;
      }
      return bg;
  };

    const handleButtonClick = (type, direction) => {
        // call the api, pass along type and direction to use as part of the body
        dispatch(nextStep(type, direction))
    }

    const ActionCard = ({ description, type, direction }) => (
        <TextContent> 
            <p>{description}</p>
            <ButtonContainer>
              <Button 
                variant="contained"
                color="secondary"
                onClick={() => handleButtonClick(type, direction)}>
                  {type} {direction.toLowerCase()}
              </Button>
            </ButtonContainer>
        </TextContent>
    )

    return (
        <GameBoard coordinates={coordinates}
        style={{ backgroundImage: `url(${backgroundImage()})` }}
        >
            <Container>
                <ContentWrapper>
                    {actions.length !== 0 && 
                    <>
                      <h1>{description}</h1>
                      <p>Your current position: {coordinates}</p>
                    </>
                    } 
                    {actions.length === 0 ? <End /> :
                    actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
                </ContentWrapper>
            </Container>
        </GameBoard>
    )
}
