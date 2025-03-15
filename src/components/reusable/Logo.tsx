import logo1 from '../../assets/logo-1.png';
import logo2 from '../../assets/logo-2.png';

function Logo({ type, size }: { type: string; size: string }) {
  const getSize = () => {
    switch (size) {
      case 'small':
        return '2rem';
      case 'medium':
        return '5rem';
      case 'big':
        return '13rem';
      default:
        return '5rem';
    }
  };

  return (
    <img
      src={type === 'original' ? logo1 : logo2}
      alt='Logo'
      style={{ maxHeight: getSize() }}
    />
  );
}

export default Logo;
