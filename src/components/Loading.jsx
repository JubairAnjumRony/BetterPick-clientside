import React from 'react';
import Lottie from 'react-lottie';
import LottieLoading from './../assets/Animation - 1739715100865.json'
const Loading = () => {
    return (
        // min-h-[calc(100vh-400px)]
        <div className=' flex justify-center items-center'>
            <Lottie className="h-[250px] md:h-[300px]" animationData={LottieLoading}/>
        </div>
    );
};

export default Loading;