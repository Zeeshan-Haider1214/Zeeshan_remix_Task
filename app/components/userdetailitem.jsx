import { Link } from "@remix-run/react";
function ExpenseListItem({id, name, email }) {
    function deleteExpenseItemHandler() {
      // tbd
    }
  
    return (
      <article className="expense-item">
        <div>
          <h2 className="expense-title">{name}</h2>
          <p className="expense-amount">{email}</p>
        </div>
        <menu className="expense-actions">
          <button onClick={deleteExpenseItemHandler}>Delete</button>
          <Link to={id}>Edit</Link>
        </menu>
      </article>
    );
  }
  
  export default ExpenseListItem;

  