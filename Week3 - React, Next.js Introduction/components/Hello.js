export default function Hello({ text, imgSrc }) {
  // instead of   let {text, imgSrc} = props;
  // let text = "Hello World";
  // let imgSrc = "https://smapse.com/storage/2017/07/converted/825_585_seneca-college-4.jpg";
  return (
    <>
      <p className="blue">{text.toUpperCase()}!</p>
      <img src={imgSrc} alt="seneca" />
    </>
  );
}

Hello.defaultProps = {
  // incase 1 or more props is missing from component
  text: "(text here)",
  imgSrc: "https://placehold.co/600x400?text=Unavailable",
};
