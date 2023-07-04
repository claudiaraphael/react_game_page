/* <>this tells react that all this code under the <> is like a div in the dom without having to create an actual div */

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Rio de Janeiro",
    "Tokyo",
    "London",
  ];
  items = [];

 
    return (
      <>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup;
