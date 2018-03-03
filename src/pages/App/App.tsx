import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import Navigation from '../../containers/Navigation';
import Private from '../../containers/Private';
import Public from '../../containers/Public';

const cx = classNames.bind(styles);

interface IProps {
  isLoggedIn: boolean;
}

const App: React.SFC<IProps> = props => (
  <div className={cx('app', 'container')}>
    {props.isLoggedIn && <Navigation key={3} />}
    {props.isLoggedIn ? <Private key={1} /> : <Public key={2} />}
  </div>
);

export default App;
