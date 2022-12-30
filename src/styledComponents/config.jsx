const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

  const fonts = {
    title: " font-family: 'Rubik Marker Hatch', cursive;letter-spacing:0.3rem;",
    text: "font-family: 'Rubik', sans-serif; font-size:2.5rem;"
  }

  const colors = {
    primary:"#2A9D8F",
    secondary: "#264653",
    tertiary: "#E9C46A",
    quaternary: "#F4A261",
    quinary: "#E76F51",
    gray: "#4b4747"
  }


export {device,fonts,colors}