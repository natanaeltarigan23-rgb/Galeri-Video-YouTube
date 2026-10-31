import { Avatar, Box, Card, CardActionArea, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'

export default function VideoCard({ video, isSaved, onSave, onOpen }) {
  return (
    <Card sx={{ bgcolor: 'transparent', overflow: 'visible' }}>
      <Box sx={{ position: 'relative' }}>
        <CardActionArea
          onClick={() => onOpen(video)}
          aria-label={`Lihat detail ${video.title}`}
          sx={{ borderRadius: 2, overflow: 'hidden' }}
        >
          <CardMedia
            component="img"
            image={video.image}
            alt={`Thumbnail ${video.title}`}
            sx={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', bgcolor: '#eeeeee' }}
          />
        </CardActionArea>
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            right: 9,
            bottom: 9,
            bgcolor: 'rgba(12, 12, 12, 0.86)',
            color: '#fff',
            px: 0.6,
            py: 0.2,
            fontWeight: 700,
            borderRadius: 0.6,
            fontSize: '0.72rem',
            pointerEvents: 'none',
          }}
        >
          {video.duration}
        </Typography>
        <Tooltip title={isSaved ? 'Hapus dari disimpan' : 'Simpan video'}>
          <IconButton
            onClick={() => onSave(video.id)}
            aria-label={isSaved ? `Hapus ${video.title} dari simpanan` : `Simpan ${video.title}`}
            size="small"
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              width: 36,
              height: 36,
              bgcolor: 'rgba(255,255,255,0.96)',
              color: isSaved ? 'primary.main' : 'text.primary',
              '&:hover': { bgcolor: '#fff' },
            }}
          >
            {isSaved ? <BookmarkRoundedIcon fontSize="small" /> : <BookmarkBorderRoundedIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', gap: 1.3, pt: 1.4, px: 0.2 }}>
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: video.avatar,
            color: video.avatarText,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {video.channel.slice(0, 1)}
        </Avatar>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <CardActionArea onClick={() => onOpen(video)} sx={{ borderRadius: 1 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: '0.94rem', fontWeight: 700, lineHeight: 1.48, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            >
              {video.title}
            </Typography>
          </CardActionArea>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.55, fontSize: '0.8rem' }}>
            {video.channel}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            {video.views} · {video.uploaded}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
