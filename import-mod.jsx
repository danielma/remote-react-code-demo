import React from 'react'
import Modal from 'react-modal'

export function configure(configuration) {
  // if (configuration.React) React = configuration.React
  console.log(configuration.version);
}

export function Tasks({ config, explode }) {
  React.useEffect(() => {
    config?.configuredFetch("/home/v1/tasks")
  }, [])

  const [isModalOpen, setIsModalOpen] = React.useState(false)

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

      <button onClick={() => setIsModalOpen(true)}>Open!</button>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div style={{ backgroundColor: "blue" }}>A modal!</div>
      </Modal>

      {explode && aVariableThatDoesntExist}
    </div>
  );
}

export default Tasks;
