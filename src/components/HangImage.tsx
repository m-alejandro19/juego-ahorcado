import img0 from '../assets/0.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';

// INTERFACE PARA ASIGNARLE TIPO DE DATO A LAS PROPS
interface Props{
    imageNumber: number;
}

export const HangImage = ({imageNumber}: Props) => {

    const images: string[] = [
        img0,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
    ];

    if (imageNumber >= 9){
        imageNumber = 9;
    }

    return (
        <>
            <img src={images[imageNumber]} 
                 alt="Hang img" 
                 style={{width:100}}
            />
        </>
    )   
}

export default HangImage;