let React = {};

export function configure(configuration) {
  React = configuration.React;

  console.log(configuration.version);
}

export function Tasks({ config, explode }) {
  React.useEffect(() => {
    config?.configuredFetch("/home/v1/tasks")
  }, [])

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

      {explode && aVariableThatDoesntExist}
    </div>
  );
}

export default Tasks;
