import { useState, useEffect } from 'react';
import './NewBeerForm.css';

export default function NewBeerForm({ addBeer, styles }) {
    const [newBeer, setNewBeer] = useState({
        name: '',
        imgSrc: '',
        style: '',
        tastingNotes: '',
    });

    useEffect(() => {
        if (styles.length) newBeer.style = styles[0]._id;
    }, [styles])

    function handleAddBeer(evt) {
        evt.preventDefault();
        addBeer(newBeer);
    }

    function handleChange(evt) {
        setNewBeer({ ...newBeer, [evt.target.name]: evt.target.value });
    }

    const styleOptions = styles.map((s) => <option value={s._id} key={s._id}>{s.name}</option>);
    
    return (
        <>
            <form onSubmit={handleAddBeer} className='newbeerform'>
                <input
                    name="name"
                    value={newBeer.name}
                    onChange={handleChange}
                    placeholder="Beer Name"
                    required
                />
                <input
                    name="imgSrc"
                    value={newBeer.imgSrc}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                />
                <select
                    name="style"
                    value={newBeer.style}
                    onChange={handleChange}
                    placeholder="Style"
                    required
                >
                    {styleOptions}
                </select>
                <input
                    name="tastingNotes"
                    value={newBeer.tastingNotes}
                    onChange={handleChange}
                    placeholder="Tasting Notes"
                    required
                />

                <button className="button" type="submit">Add Beer</button>
            </form>
        </>
    );
}
