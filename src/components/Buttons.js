const Buttons = () => (
  <div className="calculator">
    <div className="calculator__output">0</div>
    <button type="button" className="calculator__AC">AC</button>
    <button type="button" className="calculator__plus-minus">+/-</button>
    <button type="button" className="calculator__per">%</button>
    <button type="button" className="calculator__divide operation">÷</button>
    <button type="button" className="calculator__n">7</button>
    <button type="button" className="calculator__n">8</button>
    <button type="button" className="calculator__n">9</button>
    <button type="button" className="calculator__multiply operation">x</button>
    <button type="button" className="calculator__n">4</button>
    <button type="button" className="calculator__n">5</button>
    <button type="button" className="calculator__n">6</button>
    <button type="button" className="calculator__subtract operation">-</button>
    <button type="button" className="calculator__n">1</button>
    <button type="button" className="calculator__n">2</button>
    <button type="button" className="calculator__n">3</button>
    <button type="button" className="calculator__add operation">+</button>
    <button type="button" className="calculator__zero">0</button>
    <button type="button" className="calculator__dot">.</button>
    <button type="button" className="calculator__equals operation">=</button>
  </div>
);

export default Buttons;
