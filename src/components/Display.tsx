function Display({ operand, equation }: any) {
  return (
    <>
        <div className="upper display">{equation.toString().replace(/[x*]/g, "⋅")}</div>
        <div id="display" className="lower display">{operand}</div>
    </>
  );
}

export default Display;
