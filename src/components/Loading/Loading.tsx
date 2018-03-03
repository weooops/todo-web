import * as React from 'react';
import styled from 'styled-components';

import * as styles from '../../config/_animations.scss';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
`;
const Wrapper = styled.div`
  border: 4px solid rgba(252,84,89, 0.2);
  border-top: 4px solid #fc5459;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${styles.spin} 1s linear infinite;
`;

const Loading: React.SFC = ({children, ...rest}) => {
  return (
    <Container>
      <Wrapper {...rest}>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Loading;
