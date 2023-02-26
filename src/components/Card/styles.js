import styled from 'styled-components'

export const Container = styled.div`
  * {
    background-color: transparent;
  }

  max-width: 412px;
  height: 600px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 6px;

  .links {
    position: absolute;
    top: 10px;
    right: 10px;

    display: none;

    > ul li svg {
      font-size: 3rem;
      display: flex;
      margin-top: 1rem;
    }
  }

  .card {
    position: relative;
    height: 100%;
    &:hover {
      cursor: pointer;
      .links {
        display: flex;
      }
    }
  }

  .top {
    img {
      width: 100%;
      height: 250px;
      background-position: left top;
      object-fit: cover;
      border-radius: 6px 6px 0 0;
    }
  }

  .info-wrapper {
    padding: 1rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .name-project {
      font-size: 2.8rem;
      font-weight: 600;
    }

    .description-project {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    .footer-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .easy {
        border: 2px solid ${({ theme }) => theme.COLORS.COLOR_EASY};
      }

      .medium {
        border: 2px solid ${({ theme }) => theme.COLORS.COLOR_MEDIUM};
      }

      .hard {
        border: 2px solid ${({ theme }) => theme.COLORS.COLOR_HARD};
      }

      .easy,
      .medium,
      .hard {
        border-radius: 6rem;
        width: auto;
        padding: 0 1rem;
        height: 31px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .footer-wrapper {
      position: absolute;
      bottom: 20px;

      width: 90%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
