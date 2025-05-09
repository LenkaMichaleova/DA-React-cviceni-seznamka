import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className='image'>
          <img className='photo' src="./photo.jpg" alt="fotka" />
          <img className='dislike' src="./cross.jpeg" alt="dislike" />
          <img className='like' src="./heart.png" alt="like" />
          
        </div>
        <div className='name-age'>
          <h1 className='name'>Fester A.</h1>
          <h3 className='age'>Age: ???</h3>
        </div>
      </header>
      <main>
        <div>
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe dicta quo tempore? Laborum tempora distinctio porro qui aspernatur impedit sapiente ad odit vero saepe! 
            <div className='read-more'>Read More...</div>
          </p>
        </div>
        <div>
          <h3>Interests</h3>
          <div className='interests'>
            <div id="i1" className='interest'>Explosives</div>
            <div id="i2" className='interest'>Arson</div>
            <div id="i3" className='interest'>Curios</div>
            <div id="i4" className='interest'>Howling</div>
            <div id="i5" className='interest'>Scary Movies</div>
            <div id="i6" className='interest'>Gardening</div>
          </div>
        </div>
      </main>
    </div>
  );
};
