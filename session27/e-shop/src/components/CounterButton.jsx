function CounterButton({ handleIncrement, label }) {
  return (
    <>
      <button onClick={handleIncrement}> {label}</button>
    </>
  );
}
export default CounterButton;
