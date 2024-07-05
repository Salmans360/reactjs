const Style = () => ({
  left__dialog: {
    position: 'fixed',
    zIndex: 999,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    background: 'rgba(249, 250, 252, 0.6)',
    boxShadow: '0px 0px 40px rgba(38, 50, 56, 0.06);',
    backdropFilter: ' blur(30px)',
    display: 'none',
  },
  toggleDisplay: {
    display: 'block',
  },
  dialog__box__container: {
    overflowY: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  dialog__box: {
    background: '#f6f8fa',
    border: '2px solid #ffffff',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 40px rgb(38, 50, 56, 0.06)',
    borderRadius: '15px',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    // padding: '1.5rem',
  },
});
export default Style;
