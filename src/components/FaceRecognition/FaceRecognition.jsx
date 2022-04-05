import styled from 'styled-components'

export default function FaceRecognition({ imageUrl, bounding}) {

    const ImageBox = styled.div`
        max-width: 500px;
        margin: 1rem auto;
        position: relative;
        

        img {
            max-width: 100%;
            border-radius: 10px;
            filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.52));
        }

        div {
            position: absolute;
            top: ${bounding.top_row}px;
            left: ${bounding.left_col}px;
            right: ${bounding.right_col}px;
            bottom: ${bounding.bottom_row}px;
            border: 2px solid rgb(0, 203, 253);
        }

        @media (max-width: 500px) {
            img {
                padding: 2%;
            }
        }
    `


    return (
        <ImageBox  >
            <img src={imageUrl} alt='' id='image'/>
            <div id='faceBox'></div>
        </ImageBox >
        
    )
}