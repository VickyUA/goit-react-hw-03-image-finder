import { Component } from 'react';
import css from 'components/styles.module.css';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={css.loadMoreBtn}
        onClick={() => this.props.onClick()}
      >
        Load more
      </button>
    );
  }
}

export default Button;
