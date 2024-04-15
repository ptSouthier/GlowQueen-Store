import Image from 'next/image';
import logoBackground from '@/src/assets/images/homepage-logo-background.png';
import womanPortrait from '@/src/assets/images/homepage-woman-portrait.png';
 
export default function HomepageBackground() {
  return (
    <div className='flex flex-wrap justify-between bgContainer'>
      <div className='bgWrap'>
        <Image
          alt="GlowQueen watermark background"
          src={ logoBackground }
          />
      </div>
      <div className='womanPortraitWrap'>
        <Image
          alt="Woman with impeccable skin"
          src={ womanPortrait }
        />
      </div>
    </div>
  );
};
