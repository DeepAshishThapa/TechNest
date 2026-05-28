import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import postService from '../../Appwrite/post/api.js'
import MediaCard from '../card/Card.jsx';
import { Container, Box, CircularProgress } from '@mui/material';
import TagsButtons from './TagsButtons.jsx';
import { useNavigate, useParams } from 'react-router';


/**
 * AllpostsSection Component
 * ----------------------------------
 * This component fetches and displays all posts from the Appwrite database.
 * It shows a loading spinner while fetching and a list of MediaCard components when done.
 */
function AllpostsSection() {

    const [posts, setPosts] = useState([])             // Stores all fetched posts
    const [loading, setloading] = useState(true)        // Controls the loading spinner visibility
    const [selectedTag, setselectedTag] = useState('All')  //stores the current active tag
    const navigate = useNavigate()
    const { categorySlug } = useParams()

    const tags = [
        'All',
        'Career & Learning',
        'Project Building',
        'Roadmap',
        'Resume',
        'Web development',
        'AI & Data',
        'Remote Jobs',
        'Portfilio',
        'Job Search',
        'Cloud & Devops',
        'others'
    ]

    const normalizeTag = (value) => {
        return String(value || '')
            .trim()
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
    }

    const tagAliases = {
        all: ['all'],
        'career-learning': ['career-learning', 'career-jobs', 'career-and-learning', 'career-and-jobs'],
        'project-building': ['project-building'],
        roadmap: ['roadmap', 'roadmaps'],
        resume: ['resume', 'resumes'],
        'web-development': ['web-development'],
        'ai-data': ['ai-data', 'ai-and-data'],
        'remote-jobs': ['remote-jobs', 'remote-job'],
        portfolio: ['portfolio', 'portfilio'],
        'job-search': ['job-search', 'jobs-search'],
        'cloud-devops': ['cloud-devops', 'cloud-and-devops', 'cloud-devops'],
        others: ['others', 'other']
    }

    const displayByCanonical = {
        all: 'All',
        'career-learning': 'Career & Learning',
        'project-building': 'Project Building',
        roadmap: 'Roadmap',
        resume: 'Resume',
        'web-development': 'Web development',
        'ai-data': 'AI & Data',
        'remote-jobs': 'Remote Jobs',
        portfolio: 'Portfilio',
        'job-search': 'Job Search',
        'cloud-devops': 'Cloud & Devops',
        others: 'others'
    }

    const canonicalTag = (value) => {
        const normalized = normalizeTag(value)
        for (const [canonical, aliases] of Object.entries(tagAliases)) {
            if (aliases.includes(normalized)) return canonical
        }
        return normalized
    }


    // ---------- Fetch all posts once, filtering is done locally ----------
    useEffect(() => {
        async function fetchposts() {
            setloading(true)

            try {
                const res = await postService.getposts()

                if (res && res.rows) {
                    setPosts(res.rows)
                }
                else {
                    setPosts([]);
                }
            }
            finally {
                setloading(false)
            }

        }
        fetchposts();
    }, []);

    useEffect(() => {
        if (!categorySlug) return
        const canonical = canonicalTag(categorySlug)
        const display = displayByCanonical[canonical] || 'All'
        setselectedTag(display)
    }, [categorySlug])

    const filteredPosts = useMemo(() => {
        if (selectedTag === 'All') return posts
        const selectedCanonical = canonicalTag(selectedTag)
        return posts.filter((post) => {
            const postTags = Array.isArray(post.Tags) ? post.Tags : []
            return postTags.some((tag) => canonicalTag(tag) === selectedCanonical)
        })
    }, [posts, selectedTag])

    const handleTagChange = (tag) => {
        setselectedTag(tag)
        if (tag === 'All') {
            navigate('/all-posts')
            return
        }
        navigate(`/all-posts/${normalizeTag(tag)}`)
    }

    return (
        <>

            <Container maxWidth="md" sx={{ mt: 10 }}>

                {/* Tag buttons */}
                <TagsButtons
                    tags={tags}
                    selectedTag={selectedTag}
                    onTagChange={handleTagChange}
                />

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


                    ) : filteredPosts && filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <MediaCard key={post.$id} post={post} />
                        ))
                    ) : (
                        <div>NO POSTS FOUND</div>
                    )
                }
            </Container>


        </>
    )
}

export default AllpostsSection
