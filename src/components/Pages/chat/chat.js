import React, { useState ,useEffect} from 'react';

const Chat = (props) => {
  const [chatText, setChatText] = useState('');
  const [chat,setchat]=useState(props.chat);
  const handleInputChange = (e) => {
    setChatText(e.target.value);
  };
  const mangaId = props.mangaid; // Replace with the actual manga ID
  const urlId = props.urlid; // Replace with the actual URL ID
  const manganame = props.manganame;
  function mangaread({mangaId,urlId})
  {
    const apiUrl = `https://universe-tau.vercel.app/api/manga`;

    // Assuming mangaId is the ID you want to search for
   
    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((newData) => {
        // Find the manga with the specified ID
        const mangaWithId = newData.find((manga) => manga._id === mangaId);
    
        if (mangaWithId) {
          // Update the state with the manga data
          const chatinfo = mangaWithId.url.find((url) => url._id === urlId);
          console.log(chatinfo)
          setchat(chatinfo.chat);
        } else {
          console.log(`Manga with ID ${mangaId} not found`);
        }
      })
      .catch((error) => {
        // Handle errors
        console.log('Error:', error);
      });
    
    
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
   
    
      const response = await fetch(`https://universe-tau.vercel.app/api/manga/${mangaId}/url/${urlId}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: props.data.message.name, text: chatText,email:props.data.message.email }),
      });
  
      if (response.ok) {
        
      
        mangaread({mangaId,urlId});
    
        
      } else {
        console.error('Failed to submit chat message');
        // Optionally, you can handle errors, update UI, etc.
      }
    } catch (error) {
      console.error('Error submitting chat message:', error);
    }
  
    // Clear the chat input after submission
    setChatText('');
  };

  useEffect(() => {
    // Initial call
    mangaread({ mangaId, urlId });

    // Set up interval to call mangaread every 20 seconds
    const intervalId = setInterval(() => {
      mangaread({ mangaId, urlId });
    }, 2000); 

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);









  

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" style={{ color: 'white' }}>
              Write Something about your experience ;)
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={chatText}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className='my-3'>Submit</button>
          </div>
        </form>
      </div>
      <div style={{marginTop:'10rem'}}>
        {chat.map((message, index) => (
          <div key={index} className="chat-container" style={{background:message.email===props.data.message.email?'black':'white'}}>
            <img src="https://i.imgur.com/hCtqhTz.png" alt="Avatar" style={{ width: '100%' }} />
            <h4 style={{color:message.email===props.data.message.email?'white':'black'}}>{message.user}</h4>
            <p style={{color:message.email===props.data.message.email?'white':'black'}}>{message.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chat;
