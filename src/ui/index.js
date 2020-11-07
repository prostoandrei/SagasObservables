import { connect } from 'react-redux';
import { userFetchRequested } from '../actions'

export const FiltersComponent = (props) => {
    const { onClick, loading, error } = props;
    
    return (
        <div>
            <button onClick={onClick}>Filter 1</button>
            <button onClick={onClick}>Filter 2</button>
            <button onClick={onClick}>Filter 3</button>
            <button onClick={onClick}>Filter 4</button>

            {loading ? <div>Loading...</div> : <div>Not loading</div>}
            {error && 'error'}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onClick: () => dispatch(userFetchRequested()),
    }
  }

export const FiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FiltersComponent);