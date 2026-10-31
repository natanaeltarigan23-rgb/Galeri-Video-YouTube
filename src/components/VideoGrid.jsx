import { Grid } from '@mui/material'
import VideoCard from './VideoCard'

export default function VideoGrid({ videos, savedIds, onSave, onOpen }) {
  return (
    <Grid container spacing={{ xs: 3, sm: 2.5, lg: 3 }}>
      {videos.map((video) => (
        <Grid key={video.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <VideoCard
            video={video}
            isSaved={savedIds.includes(video.id)}
            onSave={onSave}
            onOpen={onOpen}
          />
        </Grid>
      ))}
    </Grid>
  )
}
