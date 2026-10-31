import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, IconButton, Typography } from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

export default function VideoDialog({ video, onClose, isSaved, onSave }) {
  if (!video) return null

  return (
    <Dialog open={Boolean(video)} onClose={onClose} maxWidth="sm" fullWidth aria-labelledby="video-dialog-title">
      <Box sx={{ position: 'relative' }}>
        <Box component="img" src={video.image} alt={video.title} sx={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.12)', pointerEvents: 'none' }}>
          <Box sx={{ display: 'grid', placeItems: 'center', width: 64, height: 64, borderRadius: '50%', bgcolor: 'rgba(0,0,0,0.75)', color: '#fff' }}>
            <PlayArrowRoundedIcon sx={{ fontSize: 38 }} />
          </Box>
        </Box>
        <IconButton aria-label="Tutup detail" onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10, bgcolor: 'rgba(255,255,255,.96)', '&:hover': { bgcolor: '#fff' } }}>
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent sx={{ pt: 2.5 }}>
        <Typography id="video-dialog-title" variant="h6">{video.title}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mt: 2, mb: 2 }}>
          <Avatar sx={{ width: 34, height: 34, bgcolor: video.avatar, color: video.avatarText, fontWeight: 700, fontSize: 14 }}>
            {video.channel.slice(0, 1)}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight={700}>{video.channel}</Typography>
            <Typography variant="caption" color="text.secondary">{video.views} · {video.uploaded}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Ini adalah contoh antarmuka detail video. Pemutaran video tidak tersedia pada demo frontend ini.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2.5, pt: 0 }}>
        <Button onClick={onClose} color="inherit">Tutup</Button>
        <Button
          variant="contained"
          onClick={() => onSave(video.id)}
          startIcon={isSaved ? <BookmarkRoundedIcon /> : <BookmarkBorderRoundedIcon />}
        >
          {isSaved ? 'Tersimpan' : 'Simpan video'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
