import { Logo } from '../logo'

export const FiltersComponent = (props) => {
    const { onClick, loading } = props;
    
    return (
        <div>
            <button onClick={onClick}>Filter 1</button>
            <button onClick={onClick}>Filter 2</button>
            <button onClick={onClick}>Filter 3</button>
            <button onClick={onClick}>Filter 4</button>
            
            {loading ? <div><Logo /></div> : null}
        </div>
    );
}
