# Floating Capsule Character Controller

[![Video](https://img.youtube.com/vi/7h4ydBeryK8/0.jpg)](https://www.youtube.com/watch?v=7h4ydBeryK8)

Simple web based character controller build on [react-three-fiber](https://github.com/pmndrs/react-three-fiber) and [react-three-rapier](https://github.com/pmndrs/react-three-rapier). It provides a playground demo where you can experience the following features:

1. Seamless movement over small obstacles
2. Enhanced control with floating force incorporating spring and damping forces
3. Rigidbody character functionality for interaction with the game environment
4. Customizable ground friction for tailored control
5. Realistic simulation with applied mass on supporting surfaces
6. Smooth integration with moving and rotating platforms

## New Features

### (2023-08-10) Camera Enhancement:
- Collision detection 
- Zoom in/out capability 
- Expanded movement range 
- Improved tracking smoothness

### (2023-07-27) Character Auto Balance:
- Character tilts forward/backward while in motion
- Automatically returns to upright position after a hit or attack
- Stability customization: Users can fine-tune the balance sensitivity to match their gameplay style

## Project Link

Live Demo: [Floating Capsule Character Controller](https://character-control.vercel.app/)

## Setup

Download [Node.js](https://nodejs.org/en/download). Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Next Steps

As I continue to improve and expand the Floating Capsule Character Controller, here are some next steps I am considering:

1. Adding a dust effect triggered by character movement or jumps
2. Developing a character animation state machine for seamless animation transitions

## Contributions

I appreciate your interest in this project! If you have any feedback, suggestions, or resources related to the controller or the next steps, please feel free to share. 

Thank you!
