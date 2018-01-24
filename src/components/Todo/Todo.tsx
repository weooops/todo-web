import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { TodoType } from '../../models';

const cx = classNames.bind(styles);

interface IProps {
  todo: TodoType;
}

class Todo extends React.Component<IProps> {
  colors = ['#37a7ff', '#ea6248', '#00ad6c', '#9013fe'];

  public shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.todo !== this.props.todo;
  }

  public render(): JSX.Element {
    const { todo: { title, message } } = this.props;
    const pos = Math.round(Math.random() * this.colors.length - 1);

    return (
      <div className={cx('todo')} style={{backgroundColor: this.colors[pos]}}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('message')}>{message}</div>
      </div>
    );
  }
}

export default Todo;
