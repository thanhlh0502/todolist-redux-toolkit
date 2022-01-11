import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { todoRemainSelector } from '../../redux/selectors';
import todoListReducer from './reducer';

export default function TodoList() {

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();
  // const todoList = useSelector((state)=>state.todoList);
  const todoList = useSelector(todoRemainSelector);

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  }

  const handleOnChangePriority = (value) => {
    setPriority(value);
  }

  const handleAddTodo = () =>{
    const data = {
      id: uuidv4(),
      name: name,
      priority: priority,
      completed: false
    }

    dispatch(todoListReducer.actions.addTodo(data));
    setName('');
    setPriority('Medium');
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map(todo => 
            <Todo key={todo.id} name={todo.name} 
              priority = {todo.priority}
              completed = {todo.completed}
              id = {todo.id} />
          )
        }
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={(e)=> handleOnChangeName(e)} />
          <Select defaultValue='Medium' value={priority} onChange={(value) => handleOnChangePriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={() => handleAddTodo()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
