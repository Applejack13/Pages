import Button from "../../components/button/Button";

import firstBook from "../../images/firstBook.svg";
import secondBook from "../../images/secondBook.svg";

import "./booksList.scss";

export default function BooksList() {
  return (
    <div className='booksList'>
      <h3>Author’s Book Includes</h3>
      <p></p>

      <div className='content'>
        <div className='firstBook'>
          <img src={firstBook} alt='firstBook' />
          <div className='firstBookInfo'>
            <h4>Atomic One's</h4>
            <p>
              Many variations of passages of Lorem Ipsum willing araise
              alteration in some form.
            </p>

            <ul className='details'>
              <li>
                <p>
                  Pages: <br />
                  <span>586 pages</span>
                </p>
              </li>
              <li>
                <p>
                  Length: <br />
                  <span>10 Hours</span>
                </p>
              </li>
            </ul>
            <Button text='Order Today' className='orderButtonClass' />
          </div>
        </div>

        <div className='secondBook'>
          <img src={secondBook} alt='secondBook' />
          <div className='secondBookInfo'>
            <h4>The Dark Light</h4>
            <p>
              Many variations of passages of Lorem Ipsum willing araise
              alteration in some form.
            </p>

            <ul className='details'>
              <li>
                <p>
                  Pages: <br />
                  <span>586 pages</span>
                </p>
              </li>
              <li>
                <p>
                  Length: <br />
                  <span>10 Hours</span>
                </p>
              </li>
            </ul>
            <Button text='Order Today' className='orderButtonClass' />
          </div>
        </div>
      </div>
    </div>
  );
}
