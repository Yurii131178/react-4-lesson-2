import css from './Click1.module.css';
export default function Click1() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Тиць', event.target);
  };

  return (
    <>
      <button className={css.button} onClick={handleClick}>
        ТИЦЯЙ
      </button>

      <button
        className={css.button}
        onClick={() => console.log("I'm inline callback")}
      >
        INLINE
      </button>
    </>
  );
}

//onClick={} - імя атрибута і сюди треба передати callback функцію. Тобто, коли користувач клікає на кнопку,викличи цю функцію.
/**
 1.вона може бути зовнішнью і ми передаємо на неї посилання в onClick)
 
 const handleClick = () => {
  console.log("CLick")
 }
  <Button onClick={handleClick}>Тицяй</Button>

 2ю або інлайновою(всередині) і замість посилання на функцію при кліку записуємо просто так (стрілкова функція):
 
 <button onClick={() => console.log(I'm inline callback)} </button>
 */

// створюйте зовнішню. це зручно
/**
 По дефолту кожна така функція буде отримувати (event). Це обєкт події. 
 він за замовч. - "any", отже - треба типізувати. Як це зробити? 
 ВСІ ТЕГИ, ЯКІ МИ ВИКОРИСТОВУЄМО В JSX (<button className={css.button} onClick={handleClick}> ТИЦЯЙ </button>)) ЦЕ ВБУДЕНІ КОМПОНЕНТИ В REACT. Це не тег <button></button>, це якийсь вбудований компонент, який під капотом рендерить тег <button>. Наведіть на "onClick" і побачите: =====(property) React.DOMAttributes<HTMLButtonElement>.onClick?: 
 React.MouseEventHandler<HTMLButtonElement> | undefined====. 

 !!!!!! Handler не додавайте, це опис функціі, а нам треба сам event.
 
 беремо наступне: React.MouseEvent - наш вбудований тип. Типізуємо тепер наш event ---> 

 event: React.MouseEvent 

Це -generic, тому треба чітко вказати, куди ми клікаємо--> 

<HTMLButtonElement>

handleClick = (event: React.MouseEvent<HTMLButtonElement>

тепер ми чітко сказали TS, що: це наша функція, яка очікує event (подію), це подія кліку миші(event: React.MouseEvent) по кнопці(<HTMLButtonElement>).

терер, на самому event після крапки відкриваються всі можливі дії:

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Тиць', event.target);
  }; // Тиць <button class="_button_a10yd_1">ТИЦЯЙ</button>

!!!!Отже, як типізувати вам завжди підкаже hover на "onClick"!!!!!!!!!!!!  

цЕ НАМ ПОРТІБНО ДЛЯ ТИПІЗАЦІЇ. Якщо event функції в коді вакм не портібен, можете його не оголшшувати.





 */
