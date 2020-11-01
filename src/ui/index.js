const noop = () => { 
    console.log('click')
};

export const Filters = ({ onClick = noop }) => {
    return (
        <div>
            <button onClick={onClick}>Filter 1</button>
            <button onClick={onClick}>Filter 2</button>
            <button onClick={onClick}>Filter 3</button>
            <button onClick={onClick}>Filter 4</button>
        </div>
    );
}