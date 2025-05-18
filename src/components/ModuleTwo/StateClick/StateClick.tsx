import { useState } from 'react';
import css from './StateClick.module.css';

export default function StateCLick() {
  const [clicks, setClics] = useState(0);

  //   let clicks = 0;

  const updateClics = () => {
    setClics(clicks + 1);
    console.log(clicks);
  };

  return (
    <>
      <button className={css.button} onClick={updateClics}>
        useStateCliscs: {clicks}
      </button>
    </>
  );
}

/**
!!!!Для оновлення інтерфейсу нам потрібен стан (State)!!!

Будь-яка рандомна змінна у вашому коді (let clicks = 0;) має назву: 
"НЕРЕАКТИВНЕ ЗНАЧЕННЯ", за зміноою якої REACT абсолютно не слідкує!!!

Отже, для оновлення інтерфейсу нам потрібен State - ВНУТРІШНІ ДИНАМІЧНІ ДАНІ НАШИХ КОМПОНЕНТІВ. КОМПОНЕНТ ПРИЙМАЄ ПРОПСИ І ПОВЕРТАЄ JSX, А ВСЕРЕДИНІ У НЬОГО МОЖЕ БУТИ СТАН.

Коли User взаємодіє з інтерфейсом (клікає щось), нам треба оновити цей стан (наше динамічне/реактивне значення) і автоматично при оновленні цього значення React оновлює інтерфейс.

оголошуємо стан - викор-мо hook(вбудована функція):  

import {use State} from 'react';

- hook - це можливість зачепитися за якийсь вбудований функціонал React.

викликаємо хук і передаємо в нього початкове значення:

useState(0)

ця функція () завжди повертає масив з двох значень, які ми одраху деструктуризуємо [1 елемент(саме значення: clicks), 2 елемент(функція зміни цього значення: setClicks)] - [clicks, setClicks].

const [clicks, setClics] = useState(0);

тепер його треба оновити:

!!! ЄДИНИЙ СПОСІБ ОНОВЛЕННЯ СТАНУ, ЦЕ ВИКОРИСТАННЯ СЕТТЕРА (setSomething).
треба викликати саму цю функцію і передати їй у викик (це виклик!!) наше нове значення стану. У нашому випадку каунтер і ми додаємо одиничку. 

const updateClics = () => {
    setClics(clicks + 1);
    console.log(clicks);
};

 *  */

// Hook викликаємо тільки у тілі функції

// export default function() { !!!ТУТ!!! перед return <>  </> }

/**

!!! setClicks НЕ ОНОВЛЮЄ стан. Він його РЕЄСТРУЄ!!!
 */
