import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import MySelect from "./Ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text
                >
                    Поиск
                </InputGroup.Text>
                <Form.Control
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    id="inputGroup-sizing-default"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По тексту'},
                   /* {value: 'name', name: 'По имени'},*/
                ]}
            />
        </div>
    );
};


export default PostFilter;