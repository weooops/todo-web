import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import Private from '../Private';
import Public from '../Public';

const cx = classNames.bind(styles);

interface PropsType {
  isLoggedIn: boolean;
}

const App: React.SFC<PropsType> = props => (
  <div className={cx('app', 'container')}>
    {props.isLoggedIn ? <Private key={1} /> : <Public key={2} />}
  </div>
);

export default App;
