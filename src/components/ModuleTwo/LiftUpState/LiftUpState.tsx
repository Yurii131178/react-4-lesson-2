import css from './LiftUpState.module.css';

interface LiftUpStateProps {
  value: number;
  onUpdate: () => void;
}

export default function LiftUpState({ value, onUpdate }: LiftUpStateProps) {
  return (
    <button className={css.button} onClick={onUpdate}>
      LiftUpState: {value}
    </button>
  );
}

// укожного компонента <StateCLick /> свій локальний (внутрішній) стан!!
//  !!!тому вони оновлюються незалежною!!!

/**====ПІДНЯТТЯ СТАНУ====**
 
ТЕПЕР ТРЕБА - ЩОБ ВСІ КНОПКИ ТРЕКАЛИ ТУСАМУ КІЛЬКІСТЬ КЛІКІВ НЕЗАДЕЖНО ВІД ТОГО, НА ЯКУ ТИЦЯЄШ + І ВІДОБРААЖАЛАСЬ ЗАГАЛЬНА КІЛЬКІСТЬ КЛІКІВ!!!

ЩО ТРЕБА ЗРОБИТИ? 

ТРЕБА ПІДНЯТИ СТАН. ТРЕБА ЗНАЙТИ СПІЛЬНИЙ БАТЬКІВСЬКИЙ КОМПОНЕНТ І ПЕРЕНЕСТИ СТАН ТУДИ.

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

отже, в батьківському компоненті зберігається стан прокидається пропсами в компоненти. Значення стану "clicks" прокидається пропсо і функція оновлення стану
(const updateClics = () => {
  setClics(clicks + 1);
  console.log(clicks); ) також прокидається пропсом в компоненти:
  =====================компоненти=================================

exp/def/fun/ LiftUpState({ value, onUpdate }: LiftUpStateProps) {
  return (<button className={css.button} onClick={onUpdate}>
        LiftUpState: {value}</button>
  );
} 

Відповідно, ось цей prop { value } - це потос=чне значення стану [clicks, ....], а { onUpdate } - це функція, яка змінює стан.

Що відбувається:

Коли змінюється стан [clicks] оновлюється весь батьківсбкий компонент (у нас він зветься ModuleTwo), тобто він викликається, оновлюється весь JSX, і наші компоненти:

<LiftUpState value={clicks} onUpdate={updateClics} />
<LiftUpState value={clicks} onUpdate={updateClics} />
<LiftUpState value={clicks} onUpdate={updateClics} />

отримують нові пропси: нове значення для {value} піде їм, відповідно вони також оновлюються.

бо !!!!!!!компоненти оновлюються лише в двох випадках!!!!!!

1. зміна внутрішнбого стану: const [clicks, setClics] = useState(0);
2. приходять нові пропси: ({ value, onUpdate }: LiftUpStateProps)

як пропси можуть змінитися?

це коли значення пропса це - стан його батьківського елемента.


  
 */
