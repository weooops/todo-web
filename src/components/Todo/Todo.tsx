import * as React from 'react';

import * as styles from './styles.scss';
import * as classNames from 'classnames/bind';
import { TodoType } from '../../models';

const cx = classNames.bind(styles);

interface IProps {
  todo: TodoType;
}

class Todo extends React.Component<IProps> {
  public shouldComponentUpdate(nextProps: IProps): boolean {
    return nextProps.todo !== this.props.todo;
  }

  public render(): JSX.Element {
    const { todo: { title, message } } = this.props;
    return (
      <div className={cx('todo')}>
        {title} / {message}
      </div>
    );
  }
}

export default Todo;
