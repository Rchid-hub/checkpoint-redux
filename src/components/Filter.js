import React from 'react'
import "../App.css";

const Filter = ({setDone, setUndone}) => {
    return (
        <div className="checks">
<input type="checkbox" id="done" name="done" value=""
onChange={(e)=>setDone(e.target.value)}
/>
<label for="done"> Done</label>
<input type="checkbox" id="pending" name="pending" value=""
onChange={(e)=>setUndone(e.target.value)}
/>
<label for="pending">Pending</label>
</div>
    );
}

export default Filter;
