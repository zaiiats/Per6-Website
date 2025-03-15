function Button({text}:{text:string}) {
  return (
    <button className='button'>
      <div className='button__text'>{text}</div>
      <div className='button__rotated' />
    </button>
  );
}



export default Button
