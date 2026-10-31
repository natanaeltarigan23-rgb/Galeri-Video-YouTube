import { Box, Button, Typography } from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded'
import { Link as RouterLink } from 'react-router-dom'
import VideoGrid from '../components/VideoGrid'
import { videos } from '../data/videos'

export default function SavedPage({ query, savedIds, onSave, onOpen }) {
  const keyword = query.trim().toLowerCase()
  const savedVideos = videos.filter((video) => savedIds.includes(video.id))
  const filteredVideos = savedVideos.filter((video) => `${video.title} ${video.channel} ${video.category}`.toLowerCase().includes(keyword))

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 0.75 }}>Video disimpan</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3.5 }}>
        {savedVideos.length} video dalam koleksi kamu
      </Typography>
      {filteredVideos.length > 0 ? (
        <VideoGrid videos={filteredVideos} savedIds={savedIds} onSave={onSave} onOpen={onOpen} />
      ) : (
        <Box sx={{ textAlign: 'center', pt: { xs: 8, md: 12 }, pb: 8 }}>
          {savedVideos.length === 0 ? (
            <>
              <BookmarkBorderRoundedIcon sx={{ fontSize: 54, color: '#aaaaaa', mb: 1.5 }} />
              <Typography variant="h6">Belum ada video disimpan</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2.5 }}>
                Tekan ikon simpan pada video yang kamu suka.
              </Typography>
              <Button component={RouterLink} to="/" variant="contained">Jelajahi video</Button>
            </>
          ) : (
            <>
              <SearchOffRoundedIcon sx={{ fontSize: 48, color: '#aaaaaa', mb: 1 }} />
              <Typography variant="h6">Video tidak ditemukan</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Tidak ada video yang cocok dengan pencarian.
              </Typography>
            </>
          )}
        </Box>
      )}
    </Box>
  )
}
