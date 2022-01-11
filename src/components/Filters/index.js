import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filtersReducer from './reducer';

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('');
  const [searchStatus, setSearchStatus] = useState('All');
  const [searchByPriority, setSearchByPriority] = useState([])

  const dispatch = useDispatch();

  const handleChangeText = (e) =>{
    const value = e.target.value;
    setSearchText(value);
    dispatch(filtersReducer.actions.filterSearchText(value));
  }

  const handleChangeStatus = (e) => {
    const value = e.target.value;
    setSearchStatus(value);
    dispatch(filtersReducer.actions.filterByStatus(value));
  }

  const handleChangePriority = (value) => {
    setSearchByPriority(value);
    dispatch(filtersReducer.actions.filterBypriorities(value));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={(e)=>handleChangeText(e)} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={(e) => handleChangeStatus(e)}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={searchByPriority}
          onChange={(value) => handleChangePriority(value)}
        >
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
      </Col>
    </Row>
  );
}
