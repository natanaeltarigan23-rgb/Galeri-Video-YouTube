import { useState } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Container, Drawer, IconButton, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Toolbar, Typography, Dialog } from '@mui/material'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const drawerWidth = 224

export default function AppLayout({ children, query, setQuery }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const isSavedPage = location.pathname === '/saved'

  const links = [
    { label: 'Beranda', path: '/', icon: <HomeRoundedIcon /> },
    { label: 'Disimpan', path: '/saved', icon: isSavedPage ? <BookmarkRoundedIcon /> : <BookmarkBorderRoundedIcon /> },
  ]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#ffffff', color: 'text.primary', borderBottom: '1px solid #eeeeee' }}>
        <Toolbar sx={{ minHeight: { xs: '64px !important', sm: '70px !important' }, px: { xs: 2, sm: 3 } }}>
          <Box component={RouterLink} to="/" aria-label="Tonton, kembali ke beranda" sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: 'inherit', textDecoration: 'none', minWidth: { sm: 180, md: 230 } }}>
            <Box sx={{ width: 33, height: 26, bgcolor: 'primary.main', borderRadius: 1.3, display: 'grid', placeItems: 'center', color: '#fff' }}>
              <PlayArrowRoundedIcon sx={{ fontSize: 24 }} />
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.06em' }}>tonton</Typography>
          </Box>
          <Box sx={{ flex: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', px: 2 }}>
            <TextField
              size="small"
              placeholder="Cari video..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              inputProps={{ 'aria-label': 'Cari video' }}
              sx={{ width: '100%', maxWidth: 520, '& .MuiOutlinedInput-root': { bgcolor: '#fafafa' } }}
              InputProps={{ startAdornment: <InputAdornment position="start"><SearchRoundedIcon fontSize="small" color="action" /></InputAdornment> }}
            />
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton onClick={() => setShowMobileSearch(true)} aria-label="Buka pencarian" sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
              <SearchRoundedIcon />
            </IconButton>
            <Avatar sx={{ width: 34, height: 34, bgcolor: '#e9ecf4', color: '#465b86', fontSize: 14, fontWeight: 700 }}>T</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: 70,
            height: 'calc(100% - 70px)',
            px: 1.5,
            pt: 2.2,
            borderRight: '1px solid #eeeeee',
          },
        }}
      >
        <List sx={{ p: 0 }}>
          {links.map((link) => (
            <ListItemButton
              key={link.path}
              component={RouterLink}
              to={link.path}
              selected={location.pathname === link.path}
              sx={{ mb: 0.5, borderRadius: 2, color: '#242424', '&.Mui-selected': { bgcolor: '#f2f2f2' }, '&.Mui-selected:hover': { bgcolor: '#ebebeb' } }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: 14, fontWeight: location.pathname === link.path ? 700 : 500 }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: 'auto', px: 1.8, pb: 3 }}>
          <Typography variant="caption" color="text.secondary">Tonton · Demo frontend</Typography>
        </Box>
      </Drawer>

      <Box component="main" sx={{ ml: { xs: 0, md: `${drawerWidth}px` }, pb: { xs: 9, md: 4 } }}>
        <Toolbar sx={{ minHeight: { xs: '64px !important', sm: '70px !important' } }} />
        <Container maxWidth="xl" sx={{ py: { xs: 3, md: 3.5 }, px: { xs: 2, sm: 3, lg: 4 } }}>
          {children}
        </Container>
      </Box>

      <Paper elevation={0} sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: (theme) => theme.zIndex.appBar, borderTop: '1px solid #eeeeee' }}>
        <BottomNavigation
          showLabels
          value={isSavedPage ? '/saved' : '/'}
          onChange={(_, value) => navigate(value)}
          sx={{ height: 66, '& .Mui-selected': { color: 'primary.main' }, '& .MuiBottomNavigationAction-label': { fontSize: 12 } }}
        >
          <BottomNavigationAction label="Beranda" value="/" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="Disimpan" value="/saved" icon={isSavedPage ? <BookmarkRoundedIcon /> : <BookmarkBorderRoundedIcon />} />
        </BottomNavigation>
      </Paper>

      <Dialog open={showMobileSearch} onClose={() => setShowMobileSearch(false)} fullWidth maxWidth="sm" sx={{ '& .MuiDialog-container': { alignItems: 'flex-start' }, '& .MuiDialog-paper': { mt: 1.5, mx: 1.5, width: 'calc(100% - 24px)' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5 }}>
          <TextField
            autoFocus
            fullWidth
            size="small"
            placeholder="Cari video..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => { if (event.key === 'Enter') setShowMobileSearch(false) }}
            inputProps={{ 'aria-label': 'Cari video' }}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchRoundedIcon fontSize="small" color="action" /></InputAdornment> }}
          />
          <IconButton onClick={() => setShowMobileSearch(false)} aria-label="Tutup pencarian"><CloseRoundedIcon /></IconButton>
        </Box>
      </Dialog>
    </Box>
  )
}
