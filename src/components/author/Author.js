import "./author.scss";

import contacts from "../../images/ContentQR.svg";
import A1 from "../../images/Author1.svg";

export default function Author() {
  return (
    <div className='about'>
      <div className='containerAboutAuthor'>
        <div className='authorPhoto'>
          <img src={A1} alt='author' />
        </div>

        <div className='aboutAuthor'>
          <h3>About Author</h3>
          <p></p>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <div className='counter'>
            <ul>
              <li>
                <p>
                  02
                  <br />
                  <span>Books Published</span>
                </p>
              </li>
              <p></p>
              <li>
                <p>
                  4.5
                  <br />
                  <span>User Reviews</span>
                </p>
              </li>
              <p></p>
              <li>
                <p>
                  04
                  <br />
                  <span>Best Seller Awards</span>
                </p>
              </li>
            </ul>
          </div>

          <div className='contacts'>
            <img src={contacts} alt='contacts' />
          </div>
        </div>
      </div>
    </div>
  );
}
