const video=document.getElementById('webcam');
const lineView=document.getElementById('lineView');
const demoSection=document.getElementById('demos');
const DEBUG =false;

const bodyPixProperties ={
    architecture: 'MobiNetV1',
    outputstride: 16,
    multiplier : 0.75,
    quanBytes: 4
};
const segmentationParameters ={
    flipHorizontal: false,
    internalResolution: 'high',
    segmentationThreshold : 0.9,
    scoreThreshold: 0.2
};
function processSegmentation(canvas,segmentation){
    var ctx = canvas.getContext('2d');
    console.log(segmentation)
    //get the data to estimate the background 
    var imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
    var data=image.data;

    //Get data from live webcam 
    var liveData=video
};
