import * as React from 'react';
import styled from 'styled-components';

import * as styles from '../../config/_animations.scss';

const Wrapper = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.2); /* Light grey */
  border-top: 2px solid #ffffff; /* White */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${styles.spin} 1s linear infinite;
`;

const Spinner: React.SFC = ({children, ...rest}) => {
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
};

export default Spinner;
