import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = () => setCounter( counter + 1 );
    const handleSubs = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

  return (
    <>
        <h1>CounterApp</h1>
        <h1> { counter } </h1>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubs }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: -1
}