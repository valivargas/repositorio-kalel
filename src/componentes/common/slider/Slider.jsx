import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = () => {
    const [slider, setSlider] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        axios.get('https://api.kalelsac.com/api/web/slider/')
            .then(res => setSlider(res.data));
    }, []);

    const maxSteps = slider.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        

        
        <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '1200px' }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    style={{ maxWidth: '100%', overflow: 'hidden' }}
                >
                    {slider.map((step, index) => (
                        <div key={index}>
                            <img
                                src={step.imagen_principal}
                                alt={step.label}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <Typography>{step.label}</Typography>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={maxSteps === 0}
                        >
                            
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={maxSteps === 0}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        
                        </Button>
                    }
                />
            </Box>
        </Box>
    
    );
};

export default Slider;
