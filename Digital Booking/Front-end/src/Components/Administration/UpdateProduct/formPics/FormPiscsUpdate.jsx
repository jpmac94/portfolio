import React, { useState } from 'react'

export default function FormPiscsUpdate(props) {
    const { handleAddItem } = props;

    const [url, setUrl] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        setUrl("");

        handleAddItem({
            original: url,
            thumbnail: url

        });

    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="todo-list">
                    <div className="file-input">
                        <>
                            <input
                                type="text"
                                className="text"
                                value={url}
                                onChange={e => setUrl(e.target.value)}
                            />

                            <button
                                className="Bpink"
                                disabled={url ? "" : "disabled"}
                            >
                                Add
                            </button>
                        </>

                    </div>

                </div>
            </form>

        </>
    )
}
