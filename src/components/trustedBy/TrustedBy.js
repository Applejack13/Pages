import "./trustedBy.scss";

import logo1 from "../../images/Logo1.svg";
import logo2 from "../../images/Logo2.svg";
import logo3 from "../../images/Logo3.svg";
import logo4 from "../../images/Logo4.svg";

export default function TrustedBy() {
  return (
    <div className='trustedBy'>
      <h3>Trusted by the Best</h3>
      <p></p>
      <div className='content'>
        <div className='firstPublisher'>
          <img src={logo1} alt='logo1' />
          <h4>Amazen Corp</h4>
          <p>
            A long established fact that a<br /> who looking at its layout.
          </p>
        </div>

        <div className='secondPublisher'>
          <img src={logo2} alt='logo2' />
          <h4>Megan Books</h4>
          <p>
            A long established fact that a
            <br /> who looking at its layout.
          </p>
        </div>

        <div className='thirdPublisher'>
          <img src={logo3} alt='logo3' />
          <h4>Los Books</h4>
          <p>
            A long established fact that a <br /> who looking at its layout.
          </p>
        </div>

        <div className='fourthPublisher'>
          <img src={logo4} alt='logo4' />
          <h4>Urban Lib </h4>
          <p>
            A long established fact that a <br /> who looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}
