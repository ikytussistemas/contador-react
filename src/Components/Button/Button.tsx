type buttonProps = {
  style: string,
  text: string,
  click: any
}

const Button = ({style , text, click}:buttonProps) => {
  return (
    <button
      className={`counter-button ${style}`}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
