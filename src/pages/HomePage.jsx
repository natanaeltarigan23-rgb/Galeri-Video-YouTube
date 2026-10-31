import { useMemo, useState } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded'
import VideoGrid from '../components/VideoGrid'
import { categories, videos } from '../data/videos'

export default function HomePage({ query, savedIds, onSave, onOpen }) {
  const [category, setCategory] = useState('Semua')
  const filteredVideos = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    return videos.filter((video) => {
      const categoryMatches = category === 'Semua' || video.category === category
      const searchMatches = `${video.title} ${video.channel} ${video.category}`.toLowerCase().includes(keyword)
      return categoryMatches && searchMatches
    })
  }, [category, query])

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2.5 }}>Beranda</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflowX: 'auto', pb: 1.2, mb: 2.3, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
        {categories.map((item) => (
          <Chip
            key={item}
            label={item}
            clickable
            onClick={() => setCategory(item)}
            sx={{ flexShrink: 0, bgcolor: item === category ? '#202020' : '#f2f2f2', color: item === category ? '#ffffff' : '#292929', '&:hover': { bgcolor: item === category ? '#202020' : '#e9e9e9' } }}
          />
        ))}
      </Box>
      {filteredVideos.length > 0 ? (
        <VideoGrid videos={filteredVideos} savedIds={savedIds} onSave={onSave} onOpen={onOpen} />
      ) : (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <SearchOffRoundedIcon sx={{ fontSize: 48, color: '#aaaaaa', mb: 1 }} />
          <Typography variant="h6">Video tidak ditemukan</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>Coba kata kunci atau kategori lainnya.</Typography>
        </Box>
      )}
    </Box>
  )
}
