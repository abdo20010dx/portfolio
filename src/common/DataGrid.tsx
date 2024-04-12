"use client"

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import { Badge, Link } from '@mui/material';
import { ThumbDownAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material';
import { useState } from 'react';
import { CardData } from './Card';
import { styles } from '../shared/styles';

const newsImage = `https://img.freepik.com/premium-vector/breaking-news-template-with-3d-red-blue-badge-breaking-news-text-dark-blue-with-earth-world-map-background_34645-1113.jpg`
interface CardParams {
    post: CardData
    key: any
    lg?: number
    height?: string
    md?: number
    sm?: any
    xs?: any
}

export function DataGrid({ post: thePost, key, lg = 4, height = "250rem", md = 4, sm = 6, xs = 12 }: Readonly<CardParams>) {

    const [post, setPost] = useState(thePost)



    return (

        <Grid display={'grid'} xs={xs} sm={sm} md={md} lg={lg} key={key} >
            <Card elevation={20} >
                <CardContent >
                    {/* <Image style={styles.newsLogo} src={post.sourceLogo} alt='logo' width={10} height={10} /> */}
                </CardContent>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.title}
                // subheader={post.title}
                />
                {/* <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {post.content}
                    
                    </Typography>
                </CardContent> */}
                <Link
                    href={"/portfolio/#/postDetails/" + post.id}
                >
                    <CardMedia
                        sx={{ objectFit: "fill" }}
                        component="img"
                        height={height}
                        image={post.image_url ?? newsImage}
                        alt={post.title}
                    />
                </Link>

            </Card>
        </Grid>
    )
}