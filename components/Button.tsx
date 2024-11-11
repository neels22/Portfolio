interface ButtonProps {
    label: string;
    className?: string;  // Optional custom class name
    imgSrc?: string;     // Optional image source
    imgAlt?: string;     // Optional image alt text
    onClick: () => void; // Required onClick handler
  }
  
  export default function Button({ label, className = '', imgSrc = '', imgAlt = '', onClick }: ButtonProps) {
    return (
      <button className={`btn ${className}`} onClick={onClick}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="btn-icon" />}
        <span className="btn-label">{label}</span>
      </button>
    );
  }
  