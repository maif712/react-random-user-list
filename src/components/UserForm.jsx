
import React, { useState } from 'react'
import InputGroup from './UI/InputGroup'
import Label from './UI/Label'
import InputWrapper from './UI/InputWrapper'
import { CalendarIcon, ChevronDown, PlusIcon, SheildIcon, UserIcon } from './UI/icons/Icons'
import Input from './UI/Input'
import Button from './UI/Button'
import Select from './UI/Select'

const UserForm = ({handleAddUser}) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [role, setRole] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            id: crypto.randomUUID(),
            name: name,
            age: age,
            role: role
        }
        handleAddUser(newUser)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <InputGroup>
                    <Label text={"Name"} />
                    <InputWrapper icon={<UserIcon />}>
                        <Input value={name} handleSetter={setName} type={"text"} placeHolderText={"Enter name"} />
                    </InputWrapper>
                </InputGroup>
                <InputGroup>
                    <Label text={"Age"} />
                    <InputWrapper icon={<CalendarIcon />}>
                        <Input value={age} handleSetter={(setAge)} type={"number"} placeHolderText={"Enter age"} />
                    </InputWrapper>
                </InputGroup>

                <InputGroup>
                    <Label text={"Role"} />
                    <InputWrapper cls={"select-wrapper"} icon={<SheildIcon />}>
                        <Select value={role} handleSetter={setRole} options={['admin', 'editor', 'user', 'moderator']}  />
                        <ChevronDown />
                    </InputWrapper>
                </InputGroup>
            </div>
            <Button dis={!name || !age || !role} icon={<PlusIcon />}  lebel={"Add New User"} cls='btn-primary btn-add' />
        </form>
    )
}

export default UserForm