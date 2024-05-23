import React from "react";

import book from "../../images/Book.svg";

import "./banner.scss";

export default function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <p> Welcome to Pages</p>
        <h2>Books are uniquely portable magic</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>

        <div className='buttons'>
          <h3>Order Today</h3>
          <h3>Read Free Demo</h3>
        </div>

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
          <li>
            <p>
              Ratings: <br />
              <span>4.5/5 (305 ratings)</span>
            </p>
          </li>
        </ul>
      </div>

      <div className='book'>
        <img src={book} alt='book' />
      </div>
    </div>
  );
}
