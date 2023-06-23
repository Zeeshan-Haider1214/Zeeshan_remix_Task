const DUMMY_EXPENSES = [
    {
        id: 'e1',
        name: 'zeeshan haider',
        email: 'zeeshanturi875@gmail.com',
        date: new Date().toISOString(),
    },
    {
        id: 'e2',
        name: 'khan turi',
        email: 'khan@gmail.com',
        date: new Date().toISOString(),
    },
];

import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/userdetaillist";
import userdetail from '~/styles/userdetail.css';
export default function Expenseslayout() {
    return (

        <>
            <Outlet />
            <main>
                <ExpensesList expenses={DUMMY_EXPENSES} />
            </main>
        </>


    );
}

export function links() {
    return [{ rel: 'stylesheet', href: userdetail }]
}
