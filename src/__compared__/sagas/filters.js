import { connect } from 'react-redux';
import { FiltersComponent } from '../../ui'
import { userFetchRequested } from '../../actions'

const mapStateToProps = state => {
    return {
        loading: state.loading
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