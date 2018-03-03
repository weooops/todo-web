import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
  logout(): void;
}

const Navigation: React.SFC<IProps> = (props, context) => (
  <div className={cx('navigation')}>
    <span onClick={props.logout}>{context.t('logout')}</span>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
