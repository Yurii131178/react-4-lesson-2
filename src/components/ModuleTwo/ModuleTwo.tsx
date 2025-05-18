import css from './ModuleTwo.module.css';
import Click1 from './Click1/Click1';
import StateCLick from './StateClick/StateClick';
import { useState } from 'react';
import LiftUpState from './LiftUpState/LiftUpState';

export default function ModuleTwo() {
  const [clicks, setClics] = useState(0);

  const updateClics = () => {
    setClics(clicks + 1);
    console.log(clicks);
  };

  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>ModuleTwo</h2>
      <Click1 />
      <br />
      <br />
      <StateCLick />
      <StateCLick />
      <StateCLick />
      <br />
      <br />
      <p style={{ color: 'yellow' }}> Number of clicks: {clicks}</p>
      <LiftUpState value={clicks} onUpdate={updateClics} />
      <LiftUpState value={clicks} onUpdate={updateClics} />
      <LiftUpState value={clicks} onUpdate={updateClics} />
    </section>
  );
}

// укожного компонента <StateCLick /> свій локальний (внутрішній) стан!!
//  !!!тому вони оновлюються незалежною!!!

/**====ПІДНЯТТЯ СТАНУ====**
 =======================================================================================
ТЕПЕР ТРЕБА - ЩОБ ВСІ КНОПКИ ТРЕКАЛИ ТУ САМУ КІЛЬКІСТЬ КЛІКІВ НЕЗАДЕЖНО ВІД ТОГО, НА ЯКУ ТИЦЯЄШ + І ВІДОБРААЖАЛАСЬ ЗАГАЛЬНА КІЛЬКІСТЬ КЛІКІВ!!!
========================================================================================
проблема така: ми неможемо використати цей стан, бо він локально-унікальний, а також стан із вкладеного компонента ми не можемо передати на верх

ЩО ТРЕБА ЗРОБИТИ? 
ТРЕБА ПІДНЯТИ СТАН. 

ModuleTwo - наш БАТЬКІВСЬКИЙ КОМПОНЕНТ. Передаємо сюди стан з комплнента LiftUpState:

*** const [clicks, setClics] = useState(0); ***

також передаємо сюди hook:

*** import { useState } from 'react'; ***

переносиму функцію зміни:

const updateClics = () => {
  setClics(clicks + 1);
  console.log(clicks); 

Але тепер маємо проблему: у нашого компонентів LiftUpState немає ні функції оновлення стану, ні самого значення стану.

Що робити????

МИ ПЕРЕДАЄМО ЦІ ЗНАЧЕННЯ ЧЕРЕЗ props В КОМПОНЕНТИ.

ПАТЕРН ТАКИЙ: ЗНАХОДИМО СПІЛЬНОГО БАТЬКА ЗВЕРХУ --> ТАМ СТВОРЮЄТЕ СТАН І ФУНКЦІЮ ЗМІНИ СТАНУ --> І ЗНАЧЕННЯ СТАНУ І ФУНКЦІЮ ЗМІНИ СТАНУ ПЕРЕДАЄТЕ ПРОПСАМИ ВАШІ КОМПОНЕНТИ. 

ТАКИМ ЧИНОМ ДЕКІЛЬКА СУСІДНІХ КОМПОНЕНТІВ МОЖУТЬ ВИКОРИСТОВУВАТИ І ЗМІНЮВАТИ ОДИН І ТОЙ САМИЙ СТАН.

ПЕРЕДАЄМО ПРОПСИ (СТВОРЮЄМО ІНТРЕФЕЙС І ВИКЛОРИСТАЄМО ТАКІ ПРОПСИ):

interface LiftUpStateProps {
  value: number;
  onUpdate: () => void; // ф-я оновл. стану нічого не отр-є і передає - void;
}

додаємо в наш компонент:

export default function LiftUpState({ value, onUpdate }: LiftUpStateProps) {
  return (
    <>
      <button className={css.button} onClick={onUpdate}>
        LiftUpState: {value}
      </button>
    </>
  );
}




*/
