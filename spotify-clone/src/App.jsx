import  { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const { audioRef, track, songsData } = useContext(PlayerContext);
  const audio=document.getElementById('aud')
  return (
    <div className='h-screen bg-black'>
      {
        songsData.length !==0
          ? <>
            <div className='h-[90%] flex'>
              <Sidebar />
              <Display />
            </div>
            <Player ad={audio} />
          </>
          : ""
      }

      <audio ref={audioRef} src={track?track.file:""} preload='auto' id='aud'></audio>
    </div>
  )
}

export default App
