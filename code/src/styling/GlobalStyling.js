import styled from 'styled-components'

// Wrappers ----------------------------------------------------------------

export const GameBoard = styled.section`
    background-position: center;
    background-size: cover;
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Container = styled.div`
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const ContentWrapper = styled.div`
    margin: 0 auto;
    width: 325px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    min-height: 300px;
    border: whitesmoke solid 4px;
    border-radius: 6px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.6);

    @media (min-width: 768px) {
        justify-content: space-evenly;
        min-width: 600px;
    }

    @media (min-width: 992px) {
        min-width: 800px;
        font-size: larger;
    }
`

