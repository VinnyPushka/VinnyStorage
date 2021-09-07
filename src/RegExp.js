//!   Регулярные выражения!
//!  . - любой одиночный символ
//!  [ ] - любой из них, диапазоны
//!  $ - конец строки
//!  ^ - начало строки - но внутри [ ] - означает "не" [^x] - все кроме 'x'
//!  \ - экранирование (напр.)
//!  \d - любую цифру
//!  \D - все что угодно, кроме цифр
//!  \s - пробелы
//!  \S - все кроме пробелов
//!  \w - буква
//!  \W - не цифробуквенное
//!  \b - граница слова
//!  \B - не границ

//!  g	Глобальный поиск.
//!  i	Регистронезависимый поиск.
//!  m	Многострочный поиск.
//!  y	Выполняет поиск начиная с символа,
//!     который находится на позиции свойства lastindex текущего регулярного выражения.

//?   Квантификация
//?   n{4} - искать n подряд 4 раза
//?   n{4,6} - искать n от 4 до 6
//?   * от нуля и выше
//?   + от 1 и выше
//?    ? - нуль или 1 раз
//?   ( reg | reg ) - или это или это
const str =
    "Всем привет, как дела, пока, 555 подоконник_стол_кровать, ахахах))))) :D /.";

str.replace(``, "N");

console.log(str);
