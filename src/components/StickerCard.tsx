interface StickerProps {
    number: number;
    quantity: number;
    onCollected: () => void;
    onQuantityUpdated: (increaseStickerQuantity: boolean) => void;
}

function Sticker({number, quantity, onCollected, onQuantityUpdated}: StickerProps) {
    const stickerCollected = () => quantity > 0;

    return(
         <div className="col-3" onClick={() => { onCollected(); }}>
            <div className={`card border-2 rounded-4 shadow-sm bg-light align-items-center justify-content-center ${stickerCollected() ? "border-success bg-success-subtle" : ""}`}
                style={{ height: "100px" }}>
                { stickerCollected() && (<i className="bi bi-check-circle-fill position-absolute top-0 end-0 m-2 text-success"></i>)}
                <span className="fs-3 fw-bold">{number}</span>
                { stickerCollected() && (<div className="position-absolute bottom-0 rounded-4 d-flex gap-1 w-100 bg-success align-items-center justify-content-center">
                    <i className="bi bi-dash-circle" onClick={(e) => {
                        e.stopPropagation();
                        onQuantityUpdated(false);
                        }}>
                    </i>
                    <div className="fw-bold">
                        {quantity}
                    </div>
                    <i className="bi bi-plus-circle" onClick={(e) => {
                        e.stopPropagation();
                        onQuantityUpdated(true);
                        }}>
                    </i>
                </div>)}
            </div>
        </div>
    )
}

export default Sticker