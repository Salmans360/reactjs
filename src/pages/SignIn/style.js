const Style = () => ({
  signin__container: {
    padding: '1.5rem',
    minHeight: '100%',
    height: 'max-content',

    // mixBlendMode: 'multiply',
    // backgroundSize: 'cover',
    boxShadow: 'inset 0 0 0 2000px rgba(31, 6, 62, 0.6)',
    backgroundColor: 'var(--color-grey)',
  },
  form__container: {
    backgroundColor: 'var(--color-white)',
    padding: '3rem',
  },

  logo: {
    height: '60px',
    width: '100px',
  },
  py__2: {
    padding: '3rem 0 6rem',
  },
  column__bw: {
    flexDirection: 'column !important',
    alignItems: 'flex-start',
    padding: '3rem 5rem',
  },
  helper_text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '16px',
    paddingTop: '0.5rem',
    color: '#919da8',
    '& .colorChanger': {
      fontWeight: 600,
      cursor: 'pointer',
      color: 'rgba(255, 98, 25, 0.925)',
    },
  },
});
export default Style;
