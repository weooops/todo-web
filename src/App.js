import Amplify, { I18n, Storage, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, S3Image } from 'aws-amplify-react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import React, { Component } from 'react';
import aws_exports from './aws-exports';
import { listTodos } from './graphql/queries';
import { createTodo } from './graphql/mutations';
import './App.css';

Amplify.configure(aws_exports);
Storage.configure({ level: 'private' });

const GET_TODOS = gql`
  ${listTodos}
`;

const ADD_TODO = gql`
  ${createTodo}
`;

class App extends Component {
  state = {
    name: '',
    description: '',
    todos: [],
    items: []
  };

  componentDidMount() {
    this.listQuery();
    Storage.list('', { level: 'private' })
      .then(result => this.setState({ items: result }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h2>{I18n.get('Todos with Amplify Client')}</h2>
        <div>
          <button onClick={this.listQuery}>{I18n.get('GraphQL Query')}</button>
          <button onClick={this.todoMutation}>
            {I18n.get('GraphQL Mutation')}
          </button>
          <input
            type="text"
            name="name"
            placeholder={I18n.get('name')}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder={I18n.get('description')}
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          {this.state.todos.map(todo => (
            <p key={todo.id}>
              <strong>{todo.name}</strong>, {todo.description},{' '}
              <small>{todo.createdAt}</small>
            </p>
          ))}
        </div>
        <hr />

        <h2>{I18n.get('Todos with Apollo Client')}</h2>
        <div>
          <Mutation
            mutation={ADD_TODO}
            variables={{ filter: { createdAt: 'createdAt' } }}
          >
            {(addTodo, { data }) => (
              <div>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    addTodo({
                      variables: {
                        input: {
                          name: this.state.name,
                          description: this.state.description
                        }
                      }
                    });
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder={I18n.get('name')}
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder={I18n.get('description')}
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                  <button type="submit">Add Todo</button>
                </form>
              </div>
            )}
          </Mutation>
        </div>
        <div>
          <Query query={GET_TODOS}>
            {({ loading, error, data }) => {
              if (loading) return `${I18n.get('Loading')}...`;
              if (error) return `${I18n.get('Error')}! ${error.message}`;

              return (
                <div>
                  {data.listTodos.items.map(todo => (
                    <p key={todo.id}>
                      <strong>{todo.name}</strong>, {todo.description},{' '}
                      <small>{todo.createdAt}</small>
                    </p>
                  ))}
                </div>
              );
            }}
          </Query>
        </div>
        <hr />

        <h2>{I18n.get('Pick a file')}</h2>
        <div>
          <input type="file" onChange={this.uploadFile} />
          <div className="Image__list">
            {this.state.items.map(item => (
              <div className="Image__item" key={item.key}>
                <S3Image level="private" imgKey={item.key} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  uploadFile = e => {
    const file = e.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(item => {
      this.setState({ items: [...this.state.items, item] });
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  todoMutation = async () => {
    const todoDetails = {
      input: {
        name: this.state.name,
        description: this.state.description
      }
    };

    const newTodo = await API.graphql(
      graphqlOperation(createTodo, todoDetails)
    );
    this.setState({
      name: '',
      description: '',
      todos: [newTodo.data.createTodo, ...this.state.todos]
    });
  };

  listQuery = async () => {
    const allTodos = await API.graphql(
      graphqlOperation(listTodos, { variables: { filter: 'name' } })
    );
    this.setState({ todos: allTodos.data.listTodos.items });
  };
}

export default withAuthenticator(App, true);
