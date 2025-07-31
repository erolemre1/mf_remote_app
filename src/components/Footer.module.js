const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    marginTop: '2rem',
  },
  footerServices: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '1200px',
    justifyContent: 'center',
    padding: '24px',
  },
  footerItem: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  flexImg: {
    width: '41px',
    height: '41px',
    marginRight: '8px',
  },
  title: {
    fontWeight: 600,
    fontSize: '14px',
    color: '#222',
  },
  subTitle: {
    fontSize: '12px',
    color: '#555',
  },
  accordion: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  },
  accordionItem: {
    padding: '1rem',
    borderRadius: '8px',
    marginRight: '90px',
  },
  accordionTitle: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: 'black',
  },
  socialIcons: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    gap: '12px',
  },
  socialIconsLi: {
    listStyle: 'none',
  },
  socialIconsSvg: {
    width: '45px',
    height: '45px',
    fill: 'white',
    color: 'white',
    backgroundColor: 'black',
    padding: '6px',
    borderRadius: '10px',
  },
  socialIconsA: {
    color: '#fff',
    fontSize: '20px',
    transition: 'color 0.2s ease',
  },
  socialIconsAHover: {
    color: '#aaa',
  },
  footerNav: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerNavSpan: {
    fontWeight: 'bold',
    color: 'black',
  },
  footerNavLi: {
    marginBottom: '0.5rem',
  },
  footerNavA: {
    textDecoration: 'none',
    color: '#333',
  },
  footerNavAHover: {
    textDecoration: 'underline',
  },
  newTag: {
    display: 'inline-flex',
    background: '#000',
    color: '#fff',
    fontSize: '10px',
    fontWeight: 600,
    marginLeft: '5px',
    padding: '2px 7px 1px 7px',
    borderRadius: '3px',
  },
  hideOnKiosk: {
    display: 'none',
  },
  tiktok: {
    fill: 'black',
    backgroundColor: 'white',
    color: 'unset',
    width: '60px',
    padding: 'unset',
    height: '60px',
    position: 'relative',
    bottom: '7px',
    right: '7px',
  },
  countrySwitcher: {
    color: 'black',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'start',
    marginLeft: '20px',
  },
  countrySwitcherImg: {
    marginRight: '5px',
    position: 'relative',
    bottom: '5px',
  },
};

export default styles