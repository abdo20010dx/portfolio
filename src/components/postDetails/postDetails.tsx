
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material';
import { ThumbDownAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import { styles } from '../../shared/styles';
//https://www.facebook.com/dialog/share?app_id=87741124305&href=https%3A%2F%2Fshiner-suited-only.ngrok-free.app%2FpostDetails%2F5357&display=popup
import { useParams } from "react-router-dom";
import { projects } from '../live-projects/data';
import { samples } from '../exmaple-projects/data';
const allData = [...projects, ...samples]
export default function PostDetails() {

    const { postId = 1 } = useParams();
    const post = allData.find(element => element.id == +postId)


    return (
        <>
            <CssBaseline />
            <Box sx={{ "paddingRight": "1em", "paddingLeft": "1em" }}>
                <Card>

                    <CardContent>

                        <Typography href={post?.websiteUrl} component={"a"} sx={styles.source} variant='h4' display='block'>{post?.title}</Typography>
                    </CardContent>


                    <CardContent>

                        <Typography sx={styles.source} fontWeight={"bolder"} variant='h6' display='block'>
                            {post?.content}
                        </Typography>
                        {/* <Link href="" height="15rem" >
                            <CardMedia
                                sx={{ height: "inherit", objectFit: "fill" }}
                                component="img"
                                src={post.image_url}

                            />
                        </Link> */}
                        {/* <Typography sx={styles.source} variant='h6' display='block'>

                            {content[1]}
                            {content[2]}
                        </Typography> */}

                    </CardContent>

                    {post?.image_url.map(image => (
                        <>
                            <CardMedia
                                sx={styles.imageDetais}
                                component="img"
                                image={image}
                                alt={post?.title}
                            />
                            <br />
                        </>

                    ))}
                </Card>
            </Box>
        </>
    );
}
