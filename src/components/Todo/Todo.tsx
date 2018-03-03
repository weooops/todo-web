import * as React from 'react';
import * as distanceInWordsToNow from 'date-fns/distance_in_words';
import * as ko from 'date-fns/locale/ko';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { TodoType } from '../../models';

const cx = classNames.bind(styles);

interface IProps {
  todo: TodoType;
}

class Todo extends React.Component<IProps> {
  colors = [
    '#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0',
    '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A',
    '#9CCC65', '#D4E157', '#FFEE58', '#FFCA28', '#FFA726',
    '#FF7043', '#8D6E63', '#BDBDBD'
  ];

  public shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.todo !== this.props.todo;
  }

  public render(): JSX.Element {
    const { todo: { title, message, updatedAt } } = this.props;
    const pos = Math.round(Math.random() * this.colors.length - 1);

    return (
      <div className={cx('todo')} style={{backgroundColor: this.colors[pos]}}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('message')}>{message}</div>
        <div className={cx('updatedAt')}>{distanceInWordsToNow(updatedAt, new Date(), { locale: ko })}</div>
      </div>
    );
  }
}

export default Todo;
