import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <div className="container flexing">
          <div>
            <p className="logo">K. Griffith</p>
          </div>
          <div>
            <a href="#appearance">APPEARANCES</a>
            <a href="#">BOOKS</a>
            <a href="#">NEWS</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
        <hr />
        <div className="headerOfBottom">
          <img
            src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_298,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg"
            alt=""
            className="image"
          />
          <div>
            <p className="nameTitle">Kayla Griffith</p>
            <p className="priceTitle">Award Winning Author</p>
          </div>
        </div>
      </header>
      <section id="sectionFirst">
        <div className="container">
          <div className="row exact">
            <div>
              <h1 className="mainWord">The Swan Isle</h1>
              <h1>(2023)</h1>
              <p className="expressing">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="order">Order Now</p>
              <div className="buttons">
                <button>Amazon</button>
                <button>Google</button>
                <button>ibooks</button>
              </div>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_481,h_679,al_c,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="secondPage">
          <h1>Praise & Reviews</h1>
          <div className="row">
            <div className="flex">
              <p className="trigger">"</p>
              <p className="titleInfo">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="declaration">
                ‘Swan Isle’ is Griffith's best writing yet” The Times Book
                Review
              </p>
              <p className="line"></p>
            </div>
            <div className="flex">
              <p className="trigger">"</p>
              <p className="titleInfo">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="declaration">
                Grifith’s voice tells the story of all women “The Seattle Post
                Review”
              </p>
              <p className="line"></p>
            </div>
            <div className="flex">
              <p className="trigger">"</p>
              <p className="titleInfo">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="declaration">
                Grifith’s voice tells the story of all women “The Seattle Post
                Review”
              </p>
              <p className="line"></p>
            </div>
          </div>
        </div>
      </section>
      <section id="appearance">
        <div className="thirdPage">
          <h1>See Upcoming Appearances</h1>
          <p className="thirdP">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy.
          </p>
          <div className="box">
            <p>
              January 18th 2023, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST
            </p>
            <button className="btn">Join</button>
          </div>
          <div className="box">
            <p>
              January 31st 2023, The Good Read Club, Online Conversation with
              Kayla Griffith, 8PM - 9PM EST
            </p>
            <button className="btn">Join</button>
          </div>
          <div className="box">
            <p>
              January 18th 2023, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST
            </p>
            <button className="btn">Join</button>
            <img
              src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_221,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg"
              alt=""
              className="circleImage"
            />
          </div>

          <div className="innerDiv">
            <p className="nameWord">About Kayla Griffith</p>
            <p className="description">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="btn">Read more</button>
          </div>
        </div>
      </section>
      <footer>
        <p className="lastWord">
          © 2023 by K.Griffith. Proudly created with Wix.com
        </p>
      </footer>
    </div>
  );
}

export default App;
