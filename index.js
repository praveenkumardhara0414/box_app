const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="card-container">
      <Box className="class-1" text="Small" />
      <Box className="class-2" text="Medium" />
      <Box className="class-3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
