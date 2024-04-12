import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Carousel from '../../common/carousel';
import { samples } from './data';


export default function ExampleProjects({ posts }: any) {
    return (<Carousel posts={samples} />)
}