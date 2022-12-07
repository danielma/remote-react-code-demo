let React = {};

export function configure(configuration) {
  React = configuration.React;

  console.log(configuration.version);
}

export function Tasks(props) {
  console.log(props);

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: 2,
        backgroundColor: "#CCC",
      }}
    >
      <ul>
        <li>An Item!</li>
      </ul>
      {children}
    </div>
  );
}

export default Tasks;
