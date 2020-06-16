import React, { Component } from 'react';

class Header extends Component {

   // typeWriter(id, ar) {
   //    // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
   //    let i = 0,
   //       a = 0,
   //       isBackspacing = false,
   //       isParagraph = false;

   //    // Speed (in milliseconds) of typing.
   //    let speedForward = 100, //Typing Speed
   //       speedWait = 1000, // Wait between typing and backspacing
   //       speedBetweenLines = 1000, //Wait between first and second lines
   //       speedBackspace = 25; //Backspace Speed

   //    let element = $("#" + id),
   //       aString = ar[a],
   //       eHeader = element.children("h1"), //Header element
   //       eParagraph = element.children("p"); //Subheader element

   //    // Determine if animation should be typing or backspacing
   //    if (!isBackspacing) {

   //       // If full string hasn't yet been typed out, continue typing
   //       if (i < aString.length) {

   //          // If character about to be typed is a pipe, switch to second line and continue.
   //          if (aString.charAt(i) == "|") {
   //             isParagraph = true;
   //             eHeader.removeClass("cursor");
   //             eParagraph.addClass("cursor");
   //             i++;
   //             setTimeout( this.typeWriter(id, ar) , speedBetweenLines);

   //             // If character isn't a pipe, continue typing.
   //          } else {
   //             // Type header or subheader depending on whether pipe has been detected
   //             if (!isParagraph) {
   //                eHeader.text(eHeader.text() + aString.charAt(i));
   //             } else {
   //                eParagraph.text(eParagraph.text() + aString.charAt(i));
   //             }
   //             i++;
   //             setTimeout(this.typeWriter(id, ar) , speedForward);
   //          }

   //          // If full string has been typed, switch to backspace mode.
   //       } else if (i == aString.length) {

   //          isBackspacing = true;
   //          setTimeout(this.typeWriter(id, ar), speedWait);

   //       }

   //       // If backspacing is enabled
   //    } else {

   //       // If either the header or the paragraph still has text, continue backspacing
   //       if (eHeader.text().length > 0 || eParagraph.text().length > 0) {

   //          // If paragraph still has text, continue erasing, otherwise switch to the header.
   //          if (eParagraph.text().length > 0) {
   //             eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
   //          } else if (eHeader.text().length > 0) {
   //             eParagraph.removeClass("cursor");
   //             eHeader.addClass("cursor");
   //             eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
   //          }
   //          setTimeout(this.typeWriter(id, ar), speedBackspace);

   //          // If neither head or paragraph still has text, switch to next quote in array and start typing.
   //       } else {

   //          isBackspacing = false;
   //          i = 0;
   //          isParagraph = false;
   //          a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
   //          setTimeout(this.typeWriter(id, ar), 50);

   //       }
   //    }
   // }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var nameArray = this.props.data.nameArray;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var company = this.props.data.company;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
         // this.typeWriter("output", nameArray);
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {name}</h1>
               <h3>I'm a <span>{city}</span> based <span>{occupation}</span>, currently employed at <sapn>{company}</sapn>, building <sapn>IOT / non-IOT</sapn> based solutions to <sapn>optimize Supply Chain Network</sapn> for various clients, which are scalable, modular & effecient. Resulting in reduced development time, cleaner & understandable code, huge cost savings and increased asset utilization on the production site.</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
            </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

         </header >
      );
   }
}

export default Header;
