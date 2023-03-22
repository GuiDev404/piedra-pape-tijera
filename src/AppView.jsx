import React from 'react';
import Card from './components/Card';

const AppView = ({ options, handleSelection, resultado, userSelection, computerSelection }) => {
  return (
    <div className='container'>
      <header>
        <h1> Piedra, Papel y Tijera </h1>
        <p className='description text-muted'>
          Juega el clásico juego de manos
        </p>
      </header>

      <main>
        <div className='cards'>
          <Card participante={'Tu'} className='card__options__user'>
            {options.map((opt) => {
              const selectionClass =
                userSelection.name === opt.name ? 'card__option__selected' : '';

              return (
                <div
                  className={`card__option ${selectionClass}`}
                  onClick={handleSelection(opt)}
                  key={opt.name}
                >
                  <img src={opt.img} alt={opt.name} className='option__img' />
                </div>
              );
            })}
          </Card>

          <p className='resultado'>{resultado !== null ? resultado : 'VS'}</p>

          <Card participante='Computadora'>
            {computerSelection ? (
              <img
                src={computerSelection.img}
                alt={computerSelection.name}
                className='option__img'
              />
            ) : (
              <p className='text-muted'> Esperando tu selección </p>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AppView;
