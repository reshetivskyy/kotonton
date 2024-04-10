const Item = ({ size, src, top, left, onClick }) => {
    return (
        <img
            onClick={onClick}
            src={src}
            alt="fallitem"
            style={{
                position: "absolute",
                top: top,
                left: left,
                width: size,
                height: size,
                cursor: "pointer",
            }}
        />
    );
};

export default Item;
