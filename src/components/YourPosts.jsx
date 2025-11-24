
import { useEffect, useState } from 'react'
import postService from '@/Appwrite/post/api'
import { useSelector } from 'react-redux'
import { CircularProgress,Box } from '@mui/material'
import MediaCard from './card/Card'

function YourPosts() {
    const [YourPosts, setYourPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const [loading, setloading] = useState(true)


    useEffect(() => {
        if (!userData) {
            return;
        }

        const getyourposts = async () => {
            setloading(true)
            const result = await postService.getyourposts(userData.$id)
            if (result) {
                setYourPosts(result.rows)
            }
        }

        getyourposts();

        setloading(false)


    }, [userData])


    return (
        <>
            {
                loading ? (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '60vh',
                    }}>
                        <CircularProgress />


                    </Box>
                ) : YourPosts.length > 0 ? (
                    YourPosts.map((post) => (
                        <MediaCard key={post.$id} post={post} />
                    ))
                ) : (
                    <div>You haven't posted yet</div>
                )



            }


        </>
    )
}

export default YourPosts
