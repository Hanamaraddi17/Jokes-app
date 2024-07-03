import React from 'react';
const Joke = ({setup,punchline})=>{
    return(
        <>
        <div style={{margin:'10px',padding: '10px',border:'2px solid #ccc'}}>
            <p style={{color:'blue',fontSize:'20px'}}><strong>Setup :  </strong>{setup}</p>
            <p style={{color:'black',fontSize:'20px'}}><strong>punchline :  </strong>{punchline}</p>
        </div>
        </>
    )
};
export default Joke;