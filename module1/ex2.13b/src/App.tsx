import Dog from "./dog";

const App = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Dog />
        <Dog />
        <Dog />
      </div>
    </>
  );
};

export default App;