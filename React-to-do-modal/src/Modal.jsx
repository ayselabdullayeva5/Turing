function Modal({ onRemove, onCancel }) {
    return (
        <div style={{
            position: "fixed",
            top: "200px",
            left: "53%",
            transform: "translateX(-50%)",
            color: "#54170e",
            fontWeight: "600",
            borderRadius: "25px",
            fontSize: "19px",
            fontFamily: "cursive",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: "1000",
            width: "600px"
          }}>
            <div className="modal">
                <p>Are you sure you want to delete this task?</p>
                <div className="modal-buttons">
                    <button onClick={onRemove} className="remove">Remove</button>
                    <button onClick={onCancel} className="cancel">Cancel<i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
