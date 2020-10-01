import React from 'react'
import { useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
    const { active: note } = useSelector(state => state.notes)
    return (
        <div className="notes_main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some amazing text"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://www.w3schools.com/w3css/img_mountains.jpg"
                        alt="imagen"
                    />
                </div>
            </div>

        </div>
    )
}
