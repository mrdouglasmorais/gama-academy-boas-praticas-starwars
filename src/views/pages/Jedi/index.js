let Jedi = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h2>Caro Jedi, bem vindo a ordem.</h2>
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Jedi;