
import React from 'react'
import InputGroup from './UI/InputGroup'
import Label from './UI/Label'
import InputWrapper from './UI/InputWrapper'
import { CalendarIcon, ChevronDown, PlusIcon, SheildIcon, UserIcon } from './UI/icons/Icons'
import Input from './UI/Input'
import Button from './UI/Button'
import Select from './UI/Select'

const UserForm = () => {
    return (
        <form action="">
            <div className="form-row">
                <InputGroup>
                    <Label text={"Name"} />
                    <InputWrapper icon={<UserIcon />}>
                        {/* TODO: Add setter to the input */}
                        <Input type={"text"} placeHolderText={"Enter name"} />
                    </InputWrapper>
                </InputGroup>
                <InputGroup>
                    <Label text={"Age"} />
                    <InputWrapper icon={<CalendarIcon />}>
                        {/* TODO: Add setter to the input */}
                        <Input type={"number"} placeHolderText={"Enter age"} />
                    </InputWrapper>
                </InputGroup>

                <InputGroup>
                    <Label text={"Role"} />
                    <InputWrapper cls={"select-wrapper"} icon={<SheildIcon />}>
                        {/* TODO: Add setter to the input */}
                        <Select options={['admin', 'editor', 'user', 'moderator']}  />
                        <ChevronDown />
                    </InputWrapper>
                </InputGroup>
            </div>

            {/* TODO: Add onClick event to the button */}
            <Button icon={<PlusIcon />}  lebel={"Add New User"} cls='btn-primary btn-add' />
        </form>
    )
}

export default UserForm