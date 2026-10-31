import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import VideoDialog from './components/VideoDialog'
import HomePage from './pages/HomePage'
import SavedPage from './pages/SavedPage'

function getInitialSavedIds() {
  try {
    const stored = JSON.parse(window.localStorage.getItem('tonton-saved-videos') || '[]')
    return Array.isArray(stored) ? stored.filter((id) => Number.isInteger(id)) : []
  } catch {
    return []
  }
}

export default function App() {
  const [query, setQuery] = useState('')
  const [savedIds, setSavedIds] = useState(getInitialSavedIds)
  const [openedVideo, setOpenedVideo] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem('tonton-saved-videos', JSON.stringify(savedIds))
    } catch {
      return
    }
  }, [savedIds])

  function toggleSave(id) {
    setSavedIds((previous) => previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id])
  }

  const sharedProps = { query, savedIds, onSave: toggleSave, onOpen: setOpenedVideo }

  return (
    <>
      <AppLayout query={query} setQuery={setQuery}>
        <Routes>
          <Route path="/" element={<HomePage {...sharedProps} />} />
          <Route path="/saved" element={<SavedPage {...sharedProps} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
      <VideoDialog
        video={openedVideo}
        onClose={() => setOpenedVideo(null)}
        isSaved={openedVideo ? savedIds.includes(openedVideo.id) : false}
        onSave={toggleSave}
      />
    </>
  )
}
