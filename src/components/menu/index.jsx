import React from "react";

function Menu() {
    const [isOpen, setIsOpen] = React.useState(true);

    const closeDialog =(e) => setIsOpen(false);

    return (
        <dialog open={isOpen} className={`dialog ${isOpen ? '' : 'dialog_closed'}`}>
            <h1>tic-tac-toe</h1>
            <form method="dialog" className="dialog-form">
                <button onClick={closeDialog}>start game</button>
            </form>
        </dialog>
    )
}

export default Menu;