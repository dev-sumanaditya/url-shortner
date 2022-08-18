import React, { useState } from 'react'

function App() {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  const openURL = () => {
    console.log('opening url in safari')
    if(isValidHttpUrl(value)) {
      setError('');
      window.open('safari-'+value)
    } else {
      setError('Enter a valid URL.');
    }
  }



  return (
    <div className="bg-teal-100 h-screen p-4">
        <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
          <h1 className='text-2xl text-center'>Enter Url to open in Safari</h1>
          <input className='px-6 py-3 text-xl border-2 rounded border-black/80 w-full md:w-1/3 ' value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Enter url" />
          <p className='text-red-500 font-bold text-lg'>{error}</p>
          <button onClick={openURL} className='px-10 py-3 bg-black hover:bg-black/80 duration-200 text-white uppercase rounded'>Open</button>
        </div>
    </div>
  );
}

export default App;
