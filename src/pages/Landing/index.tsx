import { NavBar } from '../../components/NavBar';
import { Comment } from '../../components/shared/Comment';
import avatar from '../../assets/avatar.jpg';
import { navBarList, sliderImages, socialMediaList } from './data';
import './index.css';
import { Reply } from '../../components/shared/Reply';
import { Slider } from '../../components/Slider';

export const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='landing-hero'>
        <div className='landing-width'>
          <NavBar items={navBarList} socialLinks={socialMediaList} />
          <div className='landing-text-container landing-hero-container'>
            <h1 className='landing-title'>the best products start with Dash</h1>
            <p className='landing-text'>
              Get the best designs that will help you reach your goal of
              achieving your product.
            </p>
          </div>
        </div>
      </div>
      <div className='landing-comments landing-width'>
        <div className='landing-text-container'>
          <h1 className='landing-title'>Customer Comments</h1>
          <p className='landing-text'>Share your feedback with us</p>
        </div>
        <div className='landing-comments-container'>
          <div className='landing-comments-section'>
            <Comment avatar={avatar} />
            <Comment avatar={avatar} />
            <Reply avatar={avatar} />
          </div>
          <div className='landing-comments-slider'>
            <Slider items={sliderImages} />
          </div>
        </div>
      </div>
      <div className='landing-product landing-width'>products</div>
      <div className='landing-footer'>footer</div>
    </div>
  );
};
