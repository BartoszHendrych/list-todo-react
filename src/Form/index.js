import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent.trim() === "") {
            return;
        };
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input className="form__item" 
                value={newTaskContent}
                autoFocus placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;