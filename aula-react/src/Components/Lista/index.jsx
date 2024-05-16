export const Lista = () => {
  const lista = [
    {
      nome: "Projeto novo",
      responsavel: "Gaby Britto",
      valor: 1200
    },
    {
      nome: "Projeto do mar",
      responsavel: "Britto",
      valor: 5000
    },
    {
      nome: "Dog new",
      responsavel: "Gaby",
      valor: 10200
    }
  ]
  return (
    <main className="Lista">
      <section className="content-list">
      <h1>Lista</h1>
       <img src="http://lorempixel.com.br/300/250/?1" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam
          ducimus asperiores consequuntur explicabo, eligendi maiores libero
          nulla, eveniet accusamus assumenda laborum dolores expedita iusto
          molestiae in ipsa quos qui.
        </p>
      </section>
      <section className="list-names">
        <h1>Lista nomes</h1>
        {lista.map((item, index) => {
          return(
            <div key={index} className="listagem">
              <strong>Nome: </strong> <span>{item.nome}</span>
             <br />
              <strong>Responsável:</strong> <span>{item.responsavel}</span>
              
              <strong>Valor: </strong><span>{item.valor}</span>
            </div>
          )
        })}
      </section>
    </main>
  );
};
