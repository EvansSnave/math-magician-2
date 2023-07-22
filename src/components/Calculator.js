import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';

function Calculator() {
  const [dataNow, newData] = useState({});

  function getData(event) {
    const button = event.target.name;
    newData(calculate(dataNow, button));
  }

  function Button({ values, className }) {
    return (
      <button type="button" name={values} className={className} onClick={getData}>
        {values}
      </button>
    );
  }

  Button.propTypes = {
    values: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  function Display({ innerData }) {
    return <div id="calculator__display">{innerData}</div>;
  }

  Display.propTypes = {
    innerData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  function UtilityPad() {
    const buttonsUser = ['AC', '+/-', '%'];
    const results = [];

    for (let i = 0; i < buttonsUser.length; i += 1) {
      results.push(<Button key={buttonsUser[i]} values={buttonsUser[i]} className="calculator__grey-btn" />);
    }

    return results;
  }

  function NumericPad() {
    const results = [];
    const rows = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      [0, '.'],
    ];

    for (let row = 0; row < rows.length; row += 1) {
      for (let number = 0; number < rows[row].length; number += 1) {
        results.push(<Button key={rows[row][number]} values={rows[row][number]} className="calculator__grey-btn" />);
      }
    }

    return results;
  }

  function OperatorsPad() {
    const operations = ['÷', 'x', '+', '-', '='];
    const results = [];

    for (let i = 0; i < operations.length; i += 1) {
      results.push(<Button key={operations[i]} values={operations[i]} className="calculator__orange-btn" />);
    }

    return results;
  }

  function creater() {
    if (!dataNow.total) {
      dataNow.total = '';
    }

    if (!dataNow.operation) {
      dataNow.operation = '';
    }

    if (!dataNow.next) {
      dataNow.next = '';
    }

    return dataNow.total + dataNow.operation + dataNow.next;
  }

  const RESULT = creater();

  return (
    <div id="calculator" className="grid">
      <Display innerData={RESULT || 0} />
      <div id="calculator__keypad" className="grid">
        <div id="calculator__grey-btns-container" className="grid">
          <UtilityPad />
          <NumericPad />
        </div>
        <div id="calculator__orange-btns-container" className="grid">
          <OperatorsPad />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
