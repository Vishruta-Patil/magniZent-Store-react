export const BtnSlider = ({ dir, positionSlide }) => {
    return (
        <button className={dir === "prev" ? "btn-carousel prev" : "btn-carousel next"} onClick={positionSlide}>
            <span class="material-icons dir-icon">
                {dir === "prev" ? "arrow_back_ios_new" : "arrow_forward_ios"}
            </span>
        </button>
    )
}

// className="btn-carousel next"