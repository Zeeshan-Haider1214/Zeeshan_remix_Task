import ExpenseListItem from "./userdetailitem";

function ExpensesList({ expenses }) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            name={expense.name}
            email={expense.email}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
