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
  avatar__group: {
    '& .MuiAvatarGroup-root': {
      paddingRight: '1.5rem',
    },
    '& .MuiAvatar-root': {
      backgroundColor: 'var(--color-secondary)',
      height: '32px',
      width: '32px',
      border: '1px solid #fff',
      color: 'var(--color-secondary)',
    },
    '& .colored': {
      paddingBottom: '.5rem',
      borderBottom: '1.5px solid var(--color-secondary)',
    },
  },
  fields__space: {
    '& .control-width': {
      width: '48%',
    },
  },
  linear__progress: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiLinearProgress-root': {
      height: '6px',
      borderRadius: '38px',
      backgroundColor: 'rgba(109, 125, 139, .2)',
      width: 'calc(100% - 100px)',
    },
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'var(--color-error)',
      borderRadius: '38px',
    },
  },
  linear__progress__orange: {
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'var(--color-secondary)',
    },
  },
  linear__progress__green: {
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'var(--color-success)',
    },
  },
  linear__progress__success: {
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#0fa354',
    },
  },
  checkbox: {
    '& .MuiTypography-root': {
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '17px',
      color: 'var(--color-grey)',
      userSelect: 'none',
    },
  },
});
export default Style;
