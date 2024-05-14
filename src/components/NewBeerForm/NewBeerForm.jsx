import { useState } from 'react';

export default function NewBeerForm({ addBeer }) {
    const [newBeer, setNewBeer] = useState({
        name: '',
        imgSrc: '',
        style: '',
        tastingNotes: '',
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        addBeer(newBeer);
      }

function handleChange(evt) {
    setNewBeer({ ...newBeer, [evt.target.name]: evt.target.value });
  }

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                    <option value="styles[0]">Ale</option>
                    <option value="styles[1]">Brown Ale</option>
                    <option value="styles[2]">Golden Ale</option>
                    <option value="styles[3]">IPA</option>
                    <option value="styles[4]">Lager</option>
                    <option value="styles[5]">Pale Ale</option>
                    <option value="styles[6]">Porter</option>
                    <option value="styles[7]">Pilsner</option>
                    <option value="styles[8]">Sour</option>
                    <option value="styles[9]">Stout</option>
                    <option value="styles[10]">Strong Ale</option>
                    <option value="styles[11]">Trappist</option>
                    <option value="styles[12]">Wheat</option>
                </select>
                <input
                    name="tastingNotes"
                    value={newBeer.tastingNotes}
                    onChange={handleChange}
                    placeholder="Tasting Notes"
                    required
                />

                <button type="submit">Add Beer</button>
            </form>
        </>
    );
}
