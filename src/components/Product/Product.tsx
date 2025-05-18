interface ProductProps {
    name: string;
    imgUrl: string;
    price: number;
};


export default function Product({name, imgUrl, price}: ProductProps) { // деструктурований props в сигнатурі функції. Код чистіше і читабельніше.
    return (
        <>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
            <p>Price: {price} credits</p>
        </>
    );
}