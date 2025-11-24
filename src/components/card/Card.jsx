import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

} from '@mui/material';

import postService from '../../Appwrite/post/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import parse from 'html-react-parser';
import authService from '@/Appwrite/auth/auth';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';



/**
 * MediaCard Component
 * --------------------------------------------------
 * Displays a single post in a styled MUI Card.
 * Shows:
 *  - Featured image (fetched from Appwrite Storage)
 *  - Post title
 *  - Short preview of post content (3-line clamp)
 *  - "Learn More" button that navigates to full post
 */


export default function MediaCard({ post }) {
  const [imgUrl, setImgUrl] = useState("");      // holds the Appwrite file preview URL
  const navigate = useNavigate()                 // to navigate to detailed post page
  const [userName, setuserName] = useState("")
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);    // delete confirm dialog

  const userData = useSelector((state) => state.auth.userData)

  // Open / Close confirmation dialog
  const handleOpenDeleteDialog = () => setOpenDeleteDialog(true);
  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false);


  const isAuthor = post && userData ? post.userid === userData.$id : false;


  // Delete the post (and its file), then navigate away
  const deletepost = () => {
    setOpenDeleteDialog(false);
    postService.deletepost(slug).then((status) => {
      if (status) {
        postService.deletefile(post.featuredImage)
        navigate("/all-posts")
      }
    })

  }


  // ---------- Fetch featured image preview URL ----------
  useEffect(() => {
    let cancelled = false;

    // async IIFE to fetch preview URL for post image
    (async () => {
      const url = await postService.getfilepreview(post.featuredImage);
      if (!cancelled) setImgUrl(url);
    })();


    // cleanup function to prevent memory leaks
    return () => { cancelled = true; };
  }, [post.featuredImage]);



  return (
    <Card
      elevation={8}
      sx={{
        maxWidth: '100%',
        mb: 10,
        px: 1,
        py: 2,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },




      }}>
      {/*show the edit and delete button*/}
      {isAuthor && (
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>

          <Link to={`/edit-post/${post.$id}`}>
            <Button sx={{ backgroundColor: '#1d0a3d', color: 'white' }}>
              Edit
            </Button>
          </Link>

          <Button
            variant="contained"
            color="error"
            onClick={handleOpenDeleteDialog}
          >
            Delete
          </Button>
        </Box>
      )}
      <CardMedia
        component="img"
        sx={{
          height: 400,
          objectFit: 'cover',

        }}
        image={imgUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{
            color: 'text.secondary',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,

          }}>
          {parse(post.content || '')}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          gap: 5,
          alignItems: "center",
          px: 2,
        }}
      >

        <Button
          size="small"
          sx={{ backgroundColor: "#1d0a3d", color: 'white' }}
          onClick={() => { navigate(`/post/${post.$id}`) }}
        >
          Learn More
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }} />
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: 900 }}
          >
            {post.userName}

          </Typography>



        </Box>


      </CardActions>


      {/* ===== Delete Confirmation Dialog ===== */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          {"Are you sure you want to delete this post?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            This action cannot be undone. The post and its image will be
            permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={deletepost}
            color="error"
            variant="contained"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </Card>



  );
}
