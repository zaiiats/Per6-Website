import styled from 'styled-components';
import DynamicPage from '../reusable/DynamicPage';
import DynamicText from '../reusable/DynamicText';

function Community() {
  return (
    <DynamicPage headingText='Контакти' order={1}>
      <ContentWrapper>
        <DynamicText>
          Хочете бути в курсі всіх новин, оновлень та ексклюзивних матеріалів
          про Behind The Walls? Підписуйтесь на наші соціальні мережі та станьте
          частиною нашої спільноти!
        </DynamicText>
        <LinksContainer>
          <LinkContainer>
            <a
              href='https://www.instagram.com/per6gaming/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='svg--big'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path
                    d='m2.5 12c0-4.47834 0-6.71751 1.39124-8.10876 1.39125-1.39124 3.63042-1.39124 8.10876-1.39124 4.4783 0 6.7175 0 8.1088 1.39124 1.3912 1.39125 1.3912 3.63042 1.3912 8.10876 0 4.4783 0 6.7175-1.3912 8.1088-1.3913 1.3912-3.6305 1.3912-8.1088 1.3912-4.47834 0-6.71751 0-8.10876-1.3912-1.39124-1.3913-1.39124-3.6305-1.39124-8.1088z'
                    strokeLinejoin='round'
                  />
                  <path d='m16.5 12c0 2.4853-2.0147 4.5-4.5 4.5-2.48528 0-4.5-2.0147-4.5-4.5 0-2.48528 2.01472-4.5 4.5-4.5 2.4853 0 4.5 2.01472 4.5 4.5z' />
                  <path
                    d='m17.5078 6.5h-.009'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </g>
              </svg>
            </a>
          </LinkContainer>
          <LinkContainer>
            <a
              href='https://www.youtube.com/@Per6GamingOfficial'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='svg--big'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path d='m12 20.5c1.8097 0 3.5451-.1788 5.1534-.5066 2.0089-.4095 3.0134-.6143 3.93-1.7928s.9166-2.5313.9166-5.2371v-1.927c0-2.70577 0-4.05863-.9166-5.23713-.9166-1.17849-1.9211-1.38324-3.93-1.79275-1.6083-.32785-3.3437-.50662-5.1534-.50662s-3.54511.17877-5.15344.50662c-2.0089.40951-3.01335.61426-3.92996 1.79275-.9166 1.1785-.9166 2.53136-.9166 5.23713v1.927c0 2.7058 0 4.0586.9166 5.2371.91661 1.1785 1.92106 1.3833 3.92996 1.7928 1.60833.3278 3.34374.5066 5.15344.5066z' />
                  <path
                    d='m15.9621 12.3129c-.1484.6058-.938 1.0409-2.5172 1.9112-1.7177.9464-2.5765 1.4197-3.2721 1.2374-.2356-.0618-.4526-.1704-.63481-.3177-.53799-.4349-.53799-1.3379-.53799-3.1438s0-2.70888.53799-3.14382c.18221-.14732.39921-.25589.63481-.31764.6956-.18233 1.5544.29091 3.2721 1.23739 1.5792.87027 2.3688 1.30537 2.5172 1.91117.0505.2062.0505.4196 0 .6258z'
                    strokeLinejoin='round'
                  />
                </g>
              </svg>
            </a>
          </LinkContainer>
          <LinkContainer>
            <a
              href='https://www.tiktok.com/@per6gaming'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='svg--big'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m2.5 12c0-4.47834 0-6.71751 1.39124-8.10876 1.39125-1.39124 3.63042-1.39124 8.10876-1.39124 4.4783 0 6.7175 0 8.1088 1.39124 1.3912 1.39125 1.3912 3.63042 1.3912 8.10876 0 4.4783 0 6.7175-1.3912 8.1088-1.3913 1.3912-3.6305 1.3912-8.1088 1.3912-4.47834 0-6.71751 0-8.10876-1.3912-1.39124-1.3913-1.39124-3.6305-1.39124-8.1088z'
                  strokeLinejoin='round'
                />
                <path
                  className='tiktok-path-svg'
                  stroke='transparent'
                  d='m10.3938 11.7779c.41.0586.79-.2262.8486-.6363.0587-.41-.2262-.7899-.6362-.8486zm7.1062-1.5279c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm-3.25-4.25c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75zm-1.5 8.5c0 1.5188-1.2312 2.75-2.75 2.75v1.5c2.3472 0 4.25-1.9028 4.25-4.25zm-2.75 2.75c-1.51878 0-2.75-1.2312-2.75-2.75h-1.5c0 2.3472 1.90279 4.25 4.25 4.25zm-2.75-2.75c0-1.5188 1.23122-2.75 2.75-2.75v-1.5c-2.34721 0-4.25 1.9028-4.25 4.25zm2.75-2.75c.1341 0 .2656.0095.3938.0279l.2124-1.4849c-.1984-.0284-.4008-.043-.6062-.043zm7.5-3c-.7746 0-1.6076-.3192-2.2441-.85077-.6359-.53104-1.0059-1.21088-1.0059-1.89923h-1.5c0 1.24465.6635 2.31481 1.5444 3.05052.8802.73518 2.0472 1.19948 3.2056 1.19948zm-4.75-2.75v8.5h1.5v-8.5z'
                  fill='var(--white-color-text)'
                />
              </svg>
            </a>
          </LinkContainer>
          <LinkContainer>
            <a
              href='mailto:per6gaming@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='svg--big'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g strokeLinejoin='round'>
                  <path d='m2 6 6.91302 3.91697c2.54858 1.44403 3.62538 1.44403 6.17398 0l6.913-3.91697' />
                  <path d='m2.01577 13.4756c.06537 3.0656.09806 4.5983 1.22919 5.7338 1.13112 1.1354 2.70537 1.1749 5.85387 1.254 1.94047.0488 3.86187.0488 5.80237 0 3.1485-.0791 4.7227-.1186 5.8539-1.254 1.1311-1.1355 1.1638-2.6682 1.2291-5.7338.0211-.9857.0211-1.9655 0-2.9512-.0653-3.06554-.098-4.59831-1.2291-5.73374-1.1312-1.13543-2.7054-1.17498-5.8539-1.25409-1.9405-.04876-3.8619-.04876-5.80238-.00001-3.14849.0791-4.72274.11865-5.85387 1.25409-1.13113 1.13543-1.16381 2.6682-1.22919 5.73375-.02102.9857-.02101 1.9655.00001 2.9512z' />
                </g>
              </svg>
            </a>
          </LinkContainer>
          <LinkContainer>
            <a href='https://donatello.to/per6'>
              <svg
                className='svg--big'
                viewBox='0 0 48 48'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24 2V46M34 10H19C17.1435 10 15.363 10.7375 14.0503 12.0503C12.7375 13.363 12 15.1435 12 17C12 18.8565 12.7375 20.637 14.0503 21.9497C15.363 23.2625 17.1435 24 19 24H29C30.8565 24 32.637 24.7375 33.9497 26.0503C35.2625 27.363 36 29.1435 36 31C36 32.8565 35.2625 34.637 33.9497 35.9497C32.637 37.2625 30.8565 38 29 38H12'
                  strokeWidth='3'
                />
              </svg>
            </a>
          </LinkContainer>
        </LinksContainer>
      </ContentWrapper>
    </DynamicPage>
  );
}

const ContentWrapper = styled.section`
  flex: 1;
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
`;

const LinkContainer = styled.li`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    padding: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;

    .svg--big,
    .tiktok-path-svg {
      transition: var(--transition);
    }

    &:hover .svg--big {
      stroke: var(--accent-color);
    }

    &:hover .tiktok-path-svg {
      fill: var(--accent-color);
    }
  }
`;

export default Community;
