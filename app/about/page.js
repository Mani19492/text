'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import './about.css';
import Nav from '../nav/page';

const About = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const formListRef = useRef(null);

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
    const formList = formListRef.current;
    const widthItem = formList.querySelector('.item').offsetWidth;

    nextButton.onclick = function () {
      formList.scrollLeft += widthItem;
    };

    prevButton.onclick = function () {
      formList.scrollLeft -= widthItem;
    };
  }, []);

  return (
    <div>
      
<Nav />
      <section className="home" id="home">
        <video autoPlay muted loop className="bg-video">
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="about-header">About</h1>
        <div id="formList" ref={formListRef}>
          <div id="list">
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Chopper</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Doctor</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Cuteness</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Repeat for other items */}
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="item">
              <div className="avatar">
                <Image src="/pic.jpg" alt="Avatar" width={100} height={100} />
              </div>
              <div className="content">
                <table width="100%" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Brook</td>
                    </tr>
                    <tr>
                      <td>Occupation</td>
                      <td>Pirate</td>
                    </tr>
                    <tr>
                      <td>Strength</td>
                      <td>Immortality</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="nameGroup">Straw Hat Pirates Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Add the remaining items similarly */}
          </div>
        </div>

        <div className="direction">
          <button id="prev" ref={prevButtonRef}> &lt; </button>
          <button id="next" ref={nextButtonRef}> &gt; </button>
        </div>
      </section>
    </div>
  );
};

export default About;
