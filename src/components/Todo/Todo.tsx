import * as React from 'react';

import * as styles from './styles.scss';
import { TodoType } from '../../models';

interface PropsType {
  todo: TodoType;
}

class Todo extends React.Component<PropsType> {
  public shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.todo !== this.props.todo;
  }

  public render(): JSX.Element {
    const { todo: { title, message } } = this.props;
    return (
      <div className={styles.todo}>
        {title} / {message}
      </div>
    );
  }
}

export default Todo;