const clientId = '66d9d5b9c29b4215bfd7adc0f269236c';
const clientSecret = 'f0ac6e1b071d4ac286745020e2d8b4b4';

const getAPIKey = async () => 
{
  try
  {
    const response = await fetch('https://accounts.spotify.com/api/token', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
      },
      body: 'grant_type=client_credentials'
    });
    if(response.ok)
    {
      const jsonResponse = await response.json();
      const token = await jsonResponse.access_token;
      console.log(token);
      return token;
    }
    throw new Error('Request for access token failed!');
  }
  catch(error) 
  {
    console.error(error);
    throw error;
  }
}


const postPlaylist = async (Key) => 
{
  try
  {
    const response = await fetch('https://api.spotify.com/v1/users/31unsoolebywaboz52u5bf7zn7r4/playlists',
    {
      method: 'POST',
      headers:
      {
        'Authorization': 'Bearer ' + Key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'New Playlist',
        description: 'New playlist description',
        public: false
      })
    });
    if (response.ok) {
      const playlistData = await response.json();
      console.log('Playlist created:', playlistData);
    } else {
      if(response.status === 403)
      {
        {
          return response.json().then(errorData => {
            console.error('403 Forbidden:', errorData);
            throw new Error('Forbidden: ' + errorData.message);
          });
        }
      }
      console.error('Failed to create playlist:', response.status, response.statusText);
      throw new Error('Playlist creation failed!');
    }
  }
  catch(error)
  {
    console.error(error);
    throw error;
  }
}


const createPlaylist = async () => 
{
  try
  {
    const accessToken = await getAPIKey();
    await postPlaylist(accessToken);
  } catch (error) {
    console.error(error);
  }
}


export {clientId, clientSecret, getAPIKey, postPlaylist, createPlaylist};